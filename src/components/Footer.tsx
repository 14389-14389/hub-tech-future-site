import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-techiehub-dark text-techiehub-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-techiehub-light rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">TechieHub</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Universal IT Solutions — Building the Future of Technology. 
              A new-age digital tech company born to solve modern IT problems with future-ready solutions.
            </p>
            <p className="text-sm text-gray-400">
              Based in Nairobi, Kenya — Serving the World
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <a 
              href="https://wa.me/254726894129" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} TechieHub Foundation — Building Africa's Digital Future.
          </p>
          <p className="text-sm text-gray-400">
            Proudly built with 💚 by Kevin Muli.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
