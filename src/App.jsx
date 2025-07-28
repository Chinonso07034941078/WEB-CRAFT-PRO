import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Code, Phone, Palette, Zap, Users, Star, ArrowRight, Menu, X, Globe, Smartphone, Search, TrendingUp, MessageCircle, Mail, ChevronLeft } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showContactModal, setShowContactModal] = useState(false);
  const [modalHeader, setModalHeader] = useState("Start Your Project");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const backgroundRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    if (backgroundRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      backgroundRef.current.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      const shapes = [];
      
      // Create random shapes
      for (let i = 0; i < 15; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 100 + 50,
          color: `rgba(255, 215, 0, ${Math.random() * 0.05 + 0.01})`,
          type: Math.random() > 0.5 ? 'circle' : 'rect',
          width: Math.random() * 150 + 50,
          height: Math.random() * 150 + 50
        });
      }
      
      const drawShapes = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        shapes.forEach(shape => {
          ctx.fillStyle = shape.color;
          
          if (shape.type === 'circle') {
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
          }
        });
      };
      
      drawShapes();
      
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawShapes();
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
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
      image: "https://media.istockphoto.com/id/1313668225/photo/portrait-of-beautiful-woman-lit-by-neon-colored-lights.webp?a=1&b=1&s=612x612&w=0&k=20&c=k1bJSUUS4gCjLEu4-XRcxj3ktptNbtLxmNlpS5zFHeY="
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
  
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5★", label: "Average Rating" }
  ];
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setFormError(null);
    
    // Get form data
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill in all fields");
      return;
    }
    
    try {
      // Using FormSubmit.co for form handling
      const response = await fetch('https://formsubmit.co/cokorie158@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        e.target.reset();
      } else {
        setFormError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormError("Network error. Please try again.");
    }
  };
  
  const openContactModal = (header) => {
    setModalHeader(header);
    setShowContactModal(true);
  };
  
  const closeContactModal = () => {
    setShowContactModal(false);
    setFormError(null);
    setFormSubmitted(false);
  };
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Interactive Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
        <div ref={backgroundRef} className="absolute inset-0" />
      </div>
      
    {showContactModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
    <div className="relative bg-black border-2 border-yellow-400/50 rounded-3xl p-8 max-w-lg w-full shadow-2xl shadow-yellow-400/20 animate-in fade-in-0 zoom-in-95 duration-300">
      {/* Close Button */}
      <button 
        onClick={closeContactModal}
        className="absolute top-6 right-6 text-yellow-400 hover:text-yellow-300 hover:rotate-90 transition-all duration-300 group"
      >
        <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-4 shadow-lg shadow-yellow-400/30">
          <Phone className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mb-2">
          {modalHeader}
        </h3>
        <p className="text-yellow-400 text-lg">
          Let's discuss your next project
        </p>
      </div>

      {/* Contact Options */}
      <div className="space-y-4">
        {/* WhatsApp Button */}
        <button
          onClick={() => {
            const message = encodeURIComponent("Hi! I'd like to discuss a project with you.");
            window.open(`https://wa.me/23407034941078?text=${message}`, '_blank');
          }}
          className="group w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30 flex items-center justify-between"
        >
          <div className="flex items-center">
            <div className="bg-black/20 p-3 rounded-xl mr-4 group-hover:bg-black/30 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">WhatsApp</div>
              <div className="text-black/70 text-sm">07034941078</div>
            </div>
          </div>
          <div className="text-black/60 group-hover:text-black group-hover:translate-x-1 transition-all">
            →
          </div>
        </button>

        {/* Email Button */}
        <button
          onClick={() => {
            window.open(`mailto:cokorie158@gmail.com?subject=Project Inquiry&body=Hi! I'd like to discuss a project with you.`, '_blank');
          }}
          className="group w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30 flex items-center justify-between"
        >
          <div className="flex items-center">
            <div className="bg-black/20 p-3 rounded-xl mr-4 group-hover:bg-black/30 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">Email</div>
              <div className="text-black/70 text-sm">cokorie158@gmail.com</div>
            </div>
          </div>
          <div className="text-black/60 group-hover:text-black group-hover:translate-x-1 transition-all">
            →
          </div>
        </button>
      </div>

      {/* Footer Message */}
      <div className="mt-8 text-center">
        <p className="text-yellow-400 text-sm leading-relaxed">
          Available for freelance projects and collaborations.<br />
          <span className="text-yellow-300 font-medium">Response within 24 hours</span>
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-yellow-400/40 rounded-tl-lg"></div>
      <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400/40 rounded-tr-lg"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-yellow-400/40 rounded-bl-lg"></div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-yellow-400/40 rounded-br-lg"></div>
    </div>
  </div>
)}
      
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
                onClick={() => openContactModal("Start Your Project")}
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
      <section id="portfolio" className="relative py-20 px-6  bg-black/10">
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
      
      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate web developer dedicated to creating exceptional digital experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop" 
                alt="Developer at work"
                className="rounded-2xl shadow-2xl shadow-yellow-500/20"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl" />
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Crafting Digital Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  With over 8 years of experience in web development, I've helped businesses of all sizes transform their online presence and drive measurable results. My expertise spans across frontend and backend technologies, with a focus on creating fast, secure, and user-friendly websites.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in React-based applications, e-commerce solutions, and custom web platforms that not only look stunning but also perform flawlessly. My approach combines technical expertise with a deep understanding of user experience and business objectives.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-yellow-400">My Expertise</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Frontend Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Palette className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">UI/UX Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">SEO Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Performance Tuning</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <button 
                  onClick={() => openContactModal("View My Resume")}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center"
                >
                  View My Resume
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
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
      
      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 bg-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how I can help you achieve your goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                <p className="text-gray-300">
                  Feel free to reach out through any of the channels below. I typically respond within 24 hours.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <a href="mailto:cokorie158@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                      cokorie158@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
                    <a href="https://wa.me/2347034941078" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                      +234 703 494 1078
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-300">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <button 
                  onClick={() => openContactModal("Get Free Consultation")}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-yellow-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{modalHeader}</h3>
              
              {formSubmitted ? (
                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 text-center">
                  <div className="text-green-400 text-4xl mb-4">✓</div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-300">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      closeContactModal();
                    }}
                    className="mt-4 bg-green-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contactForm" onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  {formError && (
                    <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-3 text-red-400">
                      {formError}
                    </div>
                  )}
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              )}
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
              onClick={() => openContactModal("Get Free Consultation")}
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
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