import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, Mail, MessageSquare, MapPin, Code, Database, Globe, Smartphone, BookOpen, Users, Star, Calendar, Clock, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Home = () => {
  const projects = [
    {
      name: "SmartPOS System",
      description: "Complete point-of-sale system with inventory management, sales tracking, and real-time analytics for small businesses.",
      techStack: ["React", "Supabase", "TypeScript", "Tailwind"],
      category: "POS System",
      github: "https://github.com/kevinmuli",
      live: "https://smartpos-demo.vercel.app",
      featured: true
    },
    {
      name: "Campus Delivery Hub",
      description: "University delivery app connecting students with local vendors, featuring real-time tracking and payment integration.",
      techStack: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
      category: "Delivery App",
      github: "https://github.com/kevinmuli",
      live: "https://delivery-hub.app",
      featured: true
    },
    {
      name: "University Management System",
      description: "Comprehensive academic management platform for student records, course management, and administrative tasks.",
      techStack: ["React", "PostgreSQL", "Express", "Prisma"],
      category: "University System",
      github: "https://github.com/kevinmuli",
      featured: true
    },
    {
      name: "TechieHub Community Platform",
      description: "Professional networking platform for African tech talent with job listings and mentorship features.",
      techStack: ["Next.js", "Supabase", "Stripe", "Tailwind"],
      category: "Community Platform",
      github: "https://github.com/kevinmuli",
      live: "https://techiehub.africa",
      featured: false
    }
  ];

  const skills = [
    { name: "React & Next.js", icon: "⚛️", level: "Advanced" },
    { name: "Supabase", icon: "⚡", level: "Advanced" },
    { name: "Firebase", icon: "🔥", level: "Intermediate" },
    { name: "PostgreSQL", icon: "🐘", level: "Advanced" },
    { name: "TypeScript", icon: "🔷", level: "Intermediate" },
    { name: "Node.js", icon: "🟢", level: "Advanced" },
    { name: "Python", icon: "🐍", level: "Intermediate" },
    { name: "Mobile Dev", icon: "📱", level: "Intermediate" }
  ];

  const trainingServices = [
    {
      title: "Web Development",
      icon: "👨‍💻",
      description: "Learn React, HTML, CSS, JavaScript, and modern frameworks to build professional websites.",
      topics: ["React Fundamentals", "JavaScript ES6+", "Responsive Design", "API Integration"]
    },
    {
      title: "Graphic Design",
      icon: "🎨",
      description: "Master Adobe Illustrator, Canva, Figma, and design principles for visual communication.",
      topics: ["Adobe Creative Suite", "UI/UX Design", "Brand Identity", "Digital Illustration"]
    },
    {
      title: "Networking & Systems",
      icon: "🌐",
      description: "Understand computer networks, system administration, and IT infrastructure management.",
      topics: ["Network Fundamentals", "System Administration", "Cybersecurity Basics", "Server Management"]
    },
    {
      title: "Digital Skills",
      icon: "🔧",
      description: "Essential tech skills including digital literacy, productivity tools, and online presence.",
      topics: ["Digital Literacy", "Microsoft Office", "Social Media Management", "Online Business"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Frontend Developer",
      content: "Kevin's React course transformed my career. His teaching style is clear and practical, and now I'm working as a frontend developer!",
      avatar: "SW"
    },
    {
      name: "James Ochieng",
      role: "Graphic Designer",
      content: "The graphic design training at TechieHub gave me the skills to start my own design agency. Kevin is an exceptional mentor.",
      avatar: "JO"
    },
    {
      name: "Mary Njeri",
      role: "IT Student",
      content: "Kevin's networking classes helped me understand complex concepts easily. His passion for teaching really shows.",
      avatar: "MN"
    }
  ];

  const blogPosts = [
    {
      title: "How I Teach Tech from Kenya to the World",
      excerpt: "Discover my journey of building TechieHub and empowering African tech talent through online education.",
      date: "January 15, 2025",
      readTime: "5 min read"
    },
    {
      title: "5 Tools I Use to Teach Students Remotely",
      excerpt: "Essential tools and platforms that have revolutionized my online teaching methodology and student engagement.",
      date: "January 10, 2025",
      readTime: "3 min read"
    },
    {
      title: "Building Scalable Web Apps with Supabase",
      excerpt: "A comprehensive guide to using Supabase for building modern, scalable web applications with real-time features.",
      date: "January 5, 2025",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-techiehub-dark/90 via-techiehub-dark/80 to-techiehub-primary/20"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-techiehub-light mb-6 leading-tight">
              Empowering <span className="bg-gradient-hero bg-clip-text text-transparent">African Tech Talent</span> from the Ground Up
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              I'm Kevin, developer & founder of TechieHub
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Building real-world tech systems and community from Kenya, with global ambitions to transform how we think about African innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-glow rounded-2xl"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-techiehub-light text-techiehub-light hover:bg-techiehub-light hover:text-techiehub-dark text-lg px-8 py-6 rounded-2xl"
                onClick={() => document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join My Classes
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-2xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-techiehub-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-techiehub-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-background" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Kevin</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a final year Computer Science student at <strong>Murang'a University of Technology</strong>, 
                  passionate about building impactful software that solves real-world problems.
                </p>
                <p>
                  As the founder of <strong>TechieHub</strong>, I'm on a mission to elevate African tech talent 
                  and create opportunities for developers across the continent. I also teach coding, graphic design, 
                  networking, and other digital skills to students and professionals.
                </p>
                <p>
                  My experience spans full-stack development, database design, and building scalable applications 
                  using modern technologies like <strong>React, Supabase, Firebase, and PostgreSQL</strong>, 
                  with a focus on creating user-centered solutions that drive business growth.
                </p>
                <div className="flex items-center space-x-2 text-techiehub-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Nairobi, Kenya 🇰🇪</span>
                </div>
              </div>
              
              {/* Skills Grid */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex flex-col space-y-2 p-4 bg-card rounded-xl hover:shadow-card transition-all duration-300 border border-techiehub-primary/10"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full self-start ${
                        skill.level === 'Advanced' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <Avatar className="w-80 h-80 border-4 border-techiehub-primary shadow-2xl">
                  <AvatarImage src="/lovable-uploads/e478604e-c1e6-49ff-addf-e42fb0b5256b.png" alt="Kevin Muli" />
                  <AvatarFallback className="text-6xl font-bold bg-gradient-primary text-white">KM</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-4 -right-4 bg-techiehub-primary text-white p-4 rounded-2xl shadow-xl">
                  <Code className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">My Mission</h2>
          <Card className="bg-gradient-glow border-techiehub-primary/20 p-8 rounded-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              To bridge the gap between African tech talent and global opportunities by building 
              innovative platforms, fostering community growth, and proving that world-class 
              software solutions can emerge from anywhere—starting right here in Kenya.
            </p>
          </Card>
        </div>
      </section>

      {/* TechieHub Training Section */}
      <section className="py-20 bg-background" id="training">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What I <span className="bg-gradient-primary bg-clip-text text-transparent">Teach</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Empowering the next generation of African tech talent through hands-on training in cutting-edge technologies and digital skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {trainingServices.map((service) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm rounded-2xl border border-techiehub-primary/10"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-foreground group-hover:text-techiehub-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Topics:</h4>
                    <ul className="space-y-1">
                      {service.topics.map((topic) => (
                        <li key={topic} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-techiehub-primary rounded-full mr-2"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-glow rounded-2xl"
              asChild
            >
              <a href="https://wa.me/254726894129?text=Hi Kevin! I'm interested in joining your tech training classes. Can you tell me more?" target="_blank" rel="noopener noreferrer">
                Join TechieHub Training
                <Users className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/30" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world applications built with modern technologies, solving actual problems for businesses and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).map((project) => (
              <Card 
                key={project.name} 
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm rounded-2xl border border-techiehub-primary/10"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-techiehub-primary/10 transition-colors"
                      >
                        <Github className="h-4 w-4 text-muted-foreground hover:text-techiehub-primary" />
                      </a>
                      {project.live && (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-techiehub-primary/10 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-techiehub-primary" />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-techiehub-primary transition-colors">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-techiehub-primary/30 text-techiehub-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-techiehub-primary text-techiehub-primary hover:bg-techiehub-primary hover:text-white rounded-2xl"
              asChild
            >
              <a href="https://github.com/kevinmuli" target="_blank" rel="noopener noreferrer">
                View More on GitHub
                <Github className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What My <span className="bg-gradient-primary bg-clip-text text-transparent">Students Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from students and clients who have transformed their careers through TechieHub training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.name} 
                className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-techiehub-primary/10"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts on technology, education, and building the future of African tech talent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.title} 
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm rounded-2xl border border-techiehub-primary/10"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-techiehub-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-techiehub-primary hover:text-techiehub-primary/80"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-techiehub-primary text-techiehub-primary hover:bg-techiehub-primary hover:text-white rounded-2xl"
            >
              View All Posts
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-dark rounded-t-3xl" id="contact">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-techiehub-light mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you're looking to collaborate on a project, need development services, 
            or just want to connect with the TechieHub community—I'd love to hear from you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <a 
              href="https://wa.me/254726894129?text=Hi Kevin! I'd love to discuss a project with you."
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-6 bg-techiehub-light/10 border-techiehub-light/20 hover:bg-techiehub-light/20 transition-all duration-300 rounded-2xl">
                <MessageSquare className="h-8 w-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-techiehub-light mb-1">WhatsApp</h3>
                <p className="text-gray-300 text-sm">+254 726 894 129</p>
              </Card>
            </a>
            
            <a 
              href="mailto:kevin@techiehub.africa"
              className="group"
            >
              <Card className="p-6 bg-techiehub-light/10 border-techiehub-light/20 hover:bg-techiehub-light/20 transition-all duration-300 rounded-2xl">
                <Mail className="h-8 w-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-techiehub-light mb-1">Email</h3>
                <p className="text-gray-300 text-sm">kevin@techiehub.africa</p>
              </Card>
            </a>
            
            <a 
              href="https://github.com/kevinmuli"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-6 bg-techiehub-light/10 border-techiehub-light/20 hover:bg-techiehub-light/20 transition-all duration-300 rounded-2xl">
                <Github className="h-8 w-8 text-gray-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-techiehub-light mb-1">GitHub</h3>
                <p className="text-gray-300 text-sm">@kevinmuli</p>
              </Card>
            </a>
            
            <a 
              href="https://linkedin.com/in/kevin-muli"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-6 bg-techiehub-light/10 border-techiehub-light/20 hover:bg-techiehub-light/20 transition-all duration-300 rounded-2xl">
                <Globe className="h-8 w-8 text-blue-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-techiehub-light mb-1">LinkedIn</h3>
                <p className="text-gray-300 text-sm">kevin-muli</p>
              </Card>
            </a>
            
            <a 
              href="https://tiktok.com/@kevinmuli"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-6 bg-techiehub-light/10 border-techiehub-light/20 hover:bg-techiehub-light/20 transition-all duration-300 rounded-2xl">
                <TrendingUp className="h-8 w-8 text-pink-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-techiehub-light mb-1">TikTok</h3>
                <p className="text-gray-300 text-sm">@kevinmuli</p>
              </Card>
            </a>
          </div>
          
          <div className="bg-techiehub-light/5 rounded-2xl p-8 border border-techiehub-light/10">
            <h3 className="text-xl font-semibold text-techiehub-light mb-4">Quick Connect</h3>
            <p className="text-gray-300 mb-6">
              Send me a message on WhatsApp for the fastest response, or email me for detailed project discussions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 rounded-2xl"
                asChild
              >
                <a href="https://wa.me/254726894129?text=Hi Kevin! I'd love to discuss a project with you." target="_blank" rel="noopener noreferrer">
                  Start WhatsApp Chat
                  <MessageSquare className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-techiehub-light text-techiehub-light hover:bg-techiehub-light hover:text-techiehub-dark rounded-2xl"
                asChild
              >
                <a href="mailto:kevin@techiehub.africa">
                  Send Email
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;