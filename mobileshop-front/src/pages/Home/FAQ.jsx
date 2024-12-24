import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is MobiVerse?",
      answer:
        "MobiVerse is your one-stop shop for all mobile-related products, including the latest smartphones, accessories, and more.",
    },
    {
      question: "Do you offer warranty on your products?",
      answer:
        "Yes, we offer a manufacturer warranty on all products. The warranty period and terms vary by product and brand.",
    },
    {
      question: "What are the payment options available?",
      answer:
        "We accept various payment methods, including credit/debit cards, mobile banking, and cash on delivery for eligible locations.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Yes, you can return or exchange products within 7 days of delivery, provided they are in unused condition and with original packaging. Terms and conditions apply.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we deliver only within Bangladesh. International shipping is not available at this time.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we will provide you with a tracking ID and a link to track your order in real-time.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@mobiverse.com or call us at +880-1234-567890.",
    },
  ];

  return (
    <div className="p-6 lg:p-12  min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-6 text-indigo-600">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Find answers to the most commonly asked questions about MobiVerse.
      </p>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-indigo-500">
              {faq.question}
            </h3>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
