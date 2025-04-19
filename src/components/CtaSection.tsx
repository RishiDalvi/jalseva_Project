
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

          {/* Contact Form */}
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
                  placeholder="Tell us about your CSR goals and requirements"
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

          {/* Additional Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-white text-3xl mb-3">📍</div>
              <h3 className="text-white font-montserrat font-semibold mb-1">Visit Us</h3>
              <p className="text-white/80 font-inter">Pune, India</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-white text-3xl mb-3">📧</div>
              <h3 className="text-white font-montserrat font-semibold mb-1">Email Us</h3>
              <p className="text-white/80 font-inter">rishi_master@proton.me</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-white text-3xl mb-3">📱</div>
              <h3 className="text-white font-montserrat font-semibold mb-1">Follow Us</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-white hover:text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
