import { useState, useEffect } from "react";
import { Code, Wrench, Users, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
      ]
    },
    {
      title: "Technical Skills",
      icon: Brain,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Artificial Intelligence", level: 80 },
        { name: "Data Visualization", level: 88 },
        { name: "Data Preprocessing", level: 90 },
        { name: "Feature Engineering", level: 82 },
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      color: "text-success",
      bgColor: "bg-success/10",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Power BI", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "OpenCV", level: 82 },
        { name: "Streamlit", level: 85 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      skills: [
        { name: "Communication", level: 88 },
        { name: "Teamwork", level: 90 },
        { name: "Problem-Solving", level: 92 },
        { name: "Leadership", level: 85 },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise, programming languages,
            frameworks, and professional skills developed through education and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <span className="text-xl font-semibold">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-card-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={isVisible ? skill.level : 0}
                      className="h-2 progress-bar"
                      style={{
                        transition: `all 1s ease-out ${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Design & Development Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {["Figma", "Canva", "Jupyter Notebook", "Google Colab", "Anaconda", "Git", "Linux", "Docker"].map((tool) => (
                  <div key={tool} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200">
                    <span className="font-medium text-card-foreground">{tool}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;