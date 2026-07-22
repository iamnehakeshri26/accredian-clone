"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Accredian Enterprise?",
      answer:
        "It is a workforce upskilling platform for organizations."
    },
    {
      question: "Who can enroll?",
      answer:
        "Companies looking to train and upskill their employees."
    },
    {
      question: "Are certificates provided?",
      answer:
        "Yes, learners receive industry-recognized certificates."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg mb-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-5 font-semibold flex justify-between"
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="p-5 border-t text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}