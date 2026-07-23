const benefits = [
  {
    icon: "🎯",
    title: "Tailored Learning",
    description:
      "Customized enterprise learning solutions designed around your business goals.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Mentors",
    description:
      "Learn directly from industry experts with real-world experience.",
  },
  {
    icon: "📜",
    title: "Certified Programs",
    description:
      "Globally recognized certifications that improve workforce capability.",
  },
  {
    icon: "📈",
    title: "Measurable Growth",
    description:
      "Track employee progress with detailed analytics and learning reports.",
  },
];

export default function ReferralBenefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Enterprise Learning{" "}
            <span className="text-blue-600">Benefits</span>
          </h2>

          <p className="mt-4 text-xl text-gray-600">
            Everything your organization needs to build future-ready teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {benefits.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}