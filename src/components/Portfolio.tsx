import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 bg-secondary text-primary rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-primary/60">
            Check out some of our recent work and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Desktop Mockup - BrandMatchCo */}
          <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-up hover:border-primary/20">
            <div className="relative mx-auto w-full bg-gray-900 rounded-lg p-4">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t-lg flex items-center gap-1.5 px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="h-[320px] mt-2 rounded-md overflow-hidden bg-white">
                <img
                  src="/assets/1237a08b-8d60-4f31-a142-5f3219a0a444.png"
                  alt="BrandMatchCo Platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-light text-primary mb-2">BrandMatchCo Web Platform</h3>
              <p className="text-primary/60 mb-4">
                A powerful platform connecting brands with content creators, featuring an intuitive desktop interface.
              </p>
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 border-primary/20 text-primary hover:bg-secondary"
                onClick={() => window.open("https://brandmatchco.io", "_blank")}
              >
                Visit Site <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* iPhone Mockup - BrandMatchCo Mobile */}
          <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-up hover:border-primary/20" style={{ animationDelay: "100ms" }}>
            <div className="relative mx-auto w-[280px] bg-black rounded-[3rem] p-3">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl"></div>
              <div className="h-[560px] rounded-[2.5rem] overflow-hidden bg-white">
                <div className="w-full h-full flex items-center justify-center bg-white">
                  <img
                    src="/assets/5c58ebc6-40a6-4618-98b2-fcabae410844.png"
                    alt="BrandMatchCo Mobile App"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-light text-primary mb-2">BrandMatchCo Mobile Experience</h3>
              <p className="text-primary/60 mb-4">
                A seamless mobile interface for creators to manage their content and engage with brands on the go.
              </p>
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 border-primary/20 text-primary hover:bg-secondary"
                onClick={() => window.open("https://brandmatchco.io", "_blank")}
              >
                Open App <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Desktop Mockup - MailSpark */}
          <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-up hover:border-primary/20" style={{ animationDelay: "200ms" }}>
            <div className="relative mx-auto w-full bg-gray-900 rounded-lg p-4">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t-lg flex items-center gap-1.5 px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="h-[320px] mt-2 rounded-md overflow-hidden bg-white">
                <img
                  src="/assets/db104992-ca95-47d5-a717-53f295ad2035.png"
                  alt="MailSpark Platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-light text-primary mb-2">MailSpark.io</h3>
              <p className="text-primary/60 mb-4">
                An innovative email marketing platform designed for modern businesses, featuring AI-powered campaign optimization.
              </p>
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 border-primary/20 text-primary hover:bg-secondary"
                onClick={() => window.open("https://mailspark.io", "_blank")}
              >
                Visit Site <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
