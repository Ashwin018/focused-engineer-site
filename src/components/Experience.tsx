import { MapPin, Calendar, Building, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Zoom In Data",
      location: "Chennai (Remote)",
      duration: "June - July 2025",
      type: "Internship",
      description: "Completed comprehensive AI/ML internship focusing on real-world projects and practical applications of machine learning algorithms.",
      achievements: [
        "Built predictive models using advanced ML algorithms and feature engineering techniques",
        "Gained hands-on experience in data preprocessing and anomaly detection",
        "Implemented ensemble methods to improve model performance",
        "Worked on end-to-end machine learning pipelines"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning", "Data Preprocessing"],
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Data Science Fellow",
      company: "Dataplay",
      location: "Rajasthan (Remote)",
      duration: "March - April 2025",
      type: "Fellowship",
      description: "Intensive data science fellowship program focusing on Python fundamentals and comprehensive data analysis under expert mentorship.",
      achievements: [
        "Mastered Python basics and advanced data manipulation techniques",
        "Conducted comprehensive Exploratory Data Analysis (EDA) on candidate registration data",
        "Identified key patterns and correlations in complex datasets",
        "Created visual reports showcasing insights on demographics, education, and placement trends",
        "Developed expertise in data storytelling and visualization"
      ],
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis", "EDA", "Data Visualization"],
      icon: Building,
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Practical exposure through internships and fellowships, building real-world expertise 
            in AI/ML, data science, and industry best practices.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.title} className="card-elevated">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${exp.bgColor}`}>
                      <exp.icon className={`h-6 w-6 ${exp.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                        {exp.title}
                      </CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                          <Badge variant="outline">{exp.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3">
                    Key Achievements & Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3">
                    Technologies & Tools:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16">
          <Card className="card-elevated bg-gradient-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Building Industry-Ready Skills
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Through these professional experiences, I've developed a strong foundation in AI/ML, 
                data science methodologies, and industry best practices. My hands-on work with real-world 
                datasets and projects has prepared me to contribute effectively to data-driven organizations 
                and tackle complex business challenges with innovative technical solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Months of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Real-world Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;