import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useUser } from "../context/user.context";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user, logout } = useUser();

  return (
    <header className="w-full flex items-center justify-center h-24 z-999 relative">
      <nav className="shadow-2xl border border-[#33394C] max-w-[90%] rounded-full mx-auto bg-[#151A28] px-4 md:px-8 text-white h-16 flex items-center justify-between w-full relative">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold">
          <img
            src="https://ik.imagekit.io/princedevfolio/remove-photos-background-removed.png?updatedAt=1762614565712"
            className="h-12"
            alt="Logo"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-5">
          <span
            className="cursor-pointer hover:text-indigo-400 transition"
            onClick={() => navigate("/services")}
          >
            Find a Service
          </span>

          {user.loggedin ? (
            <>
              <span className="text-gray-300">{user.data?.fullName}</span>
              <button
                onClick={logout}
                className="cursor-pointer bg-red-500/50 rounded py-1 px-3 hover:bg-red-500/70"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/auth/login")}
              className="cursor-pointer bg-white/40 rounded py-1 px-3 hover:bg-white/60"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(prev => !prev)}
            className="p-2 rounded-md hover:bg-white/10 focus:outline-none"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="absolute top-[4.2rem] right-0 w-56 md:hidden animate-slideDown z-9999">
            <div className="bg-[#151A28] border border-[#33394C] rounded-xl shadow-2xl p-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/services");
                }}
                className="text-left hover:text-indigo-400 transition"
              >
                Find a Service
              </button>

              {user.loggedin ? (
                <>
                  <span className="text-gray-300 text-left">
                    {user.data?.fullName}
                  </span>
                  <button
                    onClick={() => {
                      setOpen(false);
                      logout();
                    }}
                    className="text-left bg-red-600/60 rounded py-1 px-3 hover:bg-red-600/80"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setOpen(false);
                    navigate("/auth/login");
                  }}
                  className="text-left bg-white/40 rounded py-1 px-3 hover:bg-white/60"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Overlay (click to close menu) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 md:hidden z-998"
        ></div>
      )}
    </header>
  );
};

export default Navbar;
