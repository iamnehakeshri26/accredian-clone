export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            Accredian
          </h2>

          <p className="mt-4 text-gray-300">
            Enterprise Learning Platform helping organizations
            build future-ready teams through industry-leading
            certification programs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#clients" className="hover:text-white">Clients</a></li>
            <li><a href="#cat" className="hover:text-white">CAT Framework</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-300">
            📧 support@accredian.com
          </p>

          <p className="text-gray-300 mt-2">
            📞 +91 98765 43210
          </p>

          <p className="text-gray-300 mt-2">
            📍 Bengaluru, India
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © 2026 Accredian Clone. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}