export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-400 pt-10 pb-6 px-4">
      {/* Top divider line */}
      <div className="mx-auto max-w-7xl border-t border-gray-300 mb-8"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 flex flex-col items-center justify-between md:flex-row gap-4 py-8">
        {/* Simple navigation links */}
        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-sky-400 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-sky-400 transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-sky-400 transition-colors">
            Privacy
          </a>
        </div>
        {/* Copyright */}
        <div className="text-gray-500 text-center">
          © {new Date().getFullYear()} Satellite Image Enhancement. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
