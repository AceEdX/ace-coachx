import { MessageCircle, HelpCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const FloatingHelp = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showMenu && (
        <div className="bg-card border border-border rounded-lg shadow-lg p-4 w-64 space-y-3 mb-2">
          <h4 className="font-semibold text-sm flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-secondary" />
            Need Help?
          </h4>
          <Button
            variant="outline"
            className="w-full justify-start text-sm"
            onClick={() => {
              toast.info("Community discussion coming soon!");
              setShowMenu(false);
            }}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Community Discussion
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start text-sm"
            onClick={() => {
              toast.info("Support ticket submitted!");
              setShowMenu(false);
            }}
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </div>
      )}
      <Button
        onClick={() => setShowMenu(!showMenu)}
        className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg"
        size="icon"
      >
        {showMenu ? <X className="w-6 h-6" /> : <HelpCircle className="w-6 h-6" />}
      </Button>
    </div>
  );
};

export default FloatingHelp;
