import { motion } from "framer-motion";
import { Users, Award, Clock } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary mb-4" />,
      number: "100+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-8 h-8 text-primary mb-4" />,
      number: "50+",
      label: "Projects Completed",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary mb-4" />,
      number: "10+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-light text-primary mb-2"
              >
                {stat.number}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                viewport={{ once: true }}
                className="text-primary/60"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;