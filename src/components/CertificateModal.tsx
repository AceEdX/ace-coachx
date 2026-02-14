import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Award, Download } from "lucide-react";

interface CertificateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseTitle: string;
}

const CertificateModal = ({ open, onOpenChange, courseTitle }: CertificateModalProps) => {
  const [name, setName] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleGenerate = () => {
    if (name.trim()) {
      setShowCertificate(true);
    }
  };

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 850;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background - Deep Navy
    ctx.fillStyle = "#002366";
    ctx.fillRect(0, 0, 1200, 850);

    // Inner white area
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(40, 40, 1120, 770);

    // Gold border
    ctx.strokeStyle = "#D4AF37";
    ctx.lineWidth = 4;
    ctx.strokeRect(60, 60, 1080, 730);
    ctx.strokeRect(55, 55, 1090, 740);

    // Header - ACE COACH X × ACE EDX
    ctx.fillStyle = "#002366";
    ctx.font = "bold 18px Georgia";
    ctx.textAlign = "center";
    ctx.fillText("ACE COACH X  ×  ACE EDX", 600, 120);

    // Title
    ctx.fillStyle = "#D4AF37";
    ctx.font = "bold 42px Georgia";
    ctx.fillText("Certificate of Excellence", 600, 200);

    // Decorative line
    ctx.strokeStyle = "#D4AF37";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(300, 225);
    ctx.lineTo(900, 225);
    ctx.stroke();

    // Presented to
    ctx.fillStyle = "#666666";
    ctx.font = "18px Georgia";
    ctx.fillText("This certificate is proudly presented to", 600, 290);

    // Name
    ctx.fillStyle = "#002366";
    ctx.font = "bold 48px Georgia";
    ctx.fillText(name, 600, 360);

    // Name underline
    ctx.strokeStyle = "#D4AF37";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(250, 380);
    ctx.lineTo(950, 380);
    ctx.stroke();

    // Completion text
    ctx.fillStyle = "#333333";
    ctx.font = "18px Georgia";
    ctx.fillText("for the successful completion of", 600, 430);

    // Course name
    ctx.fillStyle = "#002366";
    ctx.font = "bold 28px Georgia";
    ctx.fillText(courseTitle, 600, 480);

    // "from AceEdX" line
    ctx.fillStyle = "#D4AF37";
    ctx.font = "bold 20px Georgia";
    ctx.fillText("from AceEdX", 600, 515);

    // Description
    ctx.fillStyle = "#666666";
    ctx.font = "16px Georgia";
    ctx.fillText("demonstrating exceptional dedication to professional development", 600, 560);
    ctx.fillText("and commitment to educational excellence.", 600, 585);

    // Date
    const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    ctx.fillStyle = "#333333";
    ctx.font = "16px Georgia";
    ctx.fillText(date, 600, 640);

    // Footer
    ctx.fillStyle = "#D4AF37";
    ctx.font = "bold 14px Georgia";
    ctx.fillText("★  Professional Development  ★  Innovation  ★  Excellence  ★", 600, 720);

    // AceEdX branding bar at bottom
    ctx.fillStyle = "#002366";
    ctx.fillRect(55, 750, 1090, 40);
    ctx.fillStyle = "#D4AF37";
    ctx.font = "bold 14px Georgia";
    ctx.fillText("Ace EdX — An EdTech Company", 600, 775);

    // Load and draw logo
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      ctx.drawImage(img, 530, 640, 60, 60);
      downloadCanvas(canvas);
    };
    img.onerror = () => {
      downloadCanvas(canvas);
    };
    img.src = "/images/aceedx-logo.png";
  };

  const downloadCanvas = (canvas: HTMLCanvasElement) => {
    const link = document.createElement("a");
    link.download = `Certificate-${name.replace(/\s+/g, "-")}-${courseTitle.replace(/\s+/g, "-")}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setShowCertificate(false);
      setName("");
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Award className="w-6 h-6 text-secondary" />
            Certificate of Excellence
          </DialogTitle>
        </DialogHeader>

        {!showCertificate ? (
          <div className="space-y-6 py-4">
            <p className="text-muted-foreground">
              Congratulations on completing <strong>{courseTitle}</strong>! Enter your name as you'd like it to appear on your certificate.
            </p>
            <div className="space-y-2">
              <Label htmlFor="cert-name">Full Name</Label>
              <Input
                id="cert-name"
                placeholder="Enter your name for the certificate"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg"
              />
            </div>
            <Button
              onClick={handleGenerate}
              disabled={!name.trim()}
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              size="lg"
            >
              Generate My Certificate
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Certificate Preview */}
            <div
              ref={certificateRef}
              className="border-4 border-secondary rounded-lg p-8 bg-card text-center space-y-4"
            >
              <div className="border-2 border-secondary/50 rounded p-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <img src="/images/aceedx-logo.png" alt="AceEdX Logo" className="w-10 h-10" />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                  Ace Coach X × Ace EdX
                </p>
                <h2 className="text-3xl font-bold text-secondary mt-4 font-serif">
                  Certificate of Excellence
                </h2>
                <div className="w-48 h-0.5 bg-secondary mx-auto my-4" />
                <p className="text-sm text-muted-foreground">
                  This certificate is proudly presented to
                </p>
                <h3 className="text-2xl font-bold text-primary mt-2 font-serif">
                  {name}
                </h3>
                <div className="w-64 h-px bg-secondary/40 mx-auto my-3" />
                <p className="text-sm text-muted-foreground">
                  for the successful completion of
                </p>
                <p className="text-lg font-semibold text-primary mt-1">
                  {courseTitle}
                </p>
                <p className="text-sm font-semibold text-secondary mt-1">
                  from AceEdX
                </p>
                <p className="text-xs text-muted-foreground mt-4">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-xs text-secondary mt-4 tracking-wider">
                  ★ Professional Development ★ Innovation ★ Excellence ★
                </p>
                <div className="mt-3 py-2 bg-primary rounded">
                  <p className="text-xs font-semibold text-secondary">
                    Ace EdX — An EdTech Company
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleDownload}
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              size="lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Certificate
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CertificateModal;
