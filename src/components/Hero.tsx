import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[55vh] flex items-start justify-center bg-white relative overflow-hidden pb-12">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f5f5f5_0%,#ffffff_100%)] opacity-50"></div>
      <div className="container mx-auto px-6 pt-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-left space-y-6">
            <span className="inline-block px-4 py-1.5 bg-secondary text-primary rounded-full text-sm">
              Web Development Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-light leading-tight text-primary">
              WebStartupSolutions: Building Digital Success Stories
            </h1>
            <p className="text-lg text-primary/70 max-w-2xl font-light">
              Transform your business with custom web solutions designed to drive
              growth and enhance user experience. From startups to established
              businesses, we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white text-sm rounded-full hover:bg-primary/90 transition-all duration-300 inline-flex items-center group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="px-6 py-3 bg-white text-primary text-sm rounded-full hover:bg-secondary transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/0f2c5096-7812-4733-92b0-90c56e95ae98.png"
                alt="Professional in business setting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 mt-12">
              <img
                src="/assets/ced6c40f-4296-4a52-86a8-6cfce3e19efc.png"
                alt="Team collaboration meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
