export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b bg-gray-50 py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center"
    >
      <div className="max-w-2xl w-full mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800 animate-gradient">
            Get in Touch
          </h2>
          <p className="text-sm md:text-lg text-gray-700">
            Ready to enhance your satellite imagery? Send us a message below.
          </p>
        </div>

        {/* Floating Form Card */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
          <div className="relative bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all shadow-sm"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all shadow-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all shadow-sm appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjd2ViY2YwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="api">API Access</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all shadow-sm"
                  placeholder="Tell us about your satellite imaging needs..."
                  required
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                  required
                />
                <label
                  htmlFor="consent"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the privacy policy and terms of service
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-gray-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] transform duration-300 group cursor-pointer"
              >
                <span className="relative group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline ml-2 -mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
