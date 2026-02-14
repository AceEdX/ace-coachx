import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useAdminRole } from "@/hooks/useAdminRole";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Plus, Trash2, Save, BookOpen, GripVertical, ChevronDown, ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface LessonForm {
  id: string;
  title: string;
  duration: string;
  description: string;
  content: string;
  practicalExample: {
    title: string;
    scenario: string;
    steps: string[];
    tips: string[];
  };
  keyTakeaways: string[];
}

interface ModuleForm {
  id: string;
  title: string;
  description: string;
  lessons: LessonForm[];
}

interface CourseForm {
  slug: string;
  title: string;
  description: string;
  long_description: string;
  category: string;
  duration: string;
  instructor: string;
  instructor_bio: string;
  ai_powered: boolean;
  published: boolean;
  modules: ModuleForm[];
}

const emptyLesson = (): LessonForm => ({
  id: `lesson-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
  title: "",
  duration: "8 min",
  description: "",
  content: "",
  practicalExample: { title: "", scenario: "", steps: [""], tips: [""] },
  keyTakeaways: [""],
});

const emptyModule = (): ModuleForm => ({
  id: `module-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
  title: "",
  description: "",
  lessons: [emptyLesson()],
});

const emptyCourse = (): CourseForm => ({
  slug: "",
  title: "",
  description: "",
  long_description: "",
  category: "General",
  duration: "4 weeks",
  instructor: "",
  instructor_bio: "",
  ai_powered: false,
  published: false,
  modules: [emptyModule()],
});

interface AdminCourseRow {
  id: string;
  slug: string;
  title: string;
  published: boolean | null;
  category: string;
  created_at: string;
  modules: any;
}

