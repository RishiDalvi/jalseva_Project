
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
      // Save email to database
      const { error } = await supabase
        .from('proposal_downloads')
        .insert({ email: data.email });

      if (error) {
        console.error('Database error:', error);
        toast.error("Failed to save email. Please try again.");
        return;
      }

      // Updated PDF URL from your connected Supabase project
      const pdfUrl = "https://viblobbjoqxmucpfvxln.supabase.co/storage/v1/object/sign/pdf/Jalseva%20Proposal.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iY2Q0ZmQ4OC03ODkyLTQ3MjYtYjkxZS01NDc4YmMzZDAxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGYvSmFsc2V2YSBQcm9wb3NhbC5wZGYiLCJpYXQiOjE3NTE5Nzk1MjUsImV4cCI6MTc4MzUxNTUyNX0.YiZSqxgpHgloTz7-Yu7WPrsNOyaTxHFlBmidghfLw9c";
      
      // Create a direct download link
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', 'Jalseva_Proposal.pdf');
      link.setAttribute('target', '_blank');
      link.style.display = 'none';
      document.body.appendChild(link);
      
      // Trigger download automatically
      link.click();
      
      // Remove the link element after download is initiated
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
      
      // Show success message
      toast.success("Thank you! Your download has started and email has been saved.");
      
      // Reset form and close modal
      reset();
      onClose();
    } catch (error) {
      console.error('Error:', error);
      toast.error("Something went wrong. Please try again.");
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
