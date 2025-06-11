import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-author-bg-light via-elegant-warm-gray to-elegant-cream py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-author-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-author-text-light leading-relaxed">
            Whether you're a publisher, fellow author, or reader, I'd love to
            hear from you
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-author-primary mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="font-raleway font-medium text-author-primary"
                      >
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        required
                        className="mt-2 border-gray-300 focus:border-author-accent focus:ring-author-accent"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="font-raleway font-medium text-author-primary"
                      >
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        required
                        className="mt-2 border-gray-300 focus:border-author-accent focus:ring-author-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="font-raleway font-medium text-author-primary"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="mt-2 border-gray-300 focus:border-author-accent focus:ring-author-accent"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="subject"
                      className="font-raleway font-medium text-author-primary"
                    >
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      required
                      className="mt-2 border-gray-300 focus:border-author-accent focus:ring-author-accent"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="category"
                      className="font-raleway font-medium text-author-primary"
                    >
                      Category
                    </Label>
                    <select
                      id="category"
                      className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:border-author-accent focus:ring-author-accent focus:outline-none"
                    >
                      <option value="">Select a category</option>
                      <option value="publishing">Publishing Inquiry</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="interview">Interview Request</option>
                      <option value="reader">Reader Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="font-raleway font-medium text-author-primary"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      className="mt-2 border-gray-300 focus:border-author-accent focus:ring-author-accent resize-none"
                      placeholder="Please share your thoughts, questions, or collaboration ideas..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-author-primary hover:bg-author-accent font-raleway uppercase tracking-wider"
                  >
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-author-primary mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-author-accent mt-1" />
                      <div>
                        <h4 className="font-raleway font-semibold text-author-primary mb-1">
                          Email
                        </h4>
                        <p className="text-author-text-light">
                          venugopal@example.com
                        </p>
                        <p className="text-sm text-author-text-light mt-1">
                          For all professional inquiries
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-author-accent mt-1" />
                      <div>
                        <h4 className="font-raleway font-semibold text-author-primary mb-1">
                          Phone
                        </h4>
                        <p className="text-author-text-light">
                          +91 xxx xxx xxxx
                        </p>
                        <p className="text-sm text-author-text-light mt-1">
                          Available weekdays 10 AM - 6 PM IST
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-author-accent mt-1" />
                      <div>
                        <h4 className="font-raleway font-semibold text-author-primary mb-1">
                          Location
                        </h4>
                        <p className="text-author-text-light">Kerala, India</p>
                        <p className="text-sm text-author-text-light mt-1">
                          Available for virtual meetings worldwide
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-author-bg-section">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-author-primary mb-4">
                    Let's Collaborate
                  </h3>

                  <p className="text-author-text-light leading-relaxed mb-6">
                    I'm always interested in new translation projects, literary
                    collaborations, and opportunities to share the beauty of
                    Malayalam literature with global audiences.
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-author-accent rounded-full mr-3"></div>
                      <span className="text-author-primary">
                        Publishing house partnerships
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-author-accent rounded-full mr-3"></div>
                      <span className="text-author-primary">
                        Literary festival invitations
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-author-accent rounded-full mr-3"></div>
                      <span className="text-author-primary">
                        Translation workshops
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-author-accent rounded-full mr-3"></div>
                      <span className="text-author-primary">
                        Media interviews
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
