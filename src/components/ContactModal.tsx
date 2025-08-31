import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

export const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0f0f14] text-white rounded-3xl p-8 max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold mb-4 glow-text">
            Start Your AI Journey
          </DialogTitle>
        </DialogHeader>
        <ContactForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};
