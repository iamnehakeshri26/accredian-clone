export default function Hero() {
  return (
    <section id="home" className="bg-white py-10 px-5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Enterprise Learning Platform
          </span>

          <h1 className="text-6xl font-bold mt-6 leading-tight">
            Empower Your
            <span className="text-blue-600"> Workforce</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Upskill your employees through industry-recognized certification
            programs from top universities and leading experts.
          </p>

          <div className="mt-8 flex gap-5">

            <button className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>

            <button className="border border-blue-600 text-blue-600 px-7 py-3 rounded-lg hover:bg-blue-50">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

         <img
  src="/images/hero.jpg"
  alt="Enterprise Learning"
  className="w-full max-w-xl"
/>

        </div>

      </div>
    </section>
  );
}