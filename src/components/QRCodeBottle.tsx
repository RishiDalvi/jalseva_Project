
const QRCodeBottle = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Water Bottle Mockup */}
      <div className="relative h-96 bg-gradient-to-b from-jalseva-blue/20 to-jalseva-blue/60 rounded-3xl overflow-hidden shadow-xl">
        {/* Bottle Shape */}
        <div className="absolute inset-x-8 top-10 bottom-10 bg-white/90 rounded-[50px]">
          {/* Bottle Cap */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-6 bg-jalseva-blue rounded-t-lg"></div>
          
          {/* Brand Label */}
          <div className="absolute inset-x-4 top-1/4 bottom-1/4 bg-jalseva-blue rounded-xl flex flex-col items-center justify-center p-4">
            <div className="text-white font-montserrat font-bold text-2xl mb-2">JalSeva</div>
            <div className="text-white/90 font-inter text-xs mb-4">CSR Initiative</div>
            
            {/* QR Code */}
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <div className="w-16 h-16 grid grid-cols-4 grid-rows-4 gap-0.5">
                {Array(16).fill(0).map((_, i) => (
                  <div 
                    key={i} 
                    className={`${Math.random() > 0.3 ? 'bg-black' : 'bg-white'} ${
                      (i === 0 || i === 3 || i === 12 || i === 15) ? 'bg-black' : ''
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="text-white/90 font-inter text-xs mt-2">Scan for CSR Report</div>
          </div>
          
          {/* Water Level */}
          <div className="absolute inset-x-1 bottom-1 top-1/3 bg-gradient-to-b from-jalseva-blue/10 to-jalseva-blue/30 rounded-[48px]">
            {/* Water Wave Effect */}
            <div className="absolute inset-x-0 top-0 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Info Text */}
      <div className="mt-6 text-center">
        <h3 className="font-montserrat font-semibold text-lg">Interactive QR Code</h3>
        <p className="font-inter text-gray-600 mt-2">
          Each bottle includes a scannable QR code linking to your CSR impact report.
        </p>
      </div>
    </div>
  );
};

export default QRCodeBottle;
