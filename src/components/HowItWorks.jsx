const steps = [
  {
    step: "01",
    title: "Consultation",
    desc: "Understand your organization's learning requirements and business goals.",
  },
  {
    step: "02",
    title: "Program Design",
    desc: "Select customized learning paths and certifications for your teams.",
  },
  {
    step: "03",
    title: "Training Delivery",
    desc: "Employees learn through instructor-led and self-paced programs.",
  },
  {
    step: "04",
    title: "Measure Success",
    desc: "Track progress, certifications and business impact with analytics.",
  },
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            How It <span className="text-blue-600">Works</span>
          </h2>

          <p className="mt-4 text-xl text-gray-600">
            A simple four-step process to transform your workforce.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((item) => (

            <div
              key={item.step}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                {item.step}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
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