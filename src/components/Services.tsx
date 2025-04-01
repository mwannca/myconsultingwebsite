import { Building, Phone, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: <Building className="w-6 h-6 text-primary" />,
      title: "Managed IT Services",
      description: "Let us be your IT department so you can focus on your core business. We work with you to budget for hardware life cycles and perform routine network maintenance to assist in preventing unplanned downtime and maximize productivity."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "IT Consulting",
      description: "If you are looking for occasional support or project assistance with your IT, we offer hourly IT consulting services."
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "PHoIP - Business Phone Solutions",
      description: "Our PHoIP packages offer enterprise-level features at small business prices. As low as $20 per user per month. A full feature system, with no additional add on fees."
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Website Design",
      description: "Need a new website design, edits or security updates? Contact us today for an assessment or comprehensive proposal."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Calgary's Premier IT Services
              </h1>
              <p className="text-xl text-primary/60 mb-8">
                Empowering Businesses With Cutting-Edge Technology And Expert Support
              </p>
              <p className="text-primary/80 mb-8">
                With our range of IT services and expertise, we are your full-service IT department. Our dedicated team understands the importance of protecting your business from potential risks, ensuring data security, and implementing efficient systems. By entrusting us with your IT needs, you can focus on core business operations while we take care of the rest.
              </p>
              <Button size="lg">
                Talk To An Expert
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <img
                src="/assets/5f898ab8-f0db-495d-a740-22c7a43a8358.png"
                alt="IT Services Team"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Us?
            </h2>
            <p className="text-primary/60">
              Simply put, we're an IT service provider that cares. Our model is to become your IT department. We're your one-stop shop and your full-service IT department, providing technical direction for all aspects of your business. We are customer focused and our goal is to provide exceptional customer service and best in class technology recommendations.
            </p>
          </motion.div>
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
                src="/assets/895b8d6b-e4e6-4269-be1e-41494a219805.png"
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
    </>
  );
};

export default Services;
