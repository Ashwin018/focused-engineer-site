import { GraduationCap, Target, BookOpen } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dedicated B.Tech student with practical exposure through internships and projects,
            passionate about AI, machine learning, and data science innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Summary */}
          <div className="space-y-6 animate-slide-in">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a B.Tech student in Artificial Intelligence and Data Science with a decent 
                academic background and practical exposure through internships and projects. 
                I am passionate about exploring data, applying AI/ML techniques, and uncovering 
                insights that support decision-making.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Career Goals
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                I aim to begin my career in the technology sector while continuing to build 
                expertise in the broader field of AI and Data Science. My goal is to contribute 
                to innovative solutions that make a meaningful impact on business and society.
              </p>
            </div>
          </div>

          {/* Right Column - Education & Highlights */}
          <div className="space-y-6 animate-fade-up">
            {/* Education Card */}
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">
                      Education
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-card-foreground">
                          B.Tech Artificial Intelligence and Data Science
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          St.Joseph's Institute of Technology, Chennai
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Nov 2022 - Present • CGPA: 8.21
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-card-foreground">
                          Higher Secondary Certification
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          SRV Boys Higher Secondary School, Namakkal
                        </p>
                        <p className="text-sm text-muted-foreground">
                          2021-2022 • 93%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages Card */}
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">
                      Languages
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-card-foreground">Tamil</span>
                        <span className="text-sm text-muted-foreground">Native</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-card-foreground">English</span>
                        <span className="text-sm text-muted-foreground">Professional</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Affiliation Card */}
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-success/10 rounded-lg">
                    <Target className="h-6 w-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-card-foreground mb-2">
                      Professional Affiliation
                    </h4>
                    <div>
                      <h5 className="font-medium text-card-foreground">
                        The Institution of Engineers (India) - Student Member
                      </h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Actively engaged with industry trends through IEI-hosted webinars on AI and Data Science.
                        Leveraging membership to connect with industry mentors and explore career opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;