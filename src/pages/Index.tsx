import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import WhatWeDo from "../components/WhatWeDo";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <Hero />
      <Statistics />
      <WhatWeDo />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;