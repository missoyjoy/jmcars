import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { auth } from "../firebase/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import logo from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
  };

  return (
    <header className="bg-black text-[#D4AF37] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Side: Logo only with hover glow */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src={logo}
              alt="JM Motors Logo"
              className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_#D4AF37]"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/cars-for-sale">Cars for Sale</Link>
          <Link to="/cars-for-hire">Cars for Hire</Link>

          {/* Dropdown Menu for Car Services */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-1"
            >
              Car Services <ChevronDown size={16} />
            </button>

            {isServicesOpen && (
              <div className="absolute bg-black text-[#D4AF37] mt-2 rounded shadow-lg w-48 z-50">
                <Link
                  to="/repairs-maintenance"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Repairs & Maintenance
                </Link>
                <Link
                  to="/car-wash"
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Car Wash
                </Link>
              </div>
            )}
          </div>

          {/* Auth Links */}
          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="text-red-500">
              Logout ({user.email})
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#D4AF37]"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-[#D4AF37] px-6 py-4 space-y-2">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/cars-for-sale" onClick={() => setIsMenuOpen(false)}>
            Cars for Sale
          </Link>
          <Link to="/cars-for-hire" onClick={() => setIsMenuOpen(false)}>
            Cars for Hire
          </Link>

          {/* Mobile Car Services dropdown */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-1"
            >
              Car Services <ChevronDown size={16} />
            </button>
            {isServicesOpen && (
              <div className="ml-4 mt-2 space-y-1">
                <Link
                  to="/repairs-maintenance"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesOpen(false);
                  }}
                >
                  Repairs & Maintenance
                </Link>
                <Link
                  to="/car-wash"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsServicesOpen(false);
                  }}
                >
                  Car Wash
                </Link>
              </div>
            )}
          </div>

          {!user ? (
            <>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="text-red-500"
            >
              Logout ({user.email})
            </button>
          )}
        </div>
      )}
    </header>
  );
}


