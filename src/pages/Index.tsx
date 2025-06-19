import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Award,
  Quote,
  ArrowRight,
  Star,
  Feather,
} from "lucide-react";

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
      <section className="py-32 bg-gradient-to-b from-white via-elegant-cream/30 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0ic3F1YXJlcyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRBRjM3IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wOCIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NxdWFyZXMpIi8+Cjwvc3ZnPg==')] opacity-50" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-author-accent/10 border border-author-accent/20 rounded-full px-6 py-2 mb-6">
              <BookOpen className="h-4 w-4 text-author-accent" />
              <span className="text-sm font-raleway uppercase tracking-[0.2em] text-author-accent font-medium">
                Literary Portfolio
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-author-primary mb-8 tracking-tight">
              Featured <span className="text-author-accent">Works</span>
            </h2>
            <p className="text-xl md:text-2xl text-author-text-light max-w-3xl mx-auto leading-relaxed">
              Literary translations that preserve the essence while opening new
              worlds to readers across cultures
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {featuredWorks.map((work, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-white/70 backdrop-blur-sm"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image container with overlay */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-elegant-cream via-elegant-warm-gray to-author-accent/20">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Elegant overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-author-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-author-primary border-0 font-raleway uppercase tracking-wider text-xs shadow-lg">
                      {work.category}
                    </Badge>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-author-accent text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {work.year}
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 relative">
                  <h3 className="text-2xl font-serif font-bold text-author-primary mb-4 leading-tight group-hover:text-author-accent transition-colors duration-300">
                    {work.title}
                  </h3>

                  <p className="text-author-text-light leading-relaxed mb-6 line-clamp-4">
                    {work.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Button
                      asChild
                      variant="ghost"
                      className="group/btn text-author-accent hover:text-author-primary font-raleway uppercase tracking-wider p-0 font-medium"
                    >
                      <Link to="/works">
                        <span>Read More</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>

                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-author-accent fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 border-author-primary/30 text-author-primary hover:text-white px-10 py-4 text-lg font-raleway uppercase tracking-[0.15em] bg-white/50 backdrop-blur-sm hover:border-author-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link to="/works">
                <span className="relative z-10">View All Works</span>
                <div className="absolute inset-0 bg-gradient-to-r from-author-primary to-author-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-author-primary via-author-primary to-elegant-charcoal text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iaGV4YWdvbiIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cG9seWdvbiBwb2ludHM9Ijc1LDEwIDEyNSwzNy41IDEyNSwxMTIuNSA3NSwxNDAgMjUsMTEyLjUgMjUsMzcuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRBRjM3IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjaGV4YWdvbikiLz4KPC9zdmc+')] opacity-30" />

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-author-accent/20 to-elegant-gold/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-elegant-gold/20 to-author-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-author-accent/30 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
              <Award className="h-4 w-4 text-author-accent" />
              <span className="text-sm font-raleway uppercase tracking-[0.2em] text-author-accent font-medium">
                Critical Acclaim
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 tracking-tight">
              What <span className="text-author-accent">Others Say</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Recognition from literary critics, publishers, and fellow authors
              who value authentic cultural translation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group relative border-0 shadow-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <CardContent className="p-10 relative">
                  {/* Large decorative quote */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-author-accent to-elegant-gold rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Quote className="h-8 w-8 text-white" />
                  </div>

                  <div className="pt-8">
                    <p className="text-xl text-white leading-relaxed mb-8 font-serif italic font-light">
                      "{testimonial.quote}"
                    </p>

                    {/* Rating stars */}
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-author-accent fill-current"
                        />
                      ))}
                    </div>

                    <div className="border-t border-white/20 pt-6">
                      <p className="font-raleway font-bold text-white mb-2 text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-300 mb-1 font-medium">
                        {testimonial.position}
                      </p>
                      <p className="text-author-accent font-raleway font-medium uppercase tracking-wider text-sm">
                        {testimonial.institution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 border-white/30 text-white hover:text-author-primary px-10 py-4 text-lg font-raleway uppercase tracking-[0.15em] bg-white/10 backdrop-blur-sm hover:border-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link to="/reviews">
                <span className="relative z-10">Read All Reviews</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-elegant-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Press Coverage */}
      <section className="py-32 bg-gradient-to-b from-white via-elegant-cream/20 to-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJjaXJjbGVzIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIyIiBmaWxsPSIjMUIyNjNCIiBvcGFjaXR5PSIwLjA1Ii8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2lyY2xlcykiLz4KPC9zdmc+')] opacity-40" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-author-primary/5 border border-author-primary/20 rounded-full px-6 py-2 mb-6">
              <Feather className="h-4 w-4 text-author-primary" />
              <span className="text-sm font-raleway uppercase tracking-[0.2em] text-author-primary font-medium">
                Media Coverage
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-author-primary mb-8 tracking-tight">
              In the <span className="text-author-accent">Press</span>
            </h2>
            <p className="text-xl md:text-2xl text-author-text-light max-w-3xl mx-auto leading-relaxed">
              Recent articles and features highlighting literary achievements
              and cultural contributions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {recentArticles.map((article, index) => (
              <Card
                key={index}
                className="group relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-author-accent to-elegant-gold" />

                <CardContent className="p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-author-accent/10 rounded-full">
                      <BookOpen className="h-5 w-5 text-author-accent" />
                    </div>
                    <span className="text-sm font-raleway font-bold text-author-accent uppercase tracking-[0.15em]">
                      {article.publication}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-author-primary mb-4 leading-tight group-hover:text-author-accent transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-author-text-light mb-6 leading-relaxed text-lg">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-author-accent rounded-full" />
                      <span className="text-sm text-author-text-light font-medium">
                        {article.date}
                      </span>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="group/btn text-author-accent hover:text-author-primary font-raleway uppercase tracking-wider p-0 font-medium"
                    >
                      <Link to="/articles">
                        <span>Read Article</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 border-author-primary/30 text-author-primary hover:text-white px-10 py-4 text-lg font-raleway uppercase tracking-[0.15em] bg-white/50 backdrop-blur-sm hover:border-author-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link to="/articles">
                <span className="relative z-10">View All Articles</span>
                <div className="absolute inset-0 bg-gradient-to-r from-author-primary to-author-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-gradient-to-br from-author-primary via-elegant-charcoal to-author-primary text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iZGlhbW9uZCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDYwIDEwIEwgMTEwIDYwIEwgNjAgMTEwIEwgMTAgNjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDRBRjM3IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZGlhbW9uZCkiLz4KPC9zdmc+')] opacity-20" />

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-author-accent/20 to-elegant-gold/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-elegant-gold/20 to-author-accent/30 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-white/5 to-author-accent/10 rounded-full blur-xl animate-pulse delay-500" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-author-accent/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Feather className="h-5 w-5 text-author-accent" />
              <span className="text-sm font-raleway uppercase tracking-[0.2em] text-author-accent font-medium">
                Connect & Collaborate
              </span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 tracking-tight">
            Let's <span className="text-author-accent">Connect</span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Whether you're a publisher, fellow author, or reader interested in
            literary translation, I'd love to hear from you and explore
            opportunities for collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-author-accent to-elegant-gold hover:from-elegant-gold hover:to-author-accent text-author-primary px-12 py-4 text-lg font-raleway uppercase tracking-[0.15em] shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/contact">
                <span className="relative z-10 flex items-center font-bold">
                  Send Email
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-elegant-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-90" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group relative overflow-hidden border-2 border-white/40 text-white hover:text-author-primary px-12 py-4 text-lg font-raleway uppercase tracking-[0.15em] bg-white/10 backdrop-blur-sm hover:border-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link to="/about">
                <span className="relative z-10 font-bold">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-elegant-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-gray-400 text-sm font-raleway uppercase tracking-[0.15em] mb-4">
              Trusted by Publishers Worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white/60 font-serif text-lg">
                Penguin Random House
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full" />
              <div className="text-white/60 font-serif text-lg">
                HarperCollins
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full" />
              <div className="text-white/60 font-serif text-lg">Bloomsbury</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
