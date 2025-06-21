import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import classicStories from './images/classic-malayalam-stories.jpg';
import { BookOpen, Award, Quote, ArrowRight, Star } from "lucide-react";

const Index = () => {
  const featuredWorks = [
    {
      title: "The Second Marriage of Kunju Namboodiri & Other Classic Malayalam Stories",
      description:
        "A profound exploration of tradition and modernity in Kerala society, masterfully translated to capture the nuances of cultural transformation.",
      image: classicStories,
      year: "2025",
      category: "Translation",
    },
    {
      title: "The Story of the Timepiece",
      description:
        "An intricate narrative that weaves through time, exploring the relationships between memory, history, and human connection.",
      image: "/images/the-story-of-the-timepiece.jpg",
      year: "2019",
      category: "Translation",
    },
    {
      title: "Gandhi Alive",
      description:
        "A collection of memoirs based on interviews with Venkataram Kalyanam, a secretary of Mahatma Gandhi, focusing on the final years of Gandhi's life.",
      image: "/images/gandhi-alive.jpg",
      year: "2023",
      category: "Poetry Translation",
    },
  ];

  const testimonials = [
    {
      quote:
        "Venugopal Menon's translations are a masterclass in preserving the soul of the original while making it accessible to English readers.",
      author: "Dr. Priya Nair",
      position: "Professor of Comparative Literature",
      institution: "University of Kerala",
    },
    {
      quote:
        "His work bridges cultures with an elegance that speaks to the universality of human experience.",
      author: "Rajesh Krishnan",
      position: "Literary Critic",
      institution: "The Hindu Literary Review",
    },
    {
      quote:
        "A translator of exceptional skill who brings Malayalam literature to life for global audiences.",
      author: "Sarah Williams",
      position: "Senior Editor",
      institution: "Penguin Random House India",
    },
  ];

  const recentArticles = [
    {
      title:
        "Award-Winning Translation Brings Malayalam Classic to International Attention",
      publication: "The Literary Gazette",
      date: "December 2023",
      excerpt:
        "Menon's latest work receives critical acclaim for its sensitive handling of cultural nuances...",
    },
    {
      title:
        "The Art of Literary Translation: An Interview with Venugopal Menon",
      publication: "Words & Worlds Magazine",
      date: "November 2023",
      excerpt:
        "In conversation about the challenges and rewards of bringing Malayalam literature to English readers...",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-author-bg-light via-elegant-warm-gray to-elegant-cream min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPC9zdmc+')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-author-primary mb-6 leading-tight">
              Bridging Cultures
              <span className="block text-author-accent">
                through Translation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-author-text-light mb-8 leading-relaxed max-w-3xl mx-auto">
              Renowned translator and writer bringing the richness of Malayalam
              literature to global audiences with sensitivity and artistic
              excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-author-primary hover:bg-author-accent text-white px-8 py-3 text-lg font-raleway uppercase tracking-wider"
              >
                <Link to="/works">
                  Explore Works <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-author-primary text-author-primary hover:bg-author-primary hover:text-white px-8 py-3 text-lg font-raleway uppercase tracking-wider"
              >
                <Link to="/contact">Send Email</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
	  {featuredWorks.map((work, index) => {
  console.log("work.image", work.image);  // <-- Add this

  return (
    <Card key={index}>
      {/* ... */}
    </Card>
  );
})}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-author-primary mb-6 uppercase tracking-wider">
              Featured Works
            </h2>
            <p className="text-xl text-author-text-light max-w-2xl mx-auto">
              Literary translations that preserve the essence while opening new
              worlds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-elegant-cream to-elegant-warm-gray rounded-t-lg overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-author-accent/10 text-author-accent border-author-accent/20"
                    >
                      {work.category}
                    </Badge>
                    <span className="text-sm text-author-text-light">
                      {work.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-author-primary mb-3 line-clamp-2">
                    {work.title}
                  </h3>

                  <p className="text-author-text-light leading-relaxed mb-4 line-clamp-3">
                    {work.description}
                  </p>

                  <Button
                    asChild
                    variant="ghost"
                    className="text-author-accent hover:text-author-primary font-raleway uppercase tracking-wider p-0"
                  >
                    <Link to="/works">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-author-primary text-author-primary hover:bg-author-primary hover:text-white font-raleway uppercase tracking-wider"
            >
              <Link to="/works">View All Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-author-bg-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-author-primary mb-6 uppercase tracking-wider">
              What Others Say
            </h2>
            <p className="text-xl text-author-text-light max-w-2xl mx-auto">
              Recognition from literary critics, publishers, and fellow authors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md bg-white">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-author-accent mb-6" />

                  <p className="text-lg text-author-primary leading-relaxed mb-6 font-serif italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="border-t pt-6">
                    <p className="font-raleway font-semibold text-author-primary mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-author-text-light">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-author-accent font-medium">
                      {testimonial.institution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-author-primary text-author-primary hover:bg-author-primary hover:text-white font-raleway uppercase tracking-wider"
            >
              <Link to="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Press Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-author-primary mb-6 uppercase tracking-wider">
              In the Press
            </h2>
            <p className="text-xl text-author-text-light max-w-2xl mx-auto">
              Recent articles and features highlighting literary achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recentArticles.map((article, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-author-accent" />
                    <span className="text-sm font-raleway font-medium text-author-accent uppercase tracking-wider">
                      {article.publication}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-author-primary mb-3 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-author-text-light mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-author-text-light">
                      {article.date}
                    </span>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-author-accent hover:text-author-primary font-raleway uppercase tracking-wider p-0"
                    >
                      <Link to="/articles">
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-author-primary text-author-primary hover:bg-author-primary hover:text-white font-raleway uppercase tracking-wider"
            >
              <Link to="/articles">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-author-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's Connect
          </h2>

          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Whether you're a publisher, fellow author, or reader interested in
            literary translation, I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-author-accent hover:bg-elegant-gold text-author-primary px-8 py-3 text-lg font-raleway uppercase tracking-wider"
            >
              <Link to="/contact">
                Send Email <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-author-primary px-8 py-3 text-lg font-raleway uppercase tracking-wider"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