const AdminCourses = () => {
  const { user } = useAuth();
  const { isAdmin, loading: roleLoading } = useAdminRole();
  const navigate = useNavigate();
  const [courses, setCourses] = useState<AdminCourseRow[]>([]);
  const [editing, setEditing] = useState<CourseForm | null>(null);
  const [editingDbId, setEditingDbId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  const [expandedLessons, setExpandedLessons] = useState<string[]>([]);

  useEffect(() => {
    if (!roleLoading && !isAdmin) {
      navigate("/");
      toast.error("Access denied");
    }
  }, [isAdmin, roleLoading]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const { data } = await supabase
      .from("admin_courses")
      .select("id, slug, title, published, category, created_at, modules")
      .order("created_at", { ascending: false });
    if (data) setCourses(data as AdminCourseRow[]);
  };

  const handleNew = () => {
    setEditing(emptyCourse());
    setEditingDbId(null);
    setExpandedModules([]);
    setExpandedLessons([]);
  };

  const handleEdit = async (dbId: string) => {
    const { data } = await supabase
      .from("admin_courses")
      .select("*")
      .eq("id", dbId)
      .single();
    if (data) {
      setEditing({
        slug: data.slug,
        title: data.title,
        description: data.description,
        long_description: data.long_description || "",
        category: data.category,
        duration: data.duration,
        instructor: data.instructor,
        instructor_bio: data.instructor_bio || "",
        ai_powered: data.ai_powered || false,
        published: data.published || false,
        modules: Array.isArray(data.modules) ? (data.modules as unknown as ModuleForm[]) : [],
      });
      setEditingDbId(dbId);
    }
  };

  const handleSave = async () => {
    if (!editing || !user) return;
    if (!editing.title.trim() || !editing.slug.trim()) {
      toast.error("Title and slug are required");
      return;
    }
    setSaving(true);

    const payload = {
      slug: editing.slug,
      title: editing.title,
      description: editing.description,
      long_description: editing.long_description,
      category: editing.category,
      duration: editing.duration,
      instructor: editing.instructor,
      instructor_bio: editing.instructor_bio,
      ai_powered: editing.ai_powered,
      published: editing.published,
      modules: editing.modules as any,
      created_by: user.id,
    };

    let error;
    if (editingDbId) {
      ({ error } = await supabase.from("admin_courses").update(payload).eq("id", editingDbId));
    } else {
      ({ error } = await supabase.from("admin_courses").insert(payload));
    }

    setSaving(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Course saved!");
      setEditing(null);
      setEditingDbId(null);
      fetchCourses();
    }
  };

  const handleDelete = async (dbId: string) => {
    if (!confirm("Delete this course?")) return;
    await supabase.from("admin_courses").delete().eq("id", dbId);
    toast.success("Course deleted");
    fetchCourses();
  };

  const toggleModule = (id: string) =>
    setExpandedModules((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const toggleLesson = (id: string) =>
    setExpandedLessons((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const updateModule = (mIdx: number, field: string, value: any) => {
    if (!editing) return;
    const modules = [...editing.modules];
    (modules[mIdx] as any)[field] = value;
    setEditing({ ...editing, modules });
  };

  const updateLesson = (mIdx: number, lIdx: number, field: string, value: any) => {
    if (!editing) return;
    const modules = [...editing.modules];
    (modules[mIdx].lessons[lIdx] as any)[field] = value;
    setEditing({ ...editing, modules });
  };

  const updatePracticalExample = (mIdx: number, lIdx: number, field: string, value: any) => {
    if (!editing) return;
    const modules = [...editing.modules];
    (modules[mIdx].lessons[lIdx].practicalExample as any)[field] = value;
    setEditing({ ...editing, modules });
  };

  if (roleLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!isAdmin) return null;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin: Course Management</h1>
          {!editing && (
            <Button onClick={handleNew} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Plus className="w-4 h-4 mr-2" /> New Course
            </Button>
          )}
        </div>

        {!editing ? (
          <div className="space-y-4">
            {courses.length === 0 && (
              <p className="text-muted-foreground text-center py-12">No admin courses yet. Click "New Course" to get started.</p>
            )}
            {courses.map((c) => (
              <Card key={c.id}>
                <CardContent className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{c.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={c.published ? "default" : "outline"}>
                        {c.published ? "Published" : "Draft"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{c.category}</span>
                      <span className="text-sm text-muted-foreground">
                        {Array.isArray(c.modules) ? c.modules.reduce((a: number, m: any) => a + (m.lessons?.length || 0), 0) : 0} lessons
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(c.id)}>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(c.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Title *</Label>
                    <Input value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Slug (URL-friendly ID) *</Label>
                    <Input
                      value={editing.slug}
                      onChange={(e) => setEditing({ ...editing, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") })}
                      placeholder="my-course-name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Short Description</Label>
                  <Textarea value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} rows={2} />
                </div>
                <div className="space-y-2">
                  <Label>Long Description</Label>
                  <Textarea value={editing.long_description} onChange={(e) => setEditing({ ...editing, long_description: e.target.value })} rows={4} />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Input value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Duration</Label>
                    <Input value={editing.duration} onChange={(e) => setEditing({ ...editing, duration: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label>Instructor</Label>
                    <Input value={editing.instructor} onChange={(e) => setEditing({ ...editing, instructor: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Instructor Bio</Label>
                  <Textarea value={editing.instructor_bio} onChange={(e) => setEditing({ ...editing, instructor_bio: e.target.value })} rows={2} />
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Switch checked={editing.ai_powered} onCheckedChange={(v) => setEditing({ ...editing, ai_powered: v })} />
                    <Label>AI-Powered</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch checked={editing.published} onCheckedChange={(v) => setEditing({ ...editing, published: v })} />
                    <Label>Published</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modules & Lessons */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Modules & Lessons
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setEditing({ ...editing, modules: [...editing.modules, emptyModule()] })}
                >
                  <Plus className="w-4 h-4 mr-1" /> Add Module
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {editing.modules.map((mod, mIdx) => (
                  <Collapsible key={mod.id} open={expandedModules.includes(mod.id)} onOpenChange={() => toggleModule(mod.id)}>
                    <div className="border rounded-lg">
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-4 hover:bg-muted/50">
                          <div className="flex items-center gap-2">
                            <GripVertical className="w-4 h-4 text-muted-foreground" />
                            <span className="font-semibold">Module {mIdx + 1}: {mod.title || "(untitled)"}</span>
                            <span className="text-sm text-muted-foreground">({mod.lessons.length} lessons)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                const modules = editing.modules.filter((_, i) => i !== mIdx);
                                setEditing({ ...editing, modules });
                              }}
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                            {expandedModules.includes(mod.id) ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                          </div>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-4 pt-0 space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Module Title</Label>
                              <Input value={mod.title} onChange={(e) => updateModule(mIdx, "title", e.target.value)} />
                            </div>
                            <div className="space-y-2">
                              <Label>Module Description</Label>
                              <Input value={mod.description} onChange={(e) => updateModule(mIdx, "description", e.target.value)} />
                            </div>
                          </div>

                          <Separator />

                          {mod.lessons.map((les, lIdx) => (
                            <Collapsible key={les.id} open={expandedLessons.includes(les.id)} onOpenChange={() => toggleLesson(les.id)}>
                              <div className="border rounded ml-4">
                                <CollapsibleTrigger className="w-full">
                                  <div className="flex items-center justify-between p-3 hover:bg-muted/30">
                                    <span className="text-sm font-medium">
                                      Lesson {lIdx + 1}: {les.title || "(untitled)"}
                                    </span>
                                    <div className="flex items-center gap-2">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const modules = [...editing.modules];
                                          modules[mIdx].lessons = modules[mIdx].lessons.filter((_, i) => i !== lIdx);
                                          setEditing({ ...editing, modules });
                                        }}
                                      >
                                        <Trash2 className="w-3 h-3 text-destructive" />
                                      </Button>
                                      {expandedLessons.includes(les.id) ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                                    </div>
                                  </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <div className="p-3 pt-0 space-y-3">
                                    <div className="grid md:grid-cols-3 gap-3">
                                      <div className="space-y-1">
                                        <Label className="text-xs">Title</Label>
                                        <Input value={les.title} onChange={(e) => updateLesson(mIdx, lIdx, "title", e.target.value)} />
                                      </div>
                                      <div className="space-y-1">
                                        <Label className="text-xs">Duration</Label>
                                        <Input value={les.duration} onChange={(e) => updateLesson(mIdx, lIdx, "duration", e.target.value)} />
                                      </div>
                                      <div className="space-y-1">
                                        <Label className="text-xs">Short Description</Label>
                                        <Input value={les.description} onChange={(e) => updateLesson(mIdx, lIdx, "description", e.target.value)} />
                                      </div>
                                    </div>
                                    <div className="space-y-1">
                                      <Label className="text-xs">Lesson Content (Markdown)</Label>
                                      <Textarea
                                        value={les.content}
                                        onChange={(e) => updateLesson(mIdx, lIdx, "content", e.target.value)}
                                        rows={8}
                                        placeholder="Use markdown: # Heading, ## Subheading, - bullet points, **bold**"
                                      />
                                    </div>
                                    <Separator />
                                    <div className="space-y-2">
                                      <Label className="text-xs font-semibold">Practical Example</Label>
                                      <Input
                                        placeholder="Example Title"
                                        value={les.practicalExample.title}
                                        onChange={(e) => updatePracticalExample(mIdx, lIdx, "title", e.target.value)}
                                      />
                                      <Textarea
                                        placeholder="Scenario description"
                                        value={les.practicalExample.scenario}
                                        onChange={(e) => updatePracticalExample(mIdx, lIdx, "scenario", e.target.value)}
                                        rows={2}
                                      />
                                      <Label className="text-xs">Steps (one per line)</Label>
                                      <Textarea
                                        value={les.practicalExample.steps.join("\n")}
                                        onChange={(e) => updatePracticalExample(mIdx, lIdx, "steps", e.target.value.split("\n"))}
                                        rows={4}
                                      />
                                      <Label className="text-xs">Tips (one per line)</Label>
                                      <Textarea
                                        value={les.practicalExample.tips.join("\n")}
                                        onChange={(e) => updatePracticalExample(mIdx, lIdx, "tips", e.target.value.split("\n"))}
                                        rows={3}
                                      />
                                    </div>
                                    <div className="space-y-1">
                                      <Label className="text-xs">Key Takeaways (one per line)</Label>
                                      <Textarea
                                        value={les.keyTakeaways.join("\n")}
                                        onChange={(e) => updateLesson(mIdx, lIdx, "keyTakeaways", e.target.value.split("\n"))}
                                        rows={3}
                                      />
                                    </div>
                                  </div>
                                </CollapsibleContent>
                              </div>
                            </Collapsible>
                          ))}

                          <Button
                            variant="outline"
                            size="sm"
                            className="ml-4"
                            onClick={() => {
                              const modules = [...editing.modules];
                              modules[mIdx].lessons.push(emptyLesson());
                              setEditing({ ...editing, modules });
                            }}
                          >
                            <Plus className="w-3 h-3 mr-1" /> Add Lesson
                          </Button>
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                ))}
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button onClick={handleSave} disabled={saving} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Save className="w-4 h-4 mr-2" />
                {saving ? "Saving..." : "Save Course"}
              </Button>
              <Button variant="outline" onClick={() => { setEditing(null); setEditingDbId(null); }}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdminCourses;
