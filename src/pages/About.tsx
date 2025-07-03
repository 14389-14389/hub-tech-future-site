import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems",
      icon: "💡"
    },
    {
      title: "Security",
      description: "Security is at the core of everything we do, ensuring your data and systems are protected",
      icon: "🔐"
    },
    {
      title: "Accessibility",
      description: "We believe technology should be accessible to everyone, regardless of technical expertise",
      icon: "🌐"
    },
    {
      title: "Global Mindset",
      description: "Think globally, act locally - we serve clients worldwide with a global perspective",
      icon: "🌍"
    }
  ];

  const team = [
    {
      role: "Leadership Team",
      description: "Experienced tech leaders driving innovation and strategic growth",
      icon: "👥"
    },
    {
      role: "Development Team", 
      description: "Full-stack developers, mobile specialists, and software architects",
      icon: "💻"
    },
    {
      role: "Security Experts",
      description: "Cybersecurity specialists ensuring robust protection for all solutions",
      icon: "🛡️"
    },
    {
      role: "Support Team",
      description: "24/7 technical support and customer success specialists",
      icon: "🎧"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">TechieHub</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A new-age digital tech company born to solve modern IT problems with future-ready solutions
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="bg-gradient-glow border-primary/20 p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                TechieHub exists to democratize technology and make advanced IT solutions accessible to businesses 
                of all sizes. We bridge the gap between complex technical requirements and practical business needs, 
                delivering solutions that are not just functional, but transformational.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">🎯 Our Goal</h3>
                  <p className="text-muted-foreground">
                    To become the universal destination for all IT needs, offering comprehensive solutions 
                    that grow with our clients from startups to enterprise-level organizations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">🚀 Our Vision</h3>
                  <p className="text-muted-foreground">
                    Building the future of technology by creating innovative, secure, and scalable solutions 
                    that empower businesses to thrive in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card 
                key={value.title} 
                className="text-center p-6 hover:shadow-card transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse group of technology enthusiasts, innovators, and problem-solvers 
              dedicated to delivering exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <Card 
                key={member.role} 
                className="p-6 hover:shadow-card transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{member.icon}</div>
                    <CardTitle className="text-xl text-foreground">{member.role}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div className="text-center bg-gradient-dark rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-techiehub-light mb-6">
            Global Presence, Local Expertise
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Based in Nairobi, Kenya, we serve clients worldwide. Our strategic location in East Africa 
            allows us to provide cost-effective solutions while maintaining the highest quality standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl text-primary font-bold mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
            <div>
              <div className="text-2xl text-primary font-bold mb-2">50+</div>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div>
              <div className="text-2xl text-primary font-bold mb-2">15+</div>
              <p className="text-gray-300">Countries Served</p>
            </div>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Partner With Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;