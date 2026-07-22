export default function TrustedCompanies() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          Trusted by Leading Companies
        </h2>

        <p className="text-gray-500 mt-3">
          Our enterprise learning solutions are trusted by top organizations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-12">

          <div className="border rounded-lg p-8 shadow-sm">Google</div>

          <div className="border rounded-lg p-8 shadow-sm">Amazon</div>

          <div className="border rounded-lg p-8 shadow-sm">Microsoft</div>

          <div className="border rounded-lg p-8 shadow-sm">Infosys</div>

          <div className="border rounded-lg p-8 shadow-sm">TCS</div>

        </div>

      </div>
    </section>
  );
}