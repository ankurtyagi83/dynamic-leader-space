
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-brand-navy text-white py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 reveal-animation">Get In Touch</h2>
          <div className="w-20 h-1 bg-white/40 mx-auto reveal-animation"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="mailto:Ankurtyagi007@gmail.com" 
              className="glass-card p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl flex items-start transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Mail className="text-brand-blue mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-white/80 break-all">Ankurtyagi007@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+14377791796" 
              className="glass-card p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl flex items-start transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Phone className="text-brand-blue mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-white/80">437-779-1796</p>
              </div>
            </a>
            
            <div className="glass-card p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl flex items-start transition-all hover:-translate-y-1 hover:shadow-lg md:col-span-2">
              <MapPin className="text-brand-blue mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-white/80">Toronto, ON, Canada</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-medium mb-6">Connect with me</h3>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/ankurtyagi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:Ankurtyagi007@gmail.com" 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+14377791796" 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
