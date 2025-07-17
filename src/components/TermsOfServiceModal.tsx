import { FileText, CheckCircle, AlertTriangle, Scale } from 'lucide-react';
import Modal from './ui/modal';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal = ({ isOpen, onClose }: TermsOfServiceModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title=""
      className="max-w-2xl max-h-[80vh] overflow-y-auto"
    >
      <div className="space-y-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Terms of Service</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Welcome to JalSeva! By using our platform, you join our mission for environmental sustainability.
          </p>
        </div>

        <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary">
          <p className="text-sm text-muted-foreground">
            These terms ensure fair, responsible use of our platform while protecting all parties involved.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="flex gap-4">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Your Commitments</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Provide accurate information, use our platform responsibly, respect environmental guidelines, and honor agreed payment terms.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Scale className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Our Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We connect you with ethical advertising opportunities through water distribution campaigns and provide comprehensive impact reporting.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <AlertTriangle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Important Limitations</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Services provided "as-is" with reasonable effort. We're not liable for indirect damages, specific campaign outcomes, or external factors.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Key Points
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Governed by Indian law, Maharashtra jurisdiction</p>
            <p>• Termination possible for terms violations</p>
            <p>• Updates posted with reasonable notice</p>
            <p>• Intellectual property rights protected</p>
            <p>• Dispute resolution through mediation preferred</p>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-border">
          <p className="text-sm font-medium text-foreground mb-1">Questions about these terms?</p>
          <p className="text-sm text-muted-foreground">
            📧 connect.team.jalseva@gmail.com • 📱 +91 9284155938
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Last modified: January 2025 • Business hours: Mon-Fri 9AM-6PM IST
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default TermsOfServiceModal;