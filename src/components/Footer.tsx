import { useState } from 'react';
import { Linkedin, Instagram, Download } from 'lucide-react';
import { Button } from './ui/button';
import DownloadProposalModal from './DownloadProposalModal';

const Footer = () => {
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-montserrat font-bold">
                <span className="text-jalseva-blue">Jal</span>Seva
              </h2>
            </div>
            <p className="text-gray-400 font-inter mb-6 max-w-md">
              Providing clean, free water to people in need while offering brands a unique opportunity 
              to fulfill social responsibility goals through smart advertising.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/rushikesh-dalavi/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-jalseva-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/kaliyug.technologies/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-jalseva-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-inter">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-white transition-colors">Impact</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 font-inter">
              <li className="flex items-start">
                <span className="text-jalseva-blue mr-2">📍</span>
                <span className="text-gray-400">Pune, India</span>
              </li>
              <li className="flex items-start">
                <span className="text-jalseva-blue mr-2">📧</span>
                <a 
                  href="mailto:connect.team.jalseva@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  connect.team.jalseva@gmail.com

                </a>
              </li>
              <li className="flex items-start">
                <span className="text-jalseva-blue mr-2">📱</span>
                <a href="tel:+919284155938" className="text-gray-400 hover:text-white transition-colors">
                  +91 9284155938
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Button
                onClick={() => setIsProposalModalOpen(true)}
                className="py-2 px-4 bg-gray-800 text-white rounded-lg font-medium font-inter text-sm hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <Download size={16} />
                Download Proposal
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-inter mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} JalSeva. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 text-sm font-inter hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm font-inter hover:text-white transition-colors">Terms of Service</a>
              <span className="text-gray-500 text-sm font-inter">Powered by Kaliyug Technologies</span>
            </div>
          </div>
        </div>
      </div>
      
      <DownloadProposalModal 
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;
