
import { useState } from 'react';
import { toast } from './ui/sonner';

const QRCodeBottle = () => {
  const [isHovered, setIsHovered] = useState(false);

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
      </div>

      {/* Info Text */}
      <div className="mt-6 text-center">
        <h3 className="font-montserrat font-semibold text-lg">Interactive Brand Placement</h3>
        <p className="font-inter text-gray-600 mt-2">
          Each bottle features your brand and a unique interactive design.
        </p>
      </div>
    </div>
  );
};

export default QRCodeBottle;
