
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from './ui/modal';
import { Button } from './ui/button';
import { toast } from './ui/sonner';
import { Input } from './ui/input';

interface DownloadProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  email: string;
};

const DownloadProposalModal = ({ isOpen, onClose }: DownloadProposalModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to a backend
      console.log('Email for download:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Trigger the download
      triggerDownload();
      
      // Show success message
      toast.success("Thank you! Your download has started.");
      
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

  const triggerDownload = () => {
    // In a real implementation, this would download a real PDF
    // For now, we'll create a simple text file for demonstration
    const element = document.createElement("a");
    const file = new Blob([
      "JalSeva Social Responsibility Proposal\n\nThis is a placeholder for the actual PDF content."
    ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "JalSeva_Proposal.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Download Proposal">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <p className="text-gray-600 mb-2">Enter your email to receive our social responsibility proposal</p>
        
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
        
        <div className="pt-2">
          <Button
            type="submit"
            className="w-full py-3 bg-jalseva-blue text-white rounded-full font-medium font-inter text-lg shadow-md hover:bg-jalseva-blue/90 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Download Now"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default DownloadProposalModal;
