
const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Company Funds',
      description: 'Company funds water bottle production as part of their social impact initiative.',
      icon: '💰'
    },
    {
      number: '02',
      title: 'Brand Implementation',
      description: 'Bottles are printed with the company\'s branding and message.',
      icon: '🏷️'
    },
    {
      number: '03',
      title: 'Distribution',
      description: 'JalSeva distributes bottles to targeted audiences in need.',
      icon: '🚚'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-jalseva-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-2">How It Works</h2>
          <div className="w-20 h-1 bg-jalseva-blue mx-auto mb-4"></div>
          <p className="text-lg font-inter text-gray-700 max-w-2xl mx-auto">
            Our simple three-step process creates meaningful impact while enhancing your brand visibility.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex-1 bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 ${index === 0 ? 'bg-blue-400' : index === 1 ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">{step.icon}</div>
                  <div>
                    <div className="text-sm font-medium text-jalseva-blue font-inter">Step {step.number}</div>
                    <h3 className="text-xl font-bold font-montserrat">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-700 font-inter">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Connection line for desktop */}
        <div className="hidden md:flex justify-center mt-8">
          <div className="w-3/4 h-0.5 bg-jalseva-blue/30 relative">
            {[0, 1, 2].map((index) => (
              <div 
                key={index} 
                className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-jalseva-blue"
                style={{ left: `${index * 50}%` }}
              >
                <div className="absolute inset-0 rounded-full bg-jalseva-blue/50 animate-ripple"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="py-3 px-8 bg-jalseva-blue text-white rounded-full font-medium font-inter text-lg shadow-md transform hover:scale-105 transition-transform">
            Start Your Campaign
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
