export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Our <span className="text-blue-600">Track Record</span>
        </h2>

        <p className="text-gray-600 mt-4 text-xl">
          The Numbers Behind Our Success
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <div className="border rounded-xl p-8 shadow">
            <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
            <p className="mt-4 text-gray-700">
              Professionals Trained
            </p>
          </div>

          <div className="border rounded-xl p-8 shadow">
            <h3 className="text-4xl font-bold text-blue-600">200+</h3>
            <p className="mt-4 text-gray-700">
              Sessions Delivered
            </p>
          </div>

          <div className="border rounded-xl p-8 shadow">
            <h3 className="text-4xl font-bold text-blue-600">5K+</h3>
            <p className="mt-4 text-gray-700">
              Active Learners
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}