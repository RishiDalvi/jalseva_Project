import { Download } from 'lucide-react';
import Modal from './ui/modal';
import { Button } from './ui/button';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  const handleDownloadPDF = () => {
    // TODO: Implement PDF download functionality
    console.log('Download Privacy Policy PDF');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Privacy Policy"
      className="max-w-4xl max-h-[90vh] overflow-y-auto"
    >
      <div className="space-y-6 text-gray-700 font-inter">
        <div className="flex justify-end mb-4">
          <Button
            onClick={handleDownloadPDF}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Download size={16} />
            Download PDF
          </Button>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">1. What Data We Collect</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and company details when you submit campaign requests or contact forms.</li>
                <li><strong>Campaign Details:</strong> Information about your advertising needs, target audience, budget, and campaign preferences.</li>
                <li><strong>Website Analytics:</strong> Anonymous usage data, page views, and browsing patterns to improve our services.</li>
                <li><strong>Communication Records:</strong> Records of your interactions with our team for service improvement and support purposes.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">2. How We Use Your Information</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>Your information is used for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Service Delivery:</strong> To process your campaign requests and provide water distribution services with brand advertising.</li>
                <li><strong>Communication:</strong> To respond to inquiries, send proposals, and maintain ongoing client relationships.</li>
                <li><strong>Service Improvement:</strong> To analyze usage patterns and enhance our platform and services.</li>
                <li><strong>Legal Compliance:</strong> To meet regulatory requirements and protect our legitimate business interests.</li>
                <li><strong>Marketing:</strong> With your consent, to send relevant updates about our services and social impact initiatives.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">3. Cookies and Third-Party Tools</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>We use cookies and third-party services to enhance your experience:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for website functionality and security.</li>
                <li><strong>Analytics Cookies:</strong> Google Analytics to understand user behavior and improve our services.</li>
                <li><strong>Communication Tools:</strong> WhatsApp Business integration for customer support.</li>
                <li><strong>Email Services:</strong> Resend API for transactional emails and communication.</li>
              </ul>
              <p className="mt-2">You can control cookie preferences through your browser settings.</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">4. Data Security and Storage</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>We implement robust security measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Encryption:</strong> All data transmission is secured using SSL/TLS encryption.</li>
                <li><strong>Secure Storage:</strong> Data is stored on secure servers with regular backups and monitoring.</li>
                <li><strong>Access Control:</strong> Strict access controls ensure only authorized personnel can access your information.</li>
                <li><strong>Data Retention:</strong> Personal data is retained only as long as necessary for service delivery and legal compliance.</li>
                <li><strong>Regular Audits:</strong> We conduct regular security assessments and updates to maintain data protection standards.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">5. Your Rights and Control</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal and contractual obligations.</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider in a structured format.</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time.</li>
                <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances.</li>
              </ul>
              <p className="mt-2">To exercise these rights, please contact us using the information provided below.</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">6. Contact Details</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>For any privacy-related questions or requests, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p><strong>Email:</strong> connect.team.jalseva@gmail.com</p>
                <p><strong>Phone:</strong> +91 9284155938</p>
                <p><strong>Address:</strong> Pune, India</p>
                <p><strong>Response Time:</strong> We aim to respond to all privacy requests within 30 days.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">7. Updates to This Policy</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications for significant changes</li>
                <li>Updating the "Last Modified" date below</li>
              </ul>
              <p className="mt-3 text-xs text-gray-600">
                <strong>Last Modified:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default PrivacyPolicyModal;