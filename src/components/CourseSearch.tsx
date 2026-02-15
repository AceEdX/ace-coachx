import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CourseSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const CourseSearch = ({ searchQuery, onSearchChange }: CourseSearchProps) => {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search courses by title, category, or instructor..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};

export default CourseSearch;
