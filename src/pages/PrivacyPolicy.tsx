import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-24 pb-12"
      >
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy describes how we collect, use, process, and disclose your information,
              including personal information, in conjunction with your access to and use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>We collect several different types of information for various purposes:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Usage Data (Browser type, access time, pages viewed)</li>
              <li>Cookies and Tracking Data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use the collected data for various purposes:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission
              over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:mwannca@gmail.com" className="text-primary hover:underline">
                mwannca@gmail.com
              </a>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;