const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Infosys",
    feedback:
      "Accredian helped our employees gain industry-ready skills through structured learning programs.",
  },
  {
    name: "Priya Verma",
    company: "TCS",
    feedback:
      "The training quality was excellent, and our teams saw measurable improvements in productivity.",
  },
  {
    name: "Ankit Mehta",
    company: "Wipro",
    feedback:
      "Highly recommended for organizations looking to upskill their workforce efficiently.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>

          <p className="mt-4 text-xl text-gray-600">
            Trusted by leading organizations across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="text-5xl text-blue-600">❝</div>

              <p className="mt-4 text-gray-600 leading-8">
                {item.feedback}
              </p>

              <h3 className="mt-8 text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-blue-600">
                {item.company}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}