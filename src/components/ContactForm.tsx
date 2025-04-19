
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from './ui/sonner';

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      // In a real implementation, this would send data to a backend
      console.log('Contact form submitted:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Thanks for contacting JalSeva! We'll get back to you soon.");
      reset();
      onSuccess?.();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
