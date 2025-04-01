import { motion } from "framer-motion";
import { BriefcaseBusiness, HandshakeIcon, Award } from "lucide-react";

const WhatWeDo = () => {
  const cards = [
    {
      icon: <BriefcaseBusiness className="w-6 h-6 text-primary" />,
      title: "Enterprise Solutions",
      description: "Custom enterprise-grade software solutions tailored to streamline your business operations and drive growth.",
      image: "/assets/0f2c5096-7812-4733-92b0-90c56e95ae98.png"
    },
    {
      icon: <HandshakeIcon className="w-6 h-6 text-primary" />,
      title: "Strategic Consulting",
      description: "Expert guidance and strategic planning to help your business leverage technology for maximum competitive advantage.",
      image: "/assets/ced6c40f-4296-4a52-86a8-6cfce3e19efc.png"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Premium Support",
      description: "24/7 dedicated support and maintenance services ensuring your business systems run smoothly and efficiently.",
      image: "/assets/ae3c153a-011a-4619-a5c6-6952c9004631.png"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-primary rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">
            High-Value Services
          </h2>
          <p className="text-primary/60 max-w-2xl mx-auto">
            Delivering premium technology solutions and strategic consulting to help your business thrive in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
              >
                {card.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="relative h-48 mb-6 overflow-hidden rounded-xl"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>
              <h3 className="text-xl font-light text-primary mb-4">{card.title}</h3>
              <p className="text-primary/60">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
