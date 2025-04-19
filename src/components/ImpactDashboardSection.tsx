
import React from 'react';

const ImpactDashboardSection = () => {
  const impactData = [
    { label: 'Bottles Distributed', value: '100,000+', icon: '💧' },
    { label: 'Cities Reached', value: '25', icon: '🏙️' },
    { label: 'Brands Served', value: '52', icon: '🏢' },
    { label: 'Lives Touched', value: '200,000+', icon: '👥' }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-jalseva-gray to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-2">Impact Dashboard</h2>
          <div className="w-20 h-1 bg-jalseva-blue mx-auto mb-4"></div>
          <p className="text-lg font-inter text-gray-700 max-w-2xl mx-auto">
            Real numbers that showcase the difference we're making together with our partners.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactData.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 hover-lift"
            >
              <div className="text-4xl mb-2 text-center">{item.icon}</div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-jalseva-blue font-montserrat mb-1">
                  {item.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-inter">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboardSection;

