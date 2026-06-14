import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "For Families", path: "/for-families" },
  { label: "For Caregivers", path: "/for-caregivers" },
  { label: "Community Impact", path: "/community-impact" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const handleNavClick = (path: string) => {
    setLocation(path);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md border-b border-border" : "border-b border-border/50"
      }`}
    >
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("/")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg px-2 py-1"
          aria-label="ForEvergreen Staffing Solutions - Home"
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-lg">FG</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-primary leading-tight">ForEvergreen</h1>
            <p className="text-xs text-muted-foreground leading-tight">Staffing Solutions</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isActive(item.path)
                  ? "text-primary bg-primary/10 border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
              aria-current={isActive(item.path) ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleNavClick("/apply/caregiver")}
            className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Apply
          </Button>
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => handleNavClick("/apply/family")}
          >
            Request Care
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10 border-l-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-border mt-2 space-y-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavClick("/apply/caregiver")}
                className="w-full"
              >
                Apply
              </Button>
              <Button
                size="sm"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => handleNavClick("/apply/family")}
              >
                Request Care
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
