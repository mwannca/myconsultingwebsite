import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
              About WebStartup Solutions
            </h1>
            <p className="text-primary/60 text-lg mb-8">
              Empowering startups and businesses with cutting-edge web solutions and automation tools
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-light text-primary mb-6">
                We Create Custom Solutions for Businesses Like Yours
              </h2>
              <p className="text-primary/60 mb-6">
                Our team specializes in developing tailored web applications and SaaS tools that streamline your business operations. With quick turnaround times and exceptional attention to detail, we transform your ideas into powerful digital solutions.
              </p>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Book a Free Consultation
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/assets/f7b3c6a2-f0ae-40e6-afbf-91676f6fff44.png"
                alt="Calgary skyline with indigenous teepees in the foreground"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-xl md:order-1"
            >
              <img
                src="/assets/b4ae2845-3f8b-4cac-975b-a1ca66d5a2fc.png"
                alt="Bridge representing our connection with clients"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-light text-primary mb-6">
                High-Value Services That Drive Growth
              </h2>
              <ul className="space-y-4 text-primary/60 mb-6">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Custom SaaS Development: Build scalable, cloud-based solutions tailored to your needs
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Web Application Development: Create responsive, user-friendly applications with modern technologies
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Business Automation: Streamline operations with custom scripts and integrations
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  Technical Consulting: Get expert guidance on technology decisions and implementation
                </li>
              </ul>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Get a Free Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-light text-primary mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary/60 mb-8">
              Let's discuss how we can help you achieve your goals with our custom web development and automation solutions.
            </p>
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6"
            >
              Schedule Your Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
