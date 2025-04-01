import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Github, ExternalLink, Menu, X, LogOut } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAdmin } from "@/hooks/use-admin";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [session, setSession] = useState(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAdmin } = useAdmin();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
      
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith('#')) {
      const element = document.getElementById(path.substring(1));
      if (element && window.location.pathname === '/') {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        navigate(`/${path}`);
      }
    } else {
      navigate(path);
    }
  };

  const NavItems = () => (
    <>
      <button
        onClick={() => handleNavClick('/')}
        className="text-primary/80 hover:text-primary transition-colors text-sm"
      >
        Home
      </button>
      <button
        onClick={() => handleNavClick('/services')}
        className="text-primary/80 hover:text-primary transition-colors text-sm"
      >
        Services
      </button>
      <button
        onClick={() => handleNavClick('/about')}
        className="text-primary/80 hover:text-primary transition-colors text-sm"
      >
        About
      </button>
      <a
        href="https://brandmatchco.io"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary/80 hover:text-primary transition-colors inline-flex items-center gap-1 text-sm"
      >
        BrandMatchCo
        <ExternalLink className="w-3 h-3" />
      </a>
      <a
        href="https://github.com/mwannca"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary/80 hover:text-primary transition-colors"
      >
        <Github className="w-4 h-4" />
      </a>
      <button
        onClick={() => handleNavClick('contact')}
        className="px-4 py-2 bg-primary text-white text-sm rounded-full hover:bg-primary/90 transition-colors"
      >
        Contact
      </button>
      <button
        onClick={() => handleNavClick('/news')}
        className="text-primary/80 hover:text-primary transition-colors text-sm"
      >
        News
      </button>
      {isAdmin && (
        <>
          <button
            onClick={() => handleNavClick('/news/manage')}
            className="text-primary/80 hover:text-primary transition-colors text-sm"
          >
            Manage News
          </button>
          <button
            onClick={() => handleNavClick('/analytics')}
            className="text-primary/80 hover:text-primary transition-colors text-sm"
          >
            Analytics
          </button>
        </>
      )}
      {!session ? (
        <button
          onClick={() => handleNavClick('/auth')}
          className="text-primary/80 hover:text-primary transition-colors text-sm inline-flex items-center gap-1"
        >
          Login
        </button>
      ) : (
        <button
          onClick={handleLogout}
          className="text-primary/80 hover:text-primary transition-colors text-sm inline-flex items-center gap-1"
        >
          Logout
          <LogOut className="w-4 h-4" />
        </button>
      )}
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-light text-primary hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/7b11fc59-f8d7-4230-8b14-45aac92aef67.png"
              alt="WebStartupSolutions Logo"
              className="h-8 w-auto object-contain brightness-0"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavItems />
          </div>

          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-primary p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          )}
        </div>

        {isMobile && isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <NavItems />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;