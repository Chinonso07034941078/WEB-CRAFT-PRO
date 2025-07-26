import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Palette, Zap, Users, Star, ArrowRight, Menu, X, Globe, Smartphone, Search, TrendingUp, MessageCircle, Mail, ChevronLeft } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Bespoke websites built with cutting-edge technology, optimized for performance and user experience.",
      features: ["React & Next.js", "Full-Stack Solutions", "API Integration", "Database Design"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first designs that look stunning and function flawlessly across all devices and screen sizes.",
      features: ["Mobile Optimization", "Cross-Browser Compatible", "Progressive Web Apps", "Touch Interactions"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Performance",
      description: "Lightning-fast websites optimized for search engines to maximize your online visibility and conversions.",
      features: ["Core Web Vitals", "Technical SEO", "Speed Optimization", "Analytics Setup"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Powerful online stores with secure payment processing and inventory management systems.",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Customer Analytics"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Absolutely exceptional work! Our website conversion rate increased by 340% after the redesign. The attention to detail and technical expertise is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Founder, Digital Dynamics",
      content: "Working with this developer was a game-changer. They delivered a complex e-commerce platform ahead of schedule and under budget. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director, GrowthCorp",
      content: "The most professional developer I've worked with. Our new website is not just beautiful—it's a conversion machine that's doubled our lead generation.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5★", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-300/5" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              WebCraft Pro
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'Portfolio', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-400 transition-colors duration-300 font-medium">
                {item}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-yellow-500/20 p-6">
            {['Services', 'Portfolio', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block py-3 hover:text-yellow-400 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  Turn Your Vision
                </span>
                <br />
                <span className="text-white">Into Digital</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Gold
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Stop watching your competitors steal customers with better websites. I build 
                profit-generating digital experiences that make your phone ring, your inbox full, 
                and your bank account happy. Your success story starts here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowContactModal(true)}
                className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                alt="Web Development"
                className="rounded-2xl shadow-2xl shadow-yellow-500/20"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Premium Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions designed to elevate your business and deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2"
              >
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <ChevronRight className="w-4 h-4 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="relative py-20 px-6 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've transformed businesses with innovative web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                title: "E-commerce Platform",
                category: "Full-Stack Development",
                description: "Modern online store with advanced features"
              },
              {
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
                title: "SaaS Dashboard",
                category: "React Application",
                description: "Complex data visualization dashboard"
              },
              {
                image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=600&h=400&fit=crop",
                title: "Corporate Website",
                category: "Brand Identity",
                description: "Premium corporate presence with CMS"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="text-yellow-400 text-sm font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                What Clients Say
              </span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Left Arrow */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-8 lg:p-12 transition-all duration-500">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-yellow-400 mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-yellow-400">{testimonials[activeTestimonial].role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl text-gray-300 leading-relaxed italic">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something extraordinary together. Get your free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Contact Modal */}
        {showContactModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-8 max-w-md w-full relative animate-in fade-in zoom-in duration-300 shadow-2xl shadow-yellow-500/20">
              <button 
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Let's Get Started!</h3>
                <p className="text-gray-300">Choose your preferred way to connect with me</p>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://wa.me/2347034941078?text=Hi! I'm interested in your web development services. Can we discuss my project?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-yellow-500/25"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp Me
                  <span className="ml-2 text-sm opacity-90">07034941078</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a 
                  href="mailto:cokorie158@gmail.com?subject=Web Development Inquiry&body=Hi! I'm interested in your web development services. I'd like to discuss my project requirements."
                  className="w-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              <p className="text-center text-sm text-gray-400 mt-6">
                I typically respond within 30 minutes during business hours
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-yellow-500/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-black" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                  WebCraft Pro
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Crafting premium web experiences that drive results. Your success is our mission.
              </p>
              <div className="text-yellow-400 font-semibold">
                Ready to get started? Let's talk.
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Maintenance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:cokorie158@gmail.com" className="hover:text-yellow-400 transition-colors">
                    cokorie158@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2347034941078" className="hover:text-yellow-400 transition-colors">
                    +234 703 494 1078
                  </a>
                </li>
                <li className="text-yellow-400 font-medium">Available 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-yellow-500/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 WebCraft Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;