import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Feather, BookOpen, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-author-primary via-elegant-charcoal to-author-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iZm9vdGVyLXBhdHRlcm4iIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMSIgZmlsbD0iI0Q0QUYzNyIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZm9vdGVyLXBhdHRlcm4pIi8+Cjwvc3ZnPg==')] opacity-30" />

      {/* Subtle floating elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-author-accent/10 to-elegant-gold/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-elegant-gold/10 to-author-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Feather className="h-10 w-10 text-author-accent" />
                <div className="absolute inset-0 bg-author-accent/20 rounded-full blur-md" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white">
                <span className="bg-gradient-to-r from-white via-elegant-cream to-author-accent bg-clip-text text-transparent">
                  Venugopal Menon
                </span>
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg max-w-md">
              Acclaimed translator and author bridging cultures through the art
              of literary translation. Bringing Malayalam literature to global
              audiences with sensitivity and artistic excellence.
            </p>

            {/* Awards/Stats */}
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-author-accent" />
                <span className="text-sm text-gray-300">
                  15+ Books Translated
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-author-accent" />
                <span className="text-sm text-gray-300">
                  5+ Literary Awards
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Venugopal Menon. All rights
              reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-raleway font-bold uppercase tracking-[0.15em] mb-8 text-author-accent">
              Navigation
            </h4>
            <nav className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/works", label: "Works" },
                { href: "/reviews", label: "Reviews" },
                { href: "/articles", label: "Articles" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-gray-300 hover:text-author-accent transition-all duration-300 text-sm hover:translate-x-1 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-raleway font-bold uppercase tracking-[0.15em] mb-8 text-author-accent">
              Connect
            </h4>
            <div className="space-y-6">
              <div className="group flex items-center space-x-4 hover:translate-x-1 transition-transform duration-300">
                <div className="p-2 bg-author-accent/10 rounded-full group-hover:bg-author-accent/20 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-author-accent" />
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  venugopal@example.com
                </span>
              </div>

              <div className="group flex items-center space-x-4 hover:translate-x-1 transition-transform duration-300">
                <div className="p-2 bg-author-accent/10 rounded-full group-hover:bg-author-accent/20 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-author-accent" />
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  +91 xxx xxx xxxx
                </span>
              </div>

              <div className="group flex items-center space-x-4 hover:translate-x-1 transition-transform duration-300">
                <div className="p-2 bg-author-accent/10 rounded-full group-hover:bg-author-accent/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-author-accent" />
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  Kerala, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 font-raleway text-center md:text-left">
              Literary translations that bridge cultures and connect hearts
              across the world.
            </p>

            <div className="flex items-center space-x-6">
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Made with ❤️ for literature
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
