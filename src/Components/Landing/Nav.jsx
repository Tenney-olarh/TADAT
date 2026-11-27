import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import NavLogs from "../../assets/logsNav.png";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "For Advertisers", to: "/for-ads" },
  { label: "About", to: "/about" },
];

const Nav = ({ onLogin, onSignup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const handleAuth = (handler) => {
    closeMenu();
    handler();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[79px] bg-[#FFFFFF] shadow-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <Link to="/" onClick={closeMenu} className="shrink-0">
          <img
            src={NavLogs}
            alt="TADAT"
            className="h-[50px] w-auto sm:h-[55px] sm:w-[131.21px]"
          />
        </Link>

        <ul className="hidden items-center gap-5 font-medium lg:flex">
          {navLinks.map(({ label, href, to }) => (
            <li key={label}>
              <a
                href={href}
                to={to}
                onClick={closeMenu}
                className="hover:text-[#24A0D5] hover:underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            onClick={onLogin}
            className="h-[38px] w-[93px] cursor-pointer rounded-[8px] font-medium hover:bg-[#1C7CDF] hover:text-[#FFFFFF]"
          >
            Login
          </button>
          <button
            onClick={onSignup}
            className="h-[38px] w-[130px] cursor-pointer rounded-[8px] bg-[#1C7CDF] font-medium text-[#FFFFFF] hover:bg-[#1C7CDF]/80"
          >
            Get Started
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-[8px] text-[#1C7CDF] hover:bg-[#1C7CDF]/10 lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-gray-100 bg-[#FFFFFF] shadow-lg lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-5 py-4 font-medium sm:px-8">
            {navLinks.map(({ label, href, to }) => (
              <li key={label}>
                <a
                  href={href}
                  to={to}
                  onClick={closeMenu}
                  className="block rounded-[8px] px-2 py-2 hover:bg-[#1C7CDF]/10 hover:text-[#24A0D5]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 px-5 pb-5 sm:px-8">
            <button
              onClick={() => handleAuth(onLogin)}
              className="h-[42px] w-full cursor-pointer rounded-[8px] font-medium hover:bg-[#1C7CDF] hover:text-[#FFFFFF]"
            >
              Login
            </button>
            <button
              onClick={() => handleAuth(onSignup)}
              className="h-[42px] w-full cursor-pointer rounded-[8px] bg-[#1C7CDF] font-medium text-[#FFFFFF] hover:bg-[#1C7CDF]/80"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
