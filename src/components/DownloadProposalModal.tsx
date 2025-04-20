
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
    const pdfUrl = "https://viblobbjoqxmucpfvxln.supabase.co/storage/v1/object/sign/pdf/JalSeva_Campaign_Proposal.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzYyNjVhN2UwLWRkYmYtNGUzMS04Mzc0LTdjOWEzMDAzNjY0MyJ9.eyJ1cmwiOiJwZGYvSmFsU2V2YV9DYW1wYWlnbl9Qcm9wb3NhbC5wZGYiLCJpYXQiOjE3NDUxMzg4MTQsImV4cCI6MTc3NjY3NDgxNH0.5wAN3BNRJJD1u2Dc8Eq6u85hqPfwIDMARG6Rs7ULxVI";
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'JalSeva_Campaign_Proposal.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
