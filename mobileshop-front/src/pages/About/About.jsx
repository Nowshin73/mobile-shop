import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-10 md:h-[100vh]">
      <div className="container mx-auto px-6 sm:px-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-center md:mb-28 text-gray-600 text-lg leading-relaxed mb-8">
          Welcome to <span className="font-semibold text-indigo-600">MobiVerse</span>, your one-stop shop for the latest and greatest in mobile technology. We pride ourselves on offering a diverse range of smartphones, accessories, and gadgets to cater to all your mobile needs.
        </p>

        <div className="grid gap-6  sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide top-quality mobile products at competitive prices while delivering exceptional customer service. Your satisfaction is our priority.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the leading mobile shop in the industry by offering cutting-edge technology and unparalleled value to our customers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 leading-relaxed">
              We ensure quality, affordability, and a seamless shopping experience. Our team is always here to assist you in finding the perfect mobile solutions.
            </p>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default About;
