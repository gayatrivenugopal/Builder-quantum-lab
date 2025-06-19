import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Award, Quote, ArrowRight, Star } from "lucide-react";

const Index = () => {
  const featuredWorks = [
    {
      title: "The Second Marriage of Kunju Namboodiri",
      description:
        "A profound exploration of tradition and modernity in Kerala society, masterfully translated to capture the nuances of cultural transformation.",
      image: "/placeholder.svg",
      year: "2023",
      category: "Translation",
    },
    {
      title: "The Story of a Timepiece",
      description:
        "An intricate narrative that weaves through time, exploring the relationships between memory, history, and human connection.",
      image: "/placeholder.svg",
      year: "2022",
      category: "Translation",
    },
    {
      title: "Echoes of Malayalam Poetry",
      description:
        "A collection of contemporary Malayalam poetry rendered into English while preserving the musical quality of the original verse.",
      image: "/placeholder.svg",
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with sophisticated gradient and texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-elegant-cream via-author-bg-light to-elegant-warm-gray">
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iZ3JhZGllbnQtZG90cyIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiNENEFGMzciIG9wYWNpdHk9IjAuMTUiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkaWVudC1kb3RzKSIvPgo8L3N2Zz4=')] opacity-40" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-author-accent/10 to-elegant-gold/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-elegant-gold/10 to-author-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-author-primary/5 to-author-accent/10 rounded-full blur-xl animate-pulse delay-500" />

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <div className="max-w-5xl mx-auto">
            {/* Elegant badge */}
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-elegant-gold/30 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Feather className="h-4 w-4 text-author-accent" />
              <span className="text-sm font-raleway uppercase tracking-[0.2em] text-author-primary font-medium">
                Literary Translator
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-none">
              <span className="block bg-gradient-to-br from-author-primary via-author-primary to-author-accent bg-clip-text text-transparent">
                Bridging
              </span>
              <span className="block bg-gradient-to-br from-author-accent via-elegant-gold to-author-accent bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500">
                Cultures
              </span>
              <span className="block text-author-primary/70 text-4xl md:text-6xl lg:text-7xl mt-4 font-light">
                Through Translation
              </span>
            </h1>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-author-text-light leading-relaxed font-light">
                Acclaimed translator and author bringing the richness of{" "}
                <span className="text-author-accent font-medium">
                  Malayalam literature
                </span>{" "}
                to global audiences with sensitivity and artistic excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-author-primary to-author-accent hover:from-author-accent hover:to-elegant-gold text-white px-10 py-4 text-lg font-raleway uppercase tracking-[0.15em] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/works">
                  <span className="relative z-10 flex items-center">
                    Explore Works
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-elegant-gold to-author-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group relative overflow-hidden border-2 border-author-primary/30 text-author-primary hover:text-white px-10 py-4 text-lg font-raleway uppercase tracking-[0.15em] bg-white/50 backdrop-blur-sm hover:border-author-accent transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/contact">
                  <span className="relative z-10">Send Email</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-author-primary to-author-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-author-primary/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-author-primary/40 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
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
