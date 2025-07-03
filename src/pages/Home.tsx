
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Home = () => {
  const techStack = [
    { name: "AWS", icon: "☁️", url: "https://aws.amazon.com" },
    { name: "Supabase", icon: "⚡", url: "https://supabase.com" },
    { name: "Firebase", icon: "🔥", url: "https://firebase.google.com" },
    { name: "GitHub", icon: "🐙", url: "https://github.com" },
    { name: "React", icon: "⚛️", url: "https://react.dev" },
    { name: "Node.js", icon: "🟢", url: "https://nodejs.org" },
    { name: "PostgreSQL", icon: "🐘", url: "https://postgresql.org" },
    { name: "MongoDB", icon: "🍃", url: "https://mongodb.com" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-techiehub-dark/80"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-techiehub-light mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              TechieHub
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Universal IT Solutions
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Building the Future of Technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-glow"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              TechieHub is a new-age digital technology company born to solve modern IT problems 
              with future-ready solutions. We offer comprehensive IT services under one platform, 
              built to grow from a small company to a globally recognized tech brand.
            </p>
            <Card className="p-8 bg-gradient-glow border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the universal destination for all IT needs, empowering businesses 
                worldwide with innovative, secure, and scalable technology solutions that 
                drive the future of digital transformation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Bar - Tech Stack */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Powered by Industry-Leading Technologies
            </h3>
            <p className="text-muted-foreground">
              We leverage the best tools and platforms to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech) => (
              <a 
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-6 text-center hover:shadow-card transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm cursor-pointer relative overflow-hidden">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <p className="text-sm font-medium text-foreground">{tech.name}</p>
                  <ExternalLink className="absolute top-2 right-2 h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-techiehub-light mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how TechieHub can accelerate your digital journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6"
              >
                Start Your Project
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-techiehub-light text-techiehub-light hover:bg-techiehub-light hover:text-techiehub-dark text-lg px-8 py-6"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
