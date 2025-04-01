import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>

            {/* Visit Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8 bg-secondary/30 p-8 rounded-2xl"
            >
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Call  Us</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="text-primary">Mon – Fri: 8:30 am – 5:00 pm</p>
                      <p className="text-primary/60">Sat: Closed</p>
                      <p className="text-primary/60">Sun: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                  </div>
                  <p className="text-primary/60 italic">For after hours support, please use your dedicated line.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary">Email</h3>
                      <a
                        href="mailto:mwannca@gmail.com"
                        className="text-primary/60 hover:text-primary"
                      >
                        mwannca@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary">Phone</h3>
                      <a
                        href="tel:+17044431578"
                        className="text-primary/60 hover:text-primary"
                      >
                        +1 (704) 443-1578
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src="/assets/ced6c40f-4296-4a52-86a8-6cfce3e19efc.png"
                alt="Our Office"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
