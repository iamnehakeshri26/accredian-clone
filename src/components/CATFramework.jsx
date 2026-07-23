export default function CATFramework() {
  return (
    <section id="cat" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Our <span className="text-blue-600">CAT Framework</span>
          </h2>

          <p className="mt-4 text-xl text-gray-600">
            A structured approach to enterprise learning and workforce transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-blue-50 rounded-2xl p-8 shadow-md">
            <div className="text-5xl">🎯</div>
            <h3 className="text-2xl font-bold mt-6">Consult</h3>
            <p className="mt-4 text-gray-600">
              Understand your business challenges and identify skill gaps.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 shadow-md">
            <div className="text-5xl">🚀</div>
            <h3 className="text-2xl font-bold mt-6">Accelerate</h3>
            <p className="mt-4 text-gray-600">
              Deliver industry-focused learning programs with expert mentors.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 shadow-md">
            <div className="text-5xl">📈</div>
            <h3 className="text-2xl font-bold mt-6">Transform</h3>
            <p className="mt-4 text-gray-600">
              Measure outcomes and continuously improve workforce performance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}