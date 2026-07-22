export default function HowItWorks() {

  const steps = [
    {
      step: "01",
      title: "Consultation",
      desc: "Understand your organization’s learning goals."
    },
    {
      step: "02",
      title: "Program Selection",
      desc: "Choose the best courses for your workforce."
    },
    {
      step: "03",
      title: "Training",
      desc: "Employees learn through expert-led programs."
    },
    {
      step: "04",
      title: "Certification",
      desc: "Receive industry-recognized certificates."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-12">

          {steps.map((item) => (

            <div
              key={item.step}
              className="text-center border rounded-xl p-8 shadow"
            >

              <div className="text-4xl font-bold text-blue-600">
                {item.step}
              </div>

              <h3 className="text-xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}