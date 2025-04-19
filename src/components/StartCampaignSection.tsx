
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from './ui/sonner';

const StartCampaignSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to a backend
      console.log('Campaign section submitted:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success("Your campaign request has been submitted! Our team will reach out to you shortly.");
      
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
    <section id="start-campaign" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-jalseva-blue">
              Start Your Campaign
            </h2>
            <p className="text-xl font-inter text-gray-700">
              Customize your social impact campaign with JalSeva
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
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                  Target Region/City*
                </label>
                <Input
                  id="region"
                  type="text"
                  {...register("region", { required: "Target region is required" })}
                  placeholder="E.g., Pune, Mumbai, Delhi"
                  className={errors.region ? "border-red-500" : ""}
                />
                {errors.region && <p className="mt-1 text-sm text-red-500">{errors.region?.message?.toString()}</p>}
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                  Bottle Quantity*
                </label>
                <Input
                  id="quantity"
                  type="number"
                  {...register("quantity", { required: "Quantity is required" })}
                  placeholder="E.g., 1000"
                  className={errors.quantity ? "border-red-500" : ""}
                />
                {errors.quantity && <p className="mt-1 text-sm text-red-500">{errors.quantity?.message?.toString()}</p>}
              </div>

              <div>
                <label htmlFor="audience" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                  Preferred Audience*
                </label>
                <select
                  id="audience"
                  {...register("audience", { required: "Audience selection is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jalseva-blue"
                >
                  <option value="">Select an audience</option>
                  <option value="workers">Workers</option>
                  <option value="students">Students</option>
                  <option value="slum-areas">Slum Areas</option>
                  <option value="event-goers">Event Attendees</option>
                  <option value="general">General Public</option>
                </select>
                {errors.audience && <p className="mt-1 text-sm text-red-500">{errors.audience?.message?.toString()}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                  Additional Requirements
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="py-3 px-10 bg-green-600 text-white rounded-full font-medium font-inter text-lg shadow-md transform hover:scale-105 transition-transform"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Start Campaign"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartCampaignSection;
