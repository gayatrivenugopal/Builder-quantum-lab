import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, Calendar, Eye } from "lucide-react";

const Articles = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-author-bg-light via-elegant-warm-gray to-elegant-cream py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-author-primary mb-6">
            Press & Articles
          </h1>
          <p className="text-xl text-author-text-light leading-relaxed">
            Media coverage and newspaper articles featuring literary
            achievements
          </p>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-author-bg-section rounded-lg p-12 mb-12">
            <Newspaper className="h-16 w-16 text-author-accent mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-author-primary mb-6">
              Press Coverage & Articles
            </h2>
            <p className="text-lg text-author-text-light mb-8 leading-relaxed max-w-3xl mx-auto">
              This section will feature comprehensive press coverage including
              newspaper articles, magazine features, interviews, and media
              appearances. Articles will be organized chronologically with links
              to original publications where available.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Newspaper className="h-8 w-8 text-author-accent mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-author-primary mb-2">
                  Newspaper Features
                </h3>
                <p className="text-sm text-author-text-light">
                  Major newspaper coverage and reviews
                </p>
              </div>
              <div className="text-center">
                <Eye className="h-8 w-8 text-author-accent mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-author-primary mb-2">
                  Interviews
                </h3>
                <p className="text-sm text-author-text-light">
                  In-depth conversations about translation
                </p>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-author-accent mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-author-primary mb-2">
                  Recent Coverage
                </h3>
                <p className="text-sm text-author-text-light">
                  Latest articles and media mentions
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-author-primary hover:bg-author-accent font-raleway uppercase tracking-wider"
              >
                <Link to="/reviews">
                  View Reviews <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-author-primary text-author-primary hover:bg-author-primary hover:text-white font-raleway uppercase tracking-wider"
              >
                <Link to="/contact">Media Inquiries</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
