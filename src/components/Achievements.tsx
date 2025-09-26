import { Award, FileCheck, Trophy, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Achievements = () => {
  const certifications = [
    {
      title: "Deloitte - Data Analytics Job Simulation Program",
      issuer: "Forage",
      description: "Comprehensive simulation program covering real-world data analytics scenarios and business problem-solving approaches used at Deloitte.",
      icon: Award,
      color: "text-primary",
      bgColor: "bg-primary/10",
      type: "Professional Simulation"
    },
    {
      title: "Essentials of Prompt Engineering",
      issuer: "AWS",
      description: "Advanced certification in prompt engineering techniques for AI systems, covering best practices for effective AI interaction and optimization.",
      icon: FileCheck,
      color: "text-accent",
      bgColor: "bg-accent/10",
      type: "Technical Certification"
    },
    {
      title: "Python For Data Science",
      issuer: "NPTEL",
      description: "Comprehensive certification program covering Python programming fundamentals and advanced applications in data science and analytics.",
      icon: FileCheck,
      color: "text-success",
      bgColor: "bg-success/10",
      type: "Academic Certification"
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon Presentation",
      description: "Successfully presented Facial Recognition System project at Smart India Hackathon, demonstrating practical AI applications in real-world problem-solving.",
      icon: Trophy,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      category: "Competition"
    },
    {
      title: "Institution of Engineers (India) Student Member",
      description: "Active member engaging with industry trends through IEI-hosted webinars and leveraging professional networks for career development.",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
      category: "Professional Membership"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition of academic excellence, professional development, and industry engagement 
            through certifications, competitions, and professional memberships.
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.title} className="card-elevated h-full">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className={`p-3 rounded-lg ${cert.bgColor}`}>
                      <cert.icon className={`h-6 w-6 ${cert.color}`} />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2" variant="outline">
                        {cert.type}
                      </Badge>
                      <CardTitle className="text-lg font-bold leading-tight">
                        {cert.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Notable Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className="card-elevated">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${achievement.bgColor}`}>
                      <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <div>
                      <Badge className="mb-2" variant="outline">
                        {achievement.category}
                      </Badge>
                      <CardTitle className="text-xl font-bold">
                        {achievement.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card className="card-elevated bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground text-center mb-8">
                Professional Development Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Professional Certifications</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">1</div>
                  <div className="text-sm text-muted-foreground">Hackathon Presentation</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-success">1</div>
                  <div className="text-sm text-muted-foreground">Professional Membership</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-destructive">8.21</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;