const stats = [
  {
    number: "10K+",
    text: "Professionals Trained For Exceptional Career Success",
  },
  {
    number: "200+",
    text: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    number: "5K+",
    text: "Active Learners Engaged In Dynamic Courses",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Our <span className="text-blue-600">Track Record</span>
          </h2>

          <p className="text-gray-600 mt-4 text-xl">
            The Numbers Behind Our Success
          </p>
        </div>

        <div className="grid md:grid-cols-3 text-center">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`px-8 ${
                index !== 2 ? "md:border-r border-gray-300" : ""
              }`}
            >
              <div className="inline-block bg-blue-100 text-blue-600 font-bold text-4xl px-8 py-3 rounded-full">
                {item.number}
              </div>

              <p className="mt-6 text-xl leading-9 text-gray-800">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}