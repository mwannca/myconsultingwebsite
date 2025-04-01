import { useState, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import HCaptcha from '@hcaptcha/react-hcaptcha';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the captcha verification");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([data]);

      if (error) throw error;

      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
      setCaptchaToken("");
      captchaRef.current?.resetCaptcha();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 mb-4">
            Get in Touch
          </h2>
          <p className="text-primary/60">
            Have a question or want to work together? Drop us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 animate-fade-up">
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

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Your message"
              />
            </div>
            <HCaptcha
              sitekey="782a83e4-74b0-4212-a450-7952123673b6"
              onVerify={(token) => setCaptchaToken(token)}
              ref={captchaRef}
            />
            <Button
              type="submit"
              disabled={isSubmitting || !captchaToken}
              className="w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;