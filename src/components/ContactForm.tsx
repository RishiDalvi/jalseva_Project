
const ContactForm = () => {
  return (
    <form
      action="https://submit-form.com/sIiObPlqL"
      method="POST"
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
            Full Name*
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
            Email Address*
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
          Company Name*
        </label>
        <input
          id="company"
          type="text"
          name="company"
          required
          placeholder="Enter your company name"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your social responsibility goals and requirements"
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
      <div className="text-center">
        <button
          type="submit"
          className="py-3 px-10 bg-jalseva-blue text-white rounded-full font-medium font-inter text-lg shadow-md transform hover:scale-105 transition-transform"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
