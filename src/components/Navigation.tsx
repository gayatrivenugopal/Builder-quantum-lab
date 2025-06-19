import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Feather } from "lucide-react";

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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 h-16 border-b border-elegant-gold/20"
            : "bg-gradient-to-b from-white via-white/95 to-transparent h-24",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Contact Button - Hidden on mobile */}
            <div className="hidden lg:block">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="group relative overflow-hidden uppercase text-xs font-raleway tracking-[0.2em] border-2 border-author-primary/20 text-author-primary hover:border-author-accent hover:text-white transition-all duration-300"
              >
                <Link to="/contact">
                  <span className="relative z-10">Send Email</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-author-accent to-elegant-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </Button>
            </div>

            {/* Left Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative text-xs font-raleway font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105",
                    location.pathname === link.href
                      ? "text-author-accent"
                      : "text-author-primary hover:text-author-accent",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-author-accent to-elegant-gold transition-all duration-300",
                      location.pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Logo with enhanced styling */}
            <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
              <Link
                to="/"
                className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <Feather className="h-8 w-8 text-author-accent group-hover:text-elegant-gold transition-colors duration-300" />
                  <div className="absolute inset-0 bg-author-accent/20 rounded-full blur-md group-hover:bg-elegant-gold/30 transition-all duration-300" />
                </div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-author-primary tracking-wide">
                  <span className="bg-gradient-to-r from-author-primary via-author-primary to-author-accent bg-clip-text text-transparent">
                    Venugopal Menon
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative text-xs font-raleway font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:scale-105",
                    location.pathname === link.href
                      ? "text-author-accent"
                      : "text-author-primary hover:text-author-accent",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-author-accent to-elegant-gold transition-all duration-300",
                      location.pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-3 rounded-full hover:bg-author-primary/5 transition-colors duration-300"
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
        <div
          className={cn(
            "lg:hidden bg-white/95 backdrop-blur-md border-t border-elegant-gold/20 transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "block text-sm font-raleway font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:translate-x-2",
                  location.pathname === link.href
                    ? "text-author-accent"
                    : "text-author-primary hover:text-author-accent",
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6">
              <Button
                asChild
                size="sm"
                className="w-full group relative overflow-hidden uppercase text-xs font-raleway tracking-[0.2em] bg-author-primary hover:bg-author-accent transition-all duration-300"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="relative z-10">Send Email</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-author-accent to-elegant-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className={isScrolled ? "h-16" : "h-24"} />
    </>
  );
};

export default Navigation;
