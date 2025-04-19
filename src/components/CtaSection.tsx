
const CtaSection = () => {
  return (
    <section id="contact" className="py-20 bg-jalseva-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-white">Be the Brand That Cares</h2>
            <p className="text-xl font-inter text-white/90">
              Join our mission to hydrate the nation while amplifying your brand.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jalseva-blue focus:border-transparent transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jalseva-blue focus:border-transparent transition"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                  Company Name*
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jalseva-blue focus:border-transparent transition"
                  placeholder="Enter your company name"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jalseva-blue focus:border-transparent transition"
                  placeholder="Tell us about your social responsibility goals and requirements"
                ></textarea>
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
                  Start Your Campaign
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
