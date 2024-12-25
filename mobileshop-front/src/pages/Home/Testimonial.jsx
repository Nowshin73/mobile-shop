import React from "react";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Software Engineer",
    image: "https://i.ibb.co.com/Kwc62vf/image.png",
    feedback:
      "MobiVerse has been my go-to store for all my mobile needs. Their product quality and delivery speed are unmatched. Highly recommended!",
  },
  {
    name: "Zahin Rahman",
    role: "Entrepreneur",
    image: "https://i.ibb.co.com/Z2MXsVR/image.png",
    feedback:
      "The customer support team is amazing! They helped me pick the perfect phone for my business needs. Thank you, MobiVerse!",
  },
  {
    name: "Tanisha Ahmed",
    role: "Content Creator",
    image: "https://i.ibb.co.com/RTzvjYJ/image.png",
    feedback:
      "I was impressed by the variety of products and competitive prices. MobiVerse is a game-changer for mobile enthusiasts like me!",
  },
];

const Testimonial = () => {
  return (
    <div className="p-6 lg:p-12 ">
      <h2 className="text-4xl font-bold text-center mb-6 text-indigo-600">
        What Our Customers Say
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Hear from our happy customers who love shopping at MobiVerse.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-6 flex flex-col items-center border border-gray-200"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-indigo-500">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
            <p className="text-gray-700 mt-4 text-center">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
