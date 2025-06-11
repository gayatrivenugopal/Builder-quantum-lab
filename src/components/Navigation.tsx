import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/works", label: "Works" },
    { href: "/reviews", label: "Reviews" },
    { href: "/articles", label: "Articles" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md h-16"
            : "bg-white h-20",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Contact Button - Hidden on mobile */}
            <div className="hidden lg:block">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="uppercase text-xs font-raleway tracking-widest border-author-primary text-author-primary hover:bg-author-primary hover:text-white"
              >
                <Link to="/contact">Send Email</Link>
              </Button>
            </div>

            {/* Left Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-xs font-raleway font-medium uppercase tracking-widest transition-colors",
                    location.pathname === link.href
                      ? "text-author-accent"
                      : "text-author-primary hover:text-author-accent",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
              <Link
                to="/"
                className="text-2xl md:text-3xl font-serif font-bold text-author-primary tracking-wide"
              >
                Venugopal Menon
              </Link>
            </div>

            {/* Right Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-xs font-raleway font-medium uppercase tracking-widest transition-colors",
                    location.pathname === link.href
                      ? "text-author-accent"
                      : "text-author-primary hover:text-author-accent",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-author-primary" />
              ) : (
                <Menu className="h-6 w-6 text-author-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "block text-sm font-raleway font-medium uppercase tracking-widest transition-colors",
                    location.pathname === link.href
                      ? "text-author-accent"
                      : "text-author-primary hover:text-author-accent",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  size="sm"
                  className="w-full uppercase text-xs font-raleway tracking-widest bg-author-primary hover:bg-author-accent"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Send Email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className={isScrolled ? "h-16" : "h-20"} />
    </>
  );
};

export default Navigation;
