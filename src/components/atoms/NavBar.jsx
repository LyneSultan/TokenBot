import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-[#1F2937] px-4 sm:px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-lg sm:text-xl font-bold tracking-tight text-[#F3C623]">
        Token<span className="text-[#1F2937]">Bot</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex space-x-6 text-sm font-medium">
        <li><a href="/" className="hover:text-[#F3C623] transition">Home</a></li>
        <li><a href="#" className="hover:text-[#F3C623] transition">Explore</a></li>
        <li><a href="/how-it-works" className="hover:text-[#F3C623] transition">How It Works</a></li>
      </ul>

      {/* Desktop Button */}
      <div className="hidden sm:block">
        <button className="bg-[#F3C623] hover:bg-yellow-400 text-white text-sm font-semibold px-4 py-2 rounded-md transition">
          Connect Wallet
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden focus:outline-none"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 sm:hidden">
          <ul className="flex flex-col px-6 py-4 space-y-3 text-sm font-medium">
            <li><a href="/" className="hover:text-[#F3C623] transition" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#" className="hover:text-[#F3C623] transition" onClick={() => setMenuOpen(false)}>Explore</a></li>
            <li><a href="/how-it-works" className="hover:text-[#F3C623] transition" onClick={() => setMenuOpen(false)}>How It Works</a></li>
            <li>
              <button
                className="w-full bg-[#F3C623] hover:bg-yellow-400 text-white text-sm font-semibold px-4 py-2 rounded-md transition"
                onClick={() => setMenuOpen(false)}
              >
                Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
