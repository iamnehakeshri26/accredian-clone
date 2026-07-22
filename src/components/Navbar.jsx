export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Accredian
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Clients</a>
          <a href="#">Programs</a>
          <a href="#">Accredian Edge</a>
          <a href="#">FAQ</a>
        </nav>

        {/* CTA */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>

      </div>
    </header>
  );
}