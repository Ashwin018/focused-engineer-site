import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "smashwinkarthik@gmail.com",
      href: "mailto:smashwinkarthik@gmail.com",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7418278466",
      href: "tel:+917418278466",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sholinganallur, Chennai",
      href: "#",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ashwinkarthik",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ashwinkarthik",
      color: "text-foreground",
      bgColor: "bg-muted"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and discussions about 
            AI, data science, and technology. Let's connect and explore how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.label} className="card-elevated">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${info.bgColor}`}>
                          <info.icon className={`h-5 w-5 ${info.color}`} />
                        </div>
                        <div>
                          <p className="font-medium text-card-foreground">{info.label}</p>
                          {info.href === "#" ? (
                            <p className="text-muted-foreground">{info.value}</p>
                          ) : (
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-lg ${social.bgColor} ${social.color} hover:scale-105 transition-transform duration-200`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Professional Note */}
            <Card className="card-elevated bg-gradient-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">
                      Open for Opportunities
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      I'm actively seeking entry-level positions in AI/Data Science, 
                      internship opportunities, and collaborative projects. Feel free to 
                      reach out for networking, mentorship, or exciting opportunities!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;