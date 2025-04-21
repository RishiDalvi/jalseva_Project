
import React from 'react';
import Modal from './ui/modal';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface SponsorFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const SponsorFormModal = ({ isOpen, onClose }: SponsorFormProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Become a Sponsor">
      <form
        action="https://submit-form.com/hkKDOTYug"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
            Full Name*
          </label>
          <Input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
            Email Address*
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
            Company Name*
          </label>
          <Input
            id="company"
            type="text"
            name="company"
            required
            placeholder="Enter your company name"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your sponsorship interest"
          />
        </div>
        
        <div className="flex items-center">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="h-4 w-4 text-jalseva-blue focus:ring-jalseva-blue border-gray-300 rounded"
          />
          <label htmlFor="consent" className="ml-2 block text-sm text-gray-700 font-inter">
            I agree to receive communications from JalSeva
          </label>
        </div>
        
        <div className="pt-2">
          <Button
            type="submit"
            className="w-full py-3 bg-jalseva-blue text-white rounded-full font-medium font-inter text-lg shadow-md hover:bg-jalseva-blue/90 transition-all"
          >
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SponsorFormModal;
