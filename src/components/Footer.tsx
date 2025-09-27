import { Mail, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:smashwinkarthik@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ashwinkarthik05",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Ashwin018",
      label: "GitHub"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity duration-200"
            >
              Ashwin Karthik S M
            </button>
            <p className="text-muted-foreground">
              AI & Data Science Engineer passionate about building intelligent systems 
              and data-driven solutions for the future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-card-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-card-foreground">
              Get In Touch
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📍 Sholinganallur, Chennai</p>
              <p>
                📧{" "}
                <a
                  href="mailto:smashwinkarthik@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  smashwinkarthik@gmail.com
                </a>
              </p>
              <p>
                📱{" "}
                <a
                  href="tel:+917418278466"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +91-7418278466
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ashwin Karthik S M. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
              Made with{" "}
              <Heart className="h-4 w-4 text-destructive mx-1" fill="currentColor" />{" "}
              for innovation and growth
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;