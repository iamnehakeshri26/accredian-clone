export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-3xl font-bold text-blue-600">
          Accredian
        </div>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">

          <a href="#home" className="hover:text-blue-600">Home</a>

          <a href="#stats" className="hover:text-blue-600">Stats</a>

          <a href="#clients" className="hover:text-blue-600">Clients</a>

          <a href="#benefits" className="hover:text-blue-600">Benefits</a>

          <a href="#edge" className="hover:text-blue-600">Accredian Edge</a>

          <a href="#cat" className="hover:text-blue-600">CAT Framework</a>

          <a href="#howitworks" className="hover:text-blue-600">How It Works</a>

          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>

          <a href="#faq" className="hover:text-blue-600">FAQ</a>

        </nav>

        <a
  href="#contact"
  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
>
  Contact Us
</a>

      </div>
    </header>
  );
}