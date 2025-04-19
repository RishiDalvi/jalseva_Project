
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

        {/* Stats Grid */}
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

        {/* Interactive map placeholder - For illustration purposes */}
        <div className="mt-16 bg-white p-4 rounded-xl shadow-md">
          <div className="aspect-video bg-jalseva-gray/40 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold font-montserrat mb-2">Distribution Map</h3>
              <p className="text-gray-600 font-inter max-w-md mx-auto">
                Our real-time impact tracker shows where JalSeva bottles are making a difference.
              </p>
              <button className="mt-4 py-2 px-6 bg-jalseva-blue text-white rounded-full font-medium font-inter text-sm">
                View Full Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboardSection;
