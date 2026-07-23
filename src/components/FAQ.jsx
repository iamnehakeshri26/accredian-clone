"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who can enroll?",
    answer:
      "Working professionals, graduates, and organizations looking to upskill their workforce can enroll.",
  },
  {
    question: "Are certificates provided?",
    answer:
      "Yes. Learners receive industry-recognized certificates after successfully completing the program.",
  },
  {
    question: "Do you provide corporate training?",
    answer:
      "Yes. We offer customized corporate learning solutions for organizations of all sizes.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Find answers to the most common questions.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl mb-5 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center p-6 font-semibold text-left"
            >
              {faq.question}
              <span className="text-2xl">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}