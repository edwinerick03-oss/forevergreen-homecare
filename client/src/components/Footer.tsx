import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowUp, Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "For Families", path: "/for-families" },
  { label: "For Caregivers", path: "/for-caregivers" },
  { label: "Community Impact", path: "/community-impact" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const [, setLocation] = useLocation();

  const handleNavClick = (path: string) => {
    setLocation(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src="/manus-storage/dark_background_logo_d1a924e2.png"
              alt="ForEvergreen Staffing Solutions"
              className="h-24 w-auto mb-4"
            />
            <p className="text-sm text-primary-foreground/80 mb-4">
              Connecting families with caregivers they can trust. Fair wages. Real impact.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/forevergreenstaffing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded px-1 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* For Caregivers */}
          <div>
            <h4 className="font-bold text-lg mb-4">For Caregivers</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick("/for-caregivers")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded px-1 text-sm"
                >
                  Why Join Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/apply/caregiver")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded px-1 text-sm"
                >
                  Apply Now
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/careers")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded px-1 text-sm"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded px-1 text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Call or Text</p>
                  <a
                    href="tel:+12533416755"
                    className="font-semibold hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded px-1"
                  >
                    (253) 341-6755
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Email</p>
                  <a
                    href="mailto:info@forevergreenstaffing.com"
                    className="font-semibold hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded px-1 text-sm break-all"
                  >
                    info@forevergreenstaffing.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Location</p>
                  <p className="font-semibold">Lakewood, WA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-primary-foreground/80 text-center md:text-left">
            <p>© 2026 ForeverGreen Staffing Solutions. All rights reserved.</p>
            <p className="mt-1">Lakewood, Washington | Real care. Real jobs. Real impact.</p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary text-sm font-medium"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-primary-foreground/20 py-4 bg-primary-foreground/5">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-primary-foreground/70">
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Terms of Service
          </a>
          <span>•</span>
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Accessibility
          </a>
          <span>•</span>
          <a href="#" className="hover:text-primary-foreground transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
