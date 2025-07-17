import { Download } from 'lucide-react';
import Modal from './ui/modal';
import { Button } from './ui/button';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal = ({ isOpen, onClose }: TermsOfServiceModalProps) => {
  const handleDownloadPDF = () => {
    // TODO: Implement PDF download functionality
    console.log('Download Terms of Service PDF');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Terms of Service"
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
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">1. Acceptance of Terms</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>By accessing and using JalSeva's services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") govern your use of our platform and services.</p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>These Terms apply to all users, including brands, sponsors, and beneficiaries</li>
                <li>By submitting campaign requests or using our services, you acknowledge that you have read and understood these Terms</li>
                <li>If you do not agree to these Terms, please do not use our services</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">2. User Obligations</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>Users of JalSeva services must comply with the following obligations:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Lawful Use:</strong> Use our services only for lawful purposes and in accordance with applicable laws and regulations.</li>
                <li><strong>Accurate Information:</strong> Provide accurate, current, and complete information when submitting campaign requests or contact forms.</li>
                <li><strong>Brand Guidelines:</strong> Ensure all advertising content complies with legal standards and does not contain harmful, offensive, or misleading information.</li>
                <li><strong>Payment Terms:</strong> Honor all agreed-upon payment terms and conditions for campaign services.</li>
                <li><strong>Cooperation:</strong> Work collaboratively with our team to ensure successful campaign execution and social impact delivery.</li>
                <li><strong>Compliance:</strong> Adhere to all relevant advertising standards, environmental regulations, and social responsibility guidelines.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">3. Intellectual Property</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>Intellectual property rights are protected as follows:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>JalSeva Content:</strong> All content, trademarks, logos, and materials on our platform are owned by JalSeva or licensed to us.</li>
                <li><strong>User Content:</strong> You retain ownership of your brand assets and advertising content provided to us.</li>
                <li><strong>Usage Rights:</strong> By using our services, you grant us limited rights to use your brand assets for agreed-upon campaign purposes.</li>
                <li><strong>Third-Party Content:</strong> You are responsible for ensuring you have proper rights to any third-party content used in campaigns.</li>
                <li><strong>Protection:</strong> You agree not to infringe upon JalSeva's or any third party's intellectual property rights.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">4. Limitation of Liability</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>JalSeva's liability is limited as follows:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Service Availability:</strong> While we strive for continuous service, we do not guarantee uninterrupted access to our platform.</li>
                <li><strong>Campaign Results:</strong> We cannot guarantee specific marketing outcomes or return on investment for advertising campaigns.</li>
                <li><strong>Third-Party Actions:</strong> We are not liable for actions or omissions of third-party service providers or external factors beyond our control.</li>
                <li><strong>Indirect Damages:</strong> We shall not be liable for any indirect, incidental, special, or consequential damages.</li>
                <li><strong>Maximum Liability:</strong> Our total liability shall not exceed the amount paid by you for the specific service in question.</li>
                <li><strong>Force Majeure:</strong> We are not liable for delays or failures due to circumstances beyond our reasonable control.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">5. Governing Law</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>These Terms are governed by Indian law:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Jurisdiction:</strong> These Terms shall be governed by and construed in accordance with the laws of India.</li>
                <li><strong>Disputes:</strong> Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Maharashtra, India.</li>
                <li><strong>Compliance:</strong> All services are provided in compliance with Indian environmental, advertising, and business regulations.</li>
                <li><strong>Language:</strong> The English version of these Terms shall prevail in case of any translation discrepancies.</li>
                <li><strong>Mediation:</strong> We encourage resolution of disputes through mediation before formal legal proceedings.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">6. Termination Conditions</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>These Terms may be terminated under the following conditions:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Breach of Terms:</strong> We may terminate or suspend services immediately upon breach of these Terms.</li>
                <li><strong>Service Discontinuation:</strong> We reserve the right to discontinue services with reasonable notice to users.</li>
                <li><strong>User Termination:</strong> Users may terminate their relationship with us by ceasing to use our services and canceling ongoing campaigns.</li>
                <li><strong>Outstanding Obligations:</strong> Termination does not relieve parties of obligations incurred prior to termination.</li>
                <li><strong>Data Handling:</strong> Upon termination, we will handle your data according to our Privacy Policy and applicable retention requirements.</li>
                <li><strong>Survival:</strong> Provisions regarding intellectual property, liability, and governing law shall survive termination.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">7. Service Description</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>JalSeva provides the following services:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Water Distribution:</strong> Free distribution of clean water to communities in need through strategically placed dispensing units.</li>
                <li><strong>Brand Advertising:</strong> Ethical advertising opportunities for brands on water dispensing units and related materials.</li>
                <li><strong>Impact Reporting:</strong> Regular reporting on social impact metrics and campaign performance.</li>
                <li><strong>Campaign Management:</strong> End-to-end management of brand campaigns including planning, execution, and monitoring.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">8. Contact Information</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>For questions about these Terms of Service, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p><strong>Email:</strong> connect.team.jalseva@gmail.com</p>
                <p><strong>Phone:</strong> +91 9284155938</p>
                <p><strong>Address:</strong> Pune, India</p>
                <p><strong>Business Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM IST</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 font-montserrat">9. Updates to Terms</h3>
            <div className="space-y-2 text-sm leading-relaxed">
              <p>We may update these Terms from time to time. When we do, we will:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Post the updated Terms on our website</li>
                <li>Notify existing clients of material changes via email</li>
                <li>Update the "Last Modified" date below</li>
                <li>Provide reasonable notice before significant changes take effect</li>
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

export default TermsOfServiceModal;