const clients = [
  { name: "Google", logo: "/logos/google.jpg" },
  { name: "Amazon", logo: "/logos/amazon.jpg" },
  { name: "Microsoft", logo: "/logos/microsoft.jpg" },
  { name: "Infosys", logo: "/logos/infosys.jpg" },
  { name: "TCS", logo: "/logos/tcs.jpg" },
  { name: "Wipro", logo: "/logos/wipro.jpg" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold">
            Trusted by{" "}
            <span className="text-blue-600">
              Leading Companies
            </span>
          </h2>

          <p className="mt-4 text-xl text-gray-600">
            Helping enterprises build future-ready workforces.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {clients.map((client) => (

            <div
              key={client.name}
              className="bg-white rounded-2xl border border-gray-200 p-8 flex justify-center items-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}