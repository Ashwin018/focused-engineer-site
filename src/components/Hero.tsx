import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-up">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Ashwin Karthik S M - AI & Data Science Engineer"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-primary/20 shadow-custom-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-6xl font-bold text-card-foreground mb-4 text-shadow">
            Ashwin Karthik S M
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-medium text-card-foreground/80 mb-6">
            AI & Data Science Engineer
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-card-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate about exploring data, applying AI/ML techniques, and uncovering insights 
            that support decision-making. Building the future through intelligent systems and data-driven solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 text-lg font-medium shadow-custom-md hover:shadow-custom-lg transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-card-foreground/30 text-card-foreground hover:bg-card-foreground/10 px-8 py-3 text-lg"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:smashwinkarthik@gmail.com"
              className="p-3 rounded-full bg-card-foreground/10 hover:bg-card-foreground/20 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-card-foreground" />
            </a>
            <a
              href="https://linkedin.com/in/ashwinkarthik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card-foreground/10 hover:bg-card-foreground/20 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-card-foreground" />
            </a>
            <a
              href="https://github.com/ashwinkarthik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card-foreground/10 hover:bg-card-foreground/20 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-card-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-card-foreground/10 hover:bg-card-foreground/20 transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="h-6 w-6 text-card-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;