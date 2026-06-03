import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLocation } from "wouter";

export default function Contact() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setLocation("/")}>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">FG</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">ForeverGreen</h1>
              <p className="text-xs text-muted-foreground">Staffing Solutions</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="/for-caregivers" className="text-sm font-medium hover:text-primary transition-colors">For Caregivers</a>
            <a href="/for-families" className="text-sm font-medium hover:text-primary transition-colors">For Families</a>
            <a href="/contact" className="text-sm font-medium text-primary">Contact</a>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Log In</Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90">Sign Up</Button>
          </div>
        </div>
      </header>
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90">Get in touch with our team</p>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center">
              <Phone className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary mb-2">Phone</h3>
              <p className="text-foreground">Coming soon</p>
            </Card>
            <Card className="p-8 text-center">
              <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
              <p className="text-foreground">Coming soon</p>
            </Card>
            <Card className="p-8 text-center">
              <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary mb-2">Location</h3>
              <p className="text-foreground">Lakewood, WA</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
