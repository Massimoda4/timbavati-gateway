import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stay", href: "#suites" },
  { label: "Experiences", href: "#experiences" },
  { label: "Rates", href: "#rates" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primary shadow-lg"
            : "bg-primary/90"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-display text-lg md:text-xl tracking-mega font-semibold text-primary-foreground">
                MAKANYI
              </span>
              <span className="text-[9px] tracking-safari font-body uppercase text-primary-foreground/60">
                Private Game Lodge
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-safari uppercase font-body font-medium text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-7 py-2.5 text-[11px] tracking-safari uppercase font-body font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
            >
              Book Online
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-primary-foreground"
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 text-primary-foreground"
            >
              <X size={28} />
            </button>
            <div className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-primary-foreground text-sm tracking-safari uppercase font-body font-light hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 bg-accent text-accent-foreground text-xs tracking-safari uppercase font-body font-semibold hover:bg-accent/90 transition-all"
              >
                Book Online
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
