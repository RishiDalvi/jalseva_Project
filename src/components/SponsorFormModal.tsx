
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from './ui/modal';
import { Button } from './ui/button';
import { toast } from './ui/sonner';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface SponsorFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const SponsorFormModal = ({ isOpen, onClose }: SponsorFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to a backend
      console.log('Form submitted:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success("Thank you for joining JalSeva. Our team will reach out to you shortly.");
      
      // Reset form and close modal
      reset();
      onClose();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Become a Sponsor">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
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
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
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
          {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="Enter your phone number"
          />
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
        
        <div className="pt-2">
          <Button
            type="submit"
            className="w-full py-3 bg-jalseva-blue text-white rounded-full font-medium font-inter text-lg shadow-md hover:bg-jalseva-blue/90 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SponsorFormModal;
