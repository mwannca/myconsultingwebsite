import { Building, Rocket, Computer, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when component mounts
    if (location.hash === '#contact') {
      navigate('/contact');
    }
  }, [location.hash, navigate]);

  const handleContactClick = () => {
    navigate('/contact');
  };

  const services = [
    {
      icon: <Computer className="w-6 h-6 text-primary" />,
      title: "Custom Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies. Fast turnaround times and exceptional quality guaranteed."
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "SaaS Development",
      description: "End-to-end SaaS solution development, from concept to deployment. We help startups and businesses build scalable cloud-based applications."
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary" />,
      title: "Process Automation",
      description: "Streamline your business operations with custom automation solutions. Increase efficiency and reduce manual tasks."
    },
    {
      icon: <Building className="w-6 h-6 text-primary" />,
      title: "Startup Solutions",
      description: "Complete technical solutions for startups. MVP development, scaling strategies, and technical consultation."
    }
  ];

  const testimonials = [
    {
      name: "Russell Reimer",
      company: "Small Victories Inc",
      content: "The team delivered was able to deliver even during the weekend",
      image: "/assets/0f2c5096-7812-4733-92b0-90c56e95ae98.png"
    },
    {
      name: "Holly Fenton",
      company: "manifesto Sports & Entertainment",
      content: "Their automation solutions saved us countless hours of manual work. Highly recommended for any SaaS company.",
      image: "/assets/ced6c40f-4296-4a52-86a8-6cfce3e19efc.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Expert Web Development & SaaS Solutions
              </h1>
              <p className="text-lg text-primary/60 mb-8">
                Transform your business with our fast-turnaround development services. From custom web applications to complete SaaS solutions, we deliver results that drive growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-white" onClick={handleContactClick}>
                  Get a Free Quote
                </Button>
                <Button size="lg" variant="secondary" onClick={() => navigate('/#work')}>
                  View Our Work
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <img
                src="/assets/useme.png"
                alt="Web Development Services"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <p className="text-primary/60">
              Comprehensive development solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-primary/60 mb-6">{service.description}</p>
                <Button variant="secondary">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Client Success Stories
            </h2>
            <p className="text-primary/60">
              See what our clients say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-primary/60">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-primary/80 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-primary text-white rounded-2xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Book a free consultation to discuss your project and see how we can help you achieve your goals with our fast-turnaround development services.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={handleContactClick}
              >
                Book a Free Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <img
                src="/assets/ae3c153a-011a-4619-a5c6-6952c9004631.png"
                alt="Contact Us"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Contact Us For A Free Consultation
              </h2>
              <p className="text-primary/60 mb-8">
                Your business is unique that is why we pledge to create specific solutions designed for your business. Find out how flexible your IT can be.
              </p>
              <Button size="lg">
                Talk To An Expert
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
