
import QRCodeBottle from "./QRCodeBottle";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-2">About JalSeva</h2>
          <div className="w-20 h-1 bg-jalseva-blue mx-auto mb-4"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left side - Bottle with QR Code */}
          <div className="md:w-1/2 relative animate-float">
            <QRCodeBottle />
          </div>

          {/* Right side - Text */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="bg-gradient-to-br from-white to-jalseva-gray p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-montserrat font-semibold mb-4">Water With Purpose</h3>
              <p className="text-lg font-inter text-gray-700 mb-6 leading-relaxed">
                JalSeva blends brand visibility with humanity. Through CSR sponsorships, we distribute clean drinking water to the people who need it most — carrying your brand message along with it.
              </p>
              <p className="text-lg font-inter text-gray-700 leading-relaxed">
                Our innovative model creates a win-win situation where companies fulfill their CSR obligations while making a tangible difference in communities that lack access to clean water.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-jalseva-blue font-bold text-xl mb-1 font-montserrat">100K+</div>
                  <div className="text-sm text-gray-600 font-inter">Bottles Distributed</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-jalseva-blue font-bold text-xl mb-1 font-montserrat">25+</div>
                  <div className="text-sm text-gray-600 font-inter">Cities Reached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
