export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            Accredian
          </h2>

          <p className="mt-3 text-gray-400">
            Enterprise Learning Platform
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <p>Home</p>
          <p className="mt-2">Programs</p>
          <p className="mt-2">Contact</p>
        </div>

        <div className="mt-6 md:mt-0">
          <p>Email</p>
          <p className="text-gray-400">
            support@accredian.com
          </p>
        </div>

      </div>

    </footer>
  );
}