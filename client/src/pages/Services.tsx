import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Home, Briefcase, Clock, Shield } from "lucide-react";
import { useLocation } from "wouter";

export default function Services() {
  const [, setLocation] = useLocation();

  const services = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Assistance with activities of daily living including bathing, grooming, dressing, toileting, and mobility support.",
      benefits: ["Professional caregivers", "Personalized care plans", "Dignity and privacy respected"],
      cta: "Learn More"
    },
    {
      icon: Users,
      title: "Companion Care",
      description: "Social engagement and emotional support for seniors and adults who need companionship and assistance with daily activities.",
      benefits: ["Conversation and engagement", "Medication reminders", "Light housekeeping"],
      cta: "Learn More"
    },
    {
      icon: Clock,
      title: "Respite Care",
      description: "Temporary care services that give family caregivers a break while ensuring their loved ones receive quality care.",
      benefits: ["Flexible scheduling", "Trained caregivers", "Peace of mind for families"],
      cta: "Learn More"
    },
    {
      icon: Home,
      title: "Home Support Services",
      description: "Non-medical assistance with household tasks, meal preparation, shopping, and errands.",
      benefits: ["Meal planning and prep", "Light housekeeping", "Errand assistance"],
      cta: "Learn More"
    },
    {
      icon: Briefcase,
      title: "Adult Family Home Staffing",
      description: "Dedicated caregiver placement and staffing solutions for Adult Family Homes and small residential care facilities.",
      benefits: ["Reliable staffing", "Vetted caregivers", "Flexible scheduling"],
      cta: "Learn More"
    },
    {
      icon: Shield,
      title: "DSHS Client Support",
      description: "Care services for clients receiving state-funded support through the Department of Social and Health Services.",
      benefits: ["DSHS compliant", "Experienced caregivers", "Seamless coordination"],
      cta: "Learn More"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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
            <a href="/services" className="text-sm font-medium text-primary">Services</a>
            <a href="/for-caregivers" className="text-sm font-medium hover:text-primary transition-colors">For Caregivers</a>
            <a href="/for-families" className="text-sm font-medium hover:text-primary transition-colors">For Families</a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Log In</Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Comprehensive home care solutions tailored to meet the unique needs of every client and family.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow flex flex-col">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground mb-4 flex-grow">{service.description}</p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-primary mb-2">Key Benefits:</p>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="text-sm text-foreground">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">{service.cta}</Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">How Our Services Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", description: "We understand your unique care needs and preferences." },
              { step: "2", title: "Matching", description: "We carefully match you with the right caregiver." },
              { step: "3", title: "Onboarding", description: "Your caregiver is trained and ready to support you." },
              { step: "4", title: "Support", description: "We provide ongoing support and quality assurance." }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's find the right care solution for you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setLocation("/for-families")}>
              Request Care
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setLocation("/contact")}>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">FG</span>
                </div>
                <span className="font-bold text-primary">ForeverGreen</span>
              </div>
              <p className="text-sm text-muted-foreground">Care that works. Jobs that matter. Impact that's real.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/community-impact" className="text-muted-foreground hover:text-primary transition-colors">Community Impact</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors">All Services</a></li>
                <li><a href="/for-families" className="text-muted-foreground hover:text-primary transition-colors">For Families</a></li>
                <li><a href="/for-caregivers" className="text-muted-foreground hover:text-primary transition-colors">For Caregivers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</a></li>
                <li><a href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 ForeverGreen Staffing Solutions. All rights reserved.</p>
            <p className="mt-2">Lakewood, Washington | Real care. Real jobs. Real impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
