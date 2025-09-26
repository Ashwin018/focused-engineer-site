import { ExternalLink, Github, Brain, Car, Mic } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Facial Recognition System",
      description: "Designed and implemented a comprehensive facial recognition system using CNNs for identity verification and emotion detection, demonstrating robust performance on preprocessed datasets.",
      icon: Brain,
      date: "Nov – Dec 2024",
      technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "CNN"],
      highlights: [
        "Optimized TensorFlow-based neural network for real-time face detection",
        "Significantly improved inference speed through architecture optimization",
        "Presented solution at Smart India Hackathon",
        "Implemented emotion detection alongside identity verification"
      ],
      github: "https://github.com/ashwinkarthik/facial-recognition",
      demo: "#",
      category: "AI/ML"
    },
    {
      title: "Automated Vehicle Damage Detection",
      description: "Developed a YOLOv8-based computer vision system to reliably detect and classify various types of vehicle damage, including dents, scratches, and broken glass.",
      icon: Car,
      date: "Mar – Apr 2025",
      technologies: ["Python", "YOLOv8", "Streamlit", "OpenCV", "Computer Vision"],
      highlights: [
        "Built interactive Streamlit web application for insurance claims",
        "Substantially reduced manual inspection time",
        "Applied precise damage localization techniques",
        "Improved overall assessment efficiency"
      ],
      github: "https://github.com/ashwinkarthik/vehicle-damage-detection",
      demo: "#",
      category: "Computer Vision"
    },
    {
      title: "Voice-Based Insurance Claim Assistant – ClaimMate",
      description: "Built a voice-enabled insurance claim assistant using Python, Streamlit, and Vosk ASR to convert speech into highly accurate structured claim text.",
      icon: Mic,
      date: "Jun – Jul 2025",
      technologies: ["Python", "Vosk ASR", "Streamlit", "Audio Processing", "NLP"],
      highlights: [
        "Integrated real-time audio recording and transcription",
        "Seamless voice-based data collection system",
        "Streamlined insurance claim workflows",
        "Enhanced user experience and reduced manual data entry"
      ],
      github: "https://github.com/ashwinkarthik/claimmate",
      demo: "#",
      category: "NLP/Voice"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML":
        return "bg-primary/10 text-primary";
      case "Computer Vision":
        return "bg-accent/10 text-accent";
      case "NLP/Voice":
        return "bg-success/10 text-success";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcase of my academic, personal, and internship projects demonstrating 
            expertise in AI/ML, computer vision, and data science applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="card-elevated h-full flex flex-col group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${getCategoryColor(project.category)} bg-opacity-20`}>
                      <project.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-card-foreground mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/ashwinkarthik" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;