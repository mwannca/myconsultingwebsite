import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} WebStartupSolutions. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:mwannca@gmail.com"
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
