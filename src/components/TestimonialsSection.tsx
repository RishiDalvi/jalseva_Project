
import { useState } from 'react';
import priyaKrishnaImage from '../assets/priya-krishna.jpg';
import pratimaGhalsasiImage from '../assets/pratima-ghalsasi.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "JalSeva's innovative approach allowed us to reach communities we never could before, while fulfilling our CSR goals.",
      name: "Rajesh Kumar Dwivedi",
      position: "Finance Director",
      company: "BHEL",
      image: "https://boardstewardship.com/wp-content/uploads/2024/06/image-11-4.jpg?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      quote: "The feedback from our branded water bottle campaign was incredible. We saw a 30% increase in brand recall among our target audience.",
      name: "Priya Krishna",
      position: "Marketing Head",
      company: "Gigante Technologies",
      image: priyaKrishnaImage
    },
    {
      quote: "Not only did we meet our sustainability targets, but the photo documentation provided by JalSeva added immense value to our annual report.",
      name: "Pratima Ghalsasi",
      position: "Sustainability Officer",
      company: "Global Manufacturing",
      image: pratimaGhalsasiImage
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-2">Success Stories</h2>
          <div className="w-20 h-1 bg-jalseva-blue mx-auto mb-4"></div>
          <p className="text-lg font-inter text-gray-700 max-w-2xl mx-auto">
            Hear from our partners about their experience working with JalSeva.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-jalseva-blue text-4xl font-serif mb-4">"</div>
                        <p className="text-lg font-inter text-gray-700 italic mb-6">
                          {testimonial.quote}
                        </p>
                        <div>
                          <p className="font-montserrat font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-jalseva-blue hover:bg-gray-50"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-jalseva-blue hover:bg-gray-50"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-jalseva-blue' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-16">
          <p className="text-center font-inter text-gray-500 mb-6">Trusted by leading brands</p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Updated brand logos */}
            <div className="w-32 h-16 bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=160&q=80"
                alt="Nisarg Constructions"
                className="h-12 object-contain"
              />
              <span className="ml-2 text-gray-600 font-montserrat text-xs">Nisarg Constructions</span>
            </div>
            <div className="w-32 h-16 bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=160&q=80"
                alt="Vaidik Hospital Group"
                className="h-12 object-contain"
              />
              <span className="ml-2 text-gray-600 font-montserrat text-xs">Vaidik Hospital Group</span>
            </div>
            <div className="w-32 h-16 bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=160&q=80"
                alt="NextGen Institutes"
                className="h-12 object-contain"
              />
              <span className="ml-2 text-gray-600 font-montserrat text-xs">NextGen Institutes</span>
            </div>
            <div className="w-32 h-16 bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=160&q=80"
                alt="AdSpecta"
                className="h-12 object-contain"
              />
              <span className="ml-2 text-gray-600 font-montserrat text-xs">AdSpecta</span>
            </div>
            <div className="w-32 h-16 bg-gray-100 rounded-md flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=160&q=80"
                alt="BITFIT INDIA"
                className="h-12 object-contain"
              />
              <span className="ml-2 text-gray-600 font-montserrat text-xs">BITFIT INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
