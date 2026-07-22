export default function Clients() {
  const clients = [
    "Google",
    "Amazon",
    "Microsoft",
    "Infosys",
    "TCS",
    "Wipro",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Trusted by Leading Companies
        </h2>

        <p className="text-gray-600 mt-3">
          We partner with top organizations to upskill their workforce.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">

          {clients.map((client) => (
            <div
              key={client}
              className="border rounded-xl p-8 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">
                {client}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}