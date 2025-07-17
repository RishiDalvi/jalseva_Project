import { useState, useEffect } from 'react';
import SponsorFormModal from './SponsorFormModal';
import DownloadProposalModal from './DownloadProposalModal';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden water-wave">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white"></div>
          <div className="absolute inset-0 bg-jalseva-blue/30 mix-blend-overlay"></div>
        </div>
      </div>

      {/* Animated wave overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10 opacity-50">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-full w-full">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white opacity-80 animate-pulse-light"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className="fill-white opacity-60 animate-pulse-light"
            style={{ animationDelay: '0.5s' }}
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-4 text-white">
            <span className="text-jalseva-blue">Jal</span>Seva
          </h1>
          <p className="text-xl md:text-2xl font-montserrat text-gray-800 mb-8 
            bg-gradient-to-r from-jalseva-blue via-jalseva-blue-dark to-jalseva-blue 
            bg-clip-text text-transparent 
            font-extrabold 
            drop-shadow-lg 
            animate-pulse"
          >
            Where Advertising Meets Humanity
          </p>
          
          {/* Stats Counter */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-white/90 px-6 py-3 rounded-xl shadow-lg">
              <p className="text-3xl font-bold text-jalseva-blue font-montserrat">100K+</p>
              <p className="text-sm text-gray-700 font-inter">Bottles Distributed</p>
            </div>
            <div className="bg-white/90 px-6 py-3 rounded-xl shadow-lg">
              <p className="text-3xl font-bold text-jalseva-blue font-montserrat">50+</p>
              <p className="text-sm text-gray-700 font-inter">Brands Served</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="py-3 px-8 bg-jalseva-blue text-white rounded-full font-medium font-inter text-lg shadow-lg transform hover:scale-105 transition-transform"
              onClick={() => setIsSponsorModalOpen(true)}
            >
              Become a Sponsor
            </button>
            <button 
              className="py-3 px-8 bg-white text-jalseva-blue rounded-full font-medium font-inter text-lg shadow-lg transform hover:scale-105 transition-transform"
              onClick={() => setIsProposalModalOpen(true)}
            >
              Get a Proposal
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path 
            d="M12 5V19M12 19L5 12M12 19L19 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Modals */}
      <SponsorFormModal 
        isOpen={isSponsorModalOpen} 
        onClose={() => setIsSponsorModalOpen(false)} 
      />
      
      <DownloadProposalModal 
        isOpen={isProposalModalOpen} 
        onClose={() => setIsProposalModalOpen(false)} 
      />
    </div>
  );
};

export default HeroSection;
