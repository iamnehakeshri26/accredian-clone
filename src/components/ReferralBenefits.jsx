export default function ReferralBenefits() {

  const benefits = [
    {
      title: "Industry Experts",
      description: "Learn from experienced mentors and industry leaders."
    },
    {
      title: "Flexible Learning",
      description: "Self-paced learning with live mentorship sessions."
    },
    {
      title: "Recognized Certification",
      description: "Earn certificates from top universities."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Accredian?
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Everything your organization needs for workforce upskilling.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {benefits.map((item) => (

            <div
              key={item.title}
              className="bg-white rounded-xl shadow p-8 hover:shadow-xl transition"
            >

              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                📘
              </div>

              <h3 className="text-xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}