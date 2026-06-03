import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Heart, Shield, Users } from "lucide-react";
import { useLocation } from "wouter";

export default function ForFamilies() {
  const [, setLocation] = useLocation();

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
            <a href="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="/for-caregivers" className="text-sm font-medium hover:text-primary transition-colors">For Caregivers</a>
            <a href="/for-families" className="text-sm font-medium text-primary">For Families</a>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Reliable Care for Your Loved One</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Finding trustworthy caregivers shouldn't be this hard. We match families with compassionate, vetted caregivers who genuinely care.
          </p>
          <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setLocation("/apply/family")}>
            Request Care
          </Button>
        </div>
      </section>

      {/* Why Choose ForeverGreen */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-primary">Why Families Choose ForeverGreen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Vetted & Trustworthy",
                description: "Every caregiver undergoes thorough background checks, reference verification, and skills assessment."
              },
              {
                icon: Heart,
                title: "Personalized Matching",
                description: "We listen to your needs and match you with someone who's a genuine fit for your family."
              },
              {
                icon: Users,
                title: "Professional Support",
                description: "You have direct access to our team for questions, concerns, or adjustments."
              },
              {
                icon: CheckCircle2,
                title: "Quality Assurance",
                description: "We continuously monitor care quality and make adjustments to ensure satisfaction."
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8">
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-primary">Our Process</h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We talk with you to understand your loved one's needs, preferences, and care requirements."
              },
              {
                step: "2",
                title: "Assessment",
                description: "We conduct a thorough assessment to determine the right type and level of care needed."
              },
              {
                step: "3",
                title: "Caregiver Matching",
                description: "We carefully select caregivers whose skills and personality match your family's needs."
              },
              {
                step: "4",
                title: "Care Begins",
                description: "Your caregiver starts providing care with our ongoing support and quality monitoring."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-2xl">
                    {item.step}
                  </div>
                </div>
                <Card className="flex-1 p-6 bg-white">
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caregiver Standards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-primary">Our Caregiver Standards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Screening Process</h3>
              <ul className="space-y-3">
                {["Background checks", "Reference verification", "Skills assessment", "Health screening", "Interview process"].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Quality Assurance</h3>
              <ul className="space-y-3">
                {["Regular check-ins", "Client feedback", "Performance monitoring", "Ongoing training", "24/7 support"].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's find the right caregiver for your loved one. Fill out our care request form to get started.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setLocation("/apply/family")}>
            Request Care Now
          </Button>
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
