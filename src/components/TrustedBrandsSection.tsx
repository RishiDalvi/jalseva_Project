import React from 'react';

const TrustedBrandsSection = () => {
  const brands = [
    {
      id: 1,
      name: "Nisarg Constructions",
      logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Vaidik Hospital Group", 
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "NextGen Institutes",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Green Earth Solutions",
      logo: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 5,
      name: "Urban Infrastructure",
      logo: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-jalseva-blue mb-2">
            Trusted by leading brands
          </h2>
          <div className="w-16 h-1 bg-jalseva-blue mx-auto"></div>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-jalseva-blue/10 p-6 flex flex-col items-center justify-center min-h-[120px]"
            >
              {/* Brand Logo - Circular */}
              <div className="w-12 h-12 rounded-full overflow-hidden mb-4 bg-gray-50 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Brand Name */}
              <h3 className="text-center text-sm font-montserrat font-bold text-gray-800 leading-tight">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-8">
          <p className="text-sm font-inter text-gray-500">
            Join 50+ leading brands making a difference with JALseva
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;