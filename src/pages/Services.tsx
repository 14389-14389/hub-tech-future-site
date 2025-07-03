import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Software Development",
      description: "Full-stack websites, mobile apps, system software",
      icon: "💻",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Networking & IoT",
      description: "Smart networks, sensors, routers, embedded systems",
      icon: "🌐",
      features: ["Network Infrastructure", "IoT Solutions", "Smart Sensors", "Embedded Systems"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud & Databases",
      description: "AWS, Supabase, Firebase, PostgreSQL, MongoDB",
      icon: "☁️",
      features: ["Cloud Migration", "Database Design", "Serverless Architecture", "Data Analytics"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Cybersecurity",
      description: "Pen-testing, threat analysis, firewalls, secure infra",
      icon: "🔒",
      features: ["Security Audits", "Penetration Testing", "Threat Analysis", "Secure Infrastructure"],
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Mobile & AI Tech",
      description: "Chatbots, mobile-first apps, AI integrations",
      icon: "🤖",
      features: ["AI Chatbots", "Machine Learning", "Mobile-First Design", "AI Integration"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "IT Support & Automation",
      description: "Tech support, Zapier/Make automation, remote help",
      icon: "🛠️",
      features: ["24/7 Support", "Process Automation", "Remote Assistance", "System Maintenance"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to meet all your technology needs under one roof
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-card transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                    asChild
                  >
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-glow rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Why Choose TechieHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Future-Ready Solutions</h3>
              <p className="text-muted-foreground text-sm">
                We use cutting-edge technologies to ensure your solutions remain relevant and scalable
              </p>
            </div>
            <div>
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Global Reach</h3>
              <p className="text-muted-foreground text-sm">
                Based in Kenya, serving clients worldwide with 24/7 support and remote capabilities
              </p>
            </div>
            <div>
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">One-Stop Solution</h3>
              <p className="text-muted-foreground text-sm">
                All your IT needs under one roof - from development to support and maintenance
              </p>
            </div>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;