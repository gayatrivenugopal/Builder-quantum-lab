import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote, Award } from "lucide-react";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-author-bg-light via-elegant-warm-gray to-elegant-cream py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-author-primary mb-6">
            Reviews & Testimonials
          </h1>
          <p className="text-xl text-author-text-light leading-relaxed">
            Critical acclaim and reader testimonials for literary translations
          </p>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-author-bg-section rounded-lg p-12 mb-12">
            <Quote className="h-16 w-16 text-author-accent mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-author-primary mb-6">
              Reviews & Testimonials Collection
            </h2>
            <p className="text-lg text-author-text-light mb-8 leading-relaxed max-w-3xl mx-auto">
              This comprehensive section will feature critical reviews from
              literary magazines, newspaper critics, fellow authors, and
              testimonials from readers. Each work will have its dedicated
              review section with professional criticism and reader feedback.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Star className="h-8 w-8 text-author-accent mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-author-primary mb-2">
                  Critical Reviews
                </h3>
                <p className="text-sm text-author-text-light">
                  Professional literary criticism
                </p>
              </div>
              <div className="text-center">
                <Quote className="h-8 w-8 text-author-accent mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-author-primary mb-2">
                  Reader Testimonials
                </h3>
                <p className="text-sm text-author-text-light">
                  Feedback from satisfied readers
                </p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-author-accent mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-author-primary mb-2">
                  Awards & Recognition
                </h3>
                <p className="text-sm text-author-text-light">
                  Honors and accolades received
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-author-primary hover:bg-author-accent font-raleway uppercase tracking-wider"
              >
                <Link to="/works">
                  View Works <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-author-primary text-author-primary hover:bg-author-primary hover:text-white font-raleway uppercase tracking-wider"
              >
                <Link to="/contact">Submit Your Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
