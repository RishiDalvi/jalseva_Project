import { Shield, Eye, Lock, Users } from 'lucide-react';
import Modal from './ui/modal';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
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
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Privacy Policy</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            We're committed to protecting your privacy while helping you make a positive environmental impact.
          </p>
        </div>

        <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary">
          <p className="text-sm text-muted-foreground">
            Your data powers our mission to connect brands with meaningful water conservation campaigns.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="flex gap-4">
            <Eye className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">What We Collect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contact information, campaign preferences, and website analytics to connect you with the right opportunities and improve our service.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">How We Use It</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To connect you with campaigns, send proposals, measure our environmental impact, and enhance your experience on our platform.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Lock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Your Data Security</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Industry-standard encryption, secure servers, and strict access controls. We never share your data without consent.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Your Rights
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Access, update, or delete your data anytime</p>
            <p>• Opt out of communications with one click</p>
            <p>• Request data portability or processing restrictions</p>
            <p>• Get responses to privacy requests within 30 days</p>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-border">
          <p className="text-sm font-medium text-foreground mb-1">Questions about your privacy?</p>
          <p className="text-sm text-muted-foreground">
            📧 connect.team.jalseva@gmail.com
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Last updated: January 2025 • Effective immediately
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default PrivacyPolicyModal;