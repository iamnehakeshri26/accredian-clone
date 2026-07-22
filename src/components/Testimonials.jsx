export default function Testimonials() {

  const reviews = [
    {
      name: "Rahul Sharma",
      company: "TCS",
      review:
        "Accredian helped our employees upskill quickly with structured learning."
    },
    {
      name: "Priya Verma",
      company: "Infosys",
      review:
        "The learning experience was excellent and the certification added value."
    },
    {
      name: "Ankit Singh",
      company: "Amazon",
      review:
        "Highly recommended for enterprise learning and employee development."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {reviews.map((item) => (

            <div
              key={item.name}
              className="bg-white rounded-xl shadow-lg p-8"
            >

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-bold text-xl">
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