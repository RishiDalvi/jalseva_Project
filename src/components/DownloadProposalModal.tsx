
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from './ui/modal';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { Input } from './ui/input';
import { supabase } from '@/integrations/supabase/client';

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
      // Updated PDF URL
      const pdfUrl = "https://hvhfqpboekuayugcjjdk.supabase.co/storage/v1/object/sign/proposaldoc/Jalseva%20Proposal.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTJhOWZjMC02NjEyLTRhMjAtYjczMi1iNGY5ODE3OGM2YzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9wb3NhbGRvYy9KYWxzZXZhIFByb3Bvc2FsLnBkZiIsImlhdCI6MTc1MTk3OTIwOCwiZXhwIjoxNzgzNTE1MjA4fQ.skRMt7atWvNLFt5xiAbaDrKSDPPmpU0h38A9_Ec-MyQ";
      
      // Create a direct download link
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', 'Jalseva_Proposal.pdf');
      link.setAttribute('target', '_blank');
      link.style.display = 'none';
      document.body.appendChild(link);
      
      // Trigger download directly
      link.click();
      
      // Remove the link element after download is initiated
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
      
      // Show success message
      toast.success("Thank you! Your download has started.");
      
      // Reset form and close modal
      reset();
      onClose();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error('Download error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
