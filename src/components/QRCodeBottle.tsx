
import { useState } from 'react';
import { toast } from './ui/sonner';
import { ScanQrCode } from 'lucide-react';

const QRCodeBottle = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleQRClick = () => {
    toast.success("Scanning QR code will direct to the CSR impact report");
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div 
        className="relative h-[600px] transition-transform duration-300 ease-in-out transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <img
          src="/lovable-uploads/3e820fd0-619c-4eae-9ee4-f0313c29b365.png"
          alt="JalSeva Water Bottle"
          className="w-full h-full object-contain"
        />
        
        {/* Interactive QR Code Overlay */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300">
            <div 
              className="bg-white p-4 rounded-lg shadow-lg cursor-pointer transform hover:scale-110 transition-transform"
              onClick={handleQRClick}
            >
              <ScanQrCode className="w-12 h-12 text-jalseva-blue" />
              <p className="text-sm font-medium text-center mt-2">Scan QR Code</p>
            </div>
          </div>
        )}
      </div>

      {/* Info Text */}
      <div className="mt-6 text-center">
        <h3 className="font-montserrat font-semibold text-lg">Interactive Brand Placement</h3>
        <p className="font-inter text-gray-600 mt-2">
          Each bottle features your brand and a QR code linking to your CSR impact report.
        </p>
      </div>
    </div>
  );
};

export default QRCodeBottle;
