
import { CheckCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Social Responsibility Fulfillment',
      description: 'Meet your company\'s social responsibility goals through impactful water distribution.'
    },
    {
      title: 'Hyperlocal Advertising',
      description: 'Target specific communities and demographics with precision and relevance.'
    },
    {
      title: 'Massive Goodwill',
      description: 'Build a positive brand image by associating with humanitarian efforts.'
    },
    {
      title: 'Photo Proof Distribution',
      description: 'Receive documented evidence of your impact for marketing and reporting.'
    },
    {
      title: 'Real-time Impact Dashboard',
      description: 'Monitor the reach and effectiveness of your campaign with detailed analytics.'
    },
    {
      title: 'Social Media Exposure',
      description: 'Gain additional visibility through our social media coverage of distribution events.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-2">Why Choose JalSeva</h2>
          <div className="w-20 h-1 bg-jalseva-blue mx-auto mb-4"></div>
          <p className="text-lg font-inter text-gray-700 max-w-2xl mx-auto">
            We offer a unique blend of social impact and brand visibility that traditional advertising cannot match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover-lift"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 text-jalseva-blue">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-montserrat mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 font-inter">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-jalseva-blue-light/20 to-jalseva-blue/20 p-8 rounded-xl">
          <p className="text-xl font-inter text-gray-800 italic text-center">
            "Partnering with JalSeva helped us fulfill our social responsibility goals while deeply connecting with people."
          </p>
          <div className="mt-4 text-center">
            <p className="font-semibold font-montserrat">Marketing Director</p>
            <p className="text-sm text-gray-600">Major Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
