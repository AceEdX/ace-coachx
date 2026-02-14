import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { StickyNote, Trash2, BookOpen, Save } from "lucide-react";
import { toast } from "sonner";

interface NoteItem {
  id: string;
  courseId: string;
  courseTitle: string;
  lessonId: string;
  lessonTitle: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const MyNotes = () => {
  const { user } = useAuth();
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    if (user) {
      const key = `notes_${user.id}`;
      const saved = localStorage.getItem(key);
      if (saved) setNotes(JSON.parse(saved));
    }
  }, [user]);

  const saveNotes = (updated: NoteItem[]) => {
    setNotes(updated);
    if (user) localStorage.setItem(`notes_${user.id}`, JSON.stringify(updated));
  };

  const deleteNote = (id: string) => {
    saveNotes(notes.filter((n) => n.id !== id));
    toast.success("Note deleted");
  };

  const startEdit = (note: NoteItem) => {
    setEditingId(note.id);
    setEditContent(note.content);
  };

  const saveEdit = () => {
    if (!editingId) return;
    const updated = notes.map((n) =>
      n.id === editingId ? { ...n, content: editContent, updatedAt: new Date().toISOString() } : n
    );
    saveNotes(updated);
    setEditingId(null);
    toast.success("Note saved");
  };

  if (!user) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-12 text-center">
          <StickyNote className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Sign in to view your notes</h1>
          <Button asChild><Link to="/signin">Sign In</Link></Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            <StickyNote className="w-8 h-8 text-secondary" />
            My Notes
          </h1>
          <p className="text-muted-foreground">Notes you've taken during lessons</p>
        </div>

        {notes.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No notes yet</h2>
              <p className="text-muted-foreground mb-4">
                Take notes during lessons to review them here later.
              </p>
              <Button asChild><Link to="/courses">Start Learning</Link></Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {notes.map((note) => (
              <Card key={note.id}>
                <CardContent className="py-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Link
                        to={`/course/${note.courseId}/lesson/${note.lessonId}`}
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {note.lessonTitle}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        {note.courseTitle} • {new Date(note.updatedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {editingId === note.id ? (
                        <Button variant="ghost" size="icon" onClick={saveEdit}>
                          <Save className="w-4 h-4 text-success" />
                        </Button>
                      ) : (
                        <Button variant="ghost" size="sm" onClick={() => startEdit(note)}>
                          Edit
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" onClick={() => deleteNote(note.id)}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                  {editingId === note.id ? (
                    <Textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="min-h-[100px]"
                    />
                  ) : (
                    <p className="text-muted-foreground whitespace-pre-wrap text-sm">{note.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MyNotes;
