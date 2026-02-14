import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark, Trash2, BookOpen } from "lucide-react";
import { toast } from "sonner";

interface BookmarkItem {
  courseId: string;
  courseTitle: string;
  lessonId?: string;
  lessonTitle?: string;
  savedAt: string;
}

const Bookmarks = () => {
  const { user } = useAuth();
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

  useEffect(() => {
    if (user) {
      const key = `bookmarks_${user.id}`;
      const saved = localStorage.getItem(key);
      if (saved) setBookmarks(JSON.parse(saved));
    }
  }, [user]);

  const removeBookmark = (index: number) => {
    const updated = bookmarks.filter((_, i) => i !== index);
    setBookmarks(updated);
    if (user) {
      localStorage.setItem(`bookmarks_${user.id}`, JSON.stringify(updated));
    }
    toast.success("Bookmark removed");
  };

  if (!user) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-12 text-center">
          <Bookmark className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Sign in to view bookmarks</h1>
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
            <Bookmark className="w-8 h-8 text-secondary" />
            My Bookmarks
          </h1>
          <p className="text-muted-foreground">Lessons and courses you've saved for later</p>
        </div>

        {bookmarks.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No bookmarks yet</h2>
              <p className="text-muted-foreground mb-4">
                Bookmark lessons while learning to find them quickly later.
              </p>
              <Button asChild><Link to="/courses">Browse Courses</Link></Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {bookmarks.map((bm, index) => (
              <Card key={index}>
                <CardContent className="py-4 flex items-center justify-between">
                  <div>
                    <Link
                      to={bm.lessonId ? `/course/${bm.courseId}/lesson/${bm.lessonId}` : `/course/${bm.courseId}`}
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {bm.lessonTitle || bm.courseTitle}
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {bm.lessonTitle ? bm.courseTitle : "Course"} • Saved {new Date(bm.savedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeBookmark(index)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
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

export default Bookmarks;
