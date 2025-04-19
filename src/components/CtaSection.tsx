
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from './ui/sonner';
import CampaignForm from './CampaignForm';

const CtaSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCampaignFormOpen, setIsCampaignFormOpen] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to a backend
      console.log('Contact form submitted:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success("Thanks for contacting JalSeva! We'll get back to you soon.");
      
      // Reset form
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-jalseva-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-white">Be the Brand That Cares</h2>
            <p className="text-xl font-inter text-white/90">
              Join our mission to hydrate the nation while amplifying your brand.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Full Name*
                  </label>
                  <Input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name?.message?.toString()}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Email Address*
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    placeholder="Enter your email"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email?.message?.toString()}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                  Company Name*
                </label>
                <Input
                  id="company"
                  type="text"
                  {...register("company", { required: "Company name is required" })}
                  placeholder="Enter your company name"
                  className={errors.company ? "border-red-500" : ""}
                />
                {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company?.message?.toString()}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                  Message
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us about your social responsibility goals and requirements"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="consent"
                  {...register("consent", { required: true })}
                  type="checkbox"
                  className="h-4 w-4 text-jalseva-blue focus:ring-jalseva-blue border-gray-300 rounded"
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700 font-inter">
                  I agree to receive communications from JalSeva
                </label>
                {errors.consent && <p className="ml-2 text-sm text-red-500">Consent is required</p>}
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="py-3 px-10 bg-jalseva-blue text-white rounded-full font-medium font-inter text-lg shadow-md transform hover:scale-105 transition-transform"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Contact Us"}
                </Button>
                
                <div className="mt-6">
                  <Button
                    type="button"
                    onClick={() => setIsCampaignFormOpen(true)}
                    className="py-3 px-10 bg-green-600 text-white rounded-full font-medium font-inter text-lg shadow-md transform hover:scale-105 transition-transform"
                  >
                    Start Your Campaign
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <CampaignForm 
        isOpen={isCampaignFormOpen}
        onClose={() => setIsCampaignFormOpen(false)}
      />
    </section>
  );
};

export default CtaSection;
