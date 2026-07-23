const features = [
  {
    title: "Industry Experts",
    desc: "Learn from experienced professionals and leading mentors.",
    icon: "👨‍🏫",
  },
  {
    title: "Customized Learning",
    desc: "Tailored programs designed for enterprise requirements.",
    icon: "📚",
  },
  {
    title: "Flexible Delivery",
    desc: "Online, offline and hybrid learning solutions.",
    icon: "💻",
  },
  {
    title: "Career Growth",
    desc: "Upskill teams with industry-recognized certifications.",
    icon: "📈",
  },
];

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Why Choose{" "}
            <span className="text-blue-600">
              Accredian
            </span>
          </h2>

          <p className="mt-4 text-xl text-gray-600">
            Empowering enterprises through world-class learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}