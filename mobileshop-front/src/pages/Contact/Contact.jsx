import React from "react";

const Contact = () => {
  return (
    <div style={{backgroundImage:'url("https://i.ibb.co.com/xhq5Ftc/image.png")',
                  backgroundRepeat:'no-repeat', backgroundSize:'cover' }}
          className="bg-gray-100 py-12">
      <div className="container w-2/3 mx-auto px-6 lg:px-20">
        <h2 style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}} className="text-3xl font-bold text-center text-white mb-6">
          Contact Us
        </h2>
        <p style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}} className="text-center text-white mb-12">
          Have questions or need support? Reach out to us, and we’ll get back to you shortly.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 lg:p-12">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
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
                placeholder="Type your message here..."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
