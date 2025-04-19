
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { toast } from './ui/sonner';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface CampaignFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  region: string;
  quantity: string;
  audience: string;
  startDate: string;
  message: string;
};

const CampaignForm = ({ isOpen, onClose }: CampaignFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to a backend
      console.log('Campaign form submitted:', data);
      console.log('Uploaded file:', file);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success("Your campaign request has been submitted! Our team will reach out to you shortly.");
      
      // Reset form and close modal
      reset();
      setFile(null);
      onClose();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold font-montserrat">Configure Your Campaign</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
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
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
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
          </div>
          
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-3 font-montserrat">Campaign Details</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
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
                {errors.region && <p className="mt-1 text-sm text-red-500">{errors.region.message}</p>}
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
                {errors.quantity && <p className="mt-1 text-sm text-red-500">{errors.quantity.message}</p>}
              </div>
            </div>
            
            <div className="mt-4">
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
              {errors.audience && <p className="mt-1 text-sm text-red-500">{errors.audience.message}</p>}
            </div>
            
            <div className="mt-4">
              <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                Upload Brand Logo/Artwork
              </label>
              <Input
                id="logo"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="py-1.5"
              />
              {file && (
                <p className="mt-1 text-sm text-green-600">
                  File selected: {file.name}
                </p>
              )}
            </div>
            
            <div className="mt-4">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                Preferred Start Date
              </label>
              <Input
                id="startDate"
                type="date"
                {...register("startDate")}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                Additional Requirements
              </label>
              <Textarea
                id="message"
                {...register("message")}
                rows={3}
                placeholder="Any specific requirements or questions?"
              />
            </div>
          </div>
          
          <div className="pt-4 flex justify-center">
            <Button
              type="submit"
              className="py-3 px-10 bg-jalseva-blue text-white rounded-full font-medium font-inter text-lg shadow-md hover:bg-jalseva-blue/90 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Campaign"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignForm;
