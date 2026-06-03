import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Heart, Users, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function ForCaregivers() {
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
            <a href="/for-caregivers" className="text-sm font-medium text-primary">For Caregivers</a>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Work That Matters</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Join ForeverGreen and make a real difference. Steady work, fair pay, and a company that actually cares about you.
          </p>
          <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setLocation("/apply/caregiver")}>
            Apply Now
          </Button>
        </div>
      </section>

      {/* Why ForeverGreen */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-primary">Why Work With ForeverGreen?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Fair Pay",
                description: "$20/hour for caregivers. Predictable paychecks. No games."
              },
              {
                icon: Heart,
                title: "Work That Matters",
                description: "You're not just filling shifts. You're changing lives and supporting families."
              },
              {
                icon: Users,
                title: "You're Part of a Team",
                description: "Not a number. We know your name, your story, and we actually care about your wellbeing."
              },
              {
                icon: Zap,
                title: "Global Impact",
                description: "Know that your work helps kids and families in Ghana. Every hour creates opportunity."
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

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-primary">Caregiver Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Compensation & Scheduling</h3>
              <ul className="space-y-3">
                {["$20/hour", "Flexible scheduling", "Predictable shifts", "Overtime available", "Direct deposit"].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Professional Development</h3>
              <ul className="space-y-3">
                {["Training opportunities", "Career growth", "Mentorship", "Continuing education", "Skills development"].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-primary">What We're Looking For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-secondary/30">
              <h3 className="text-lg font-bold text-primary mb-4">Required</h3>
              <ul className="space-y-2">
                {["Valid CNA or HCA certification", "Background check clearance", "References", "Reliable transportation", "Professional demeanor"].map((item, idx) => (
                  <li key={idx} className="text-foreground">• {item}</li>
                ))}
              </ul>
            </Card>
            <Card className="p-8 bg-secondary/30">
              <h3 className="text-lg font-bold text-primary mb-4">We Value</h3>
              <ul className="space-y-2">
                {["Compassion", "Reliability", "Communication skills", "Problem-solving", "Cultural sensitivity"].map((item, idx) => (
                  <li key={idx} className="text-foreground">• {item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply", description: "Submit your application and tell us about yourself." },
              { step: "2", title: "Interview", description: "We'll talk about your experience and what matters to you." },
              { step: "3", title: "Screening", description: "Background check and reference verification." },
              { step: "4", title: "Onboarding", description: "Training and your first assignment." }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our team of caregivers who are changing lives in Washington and beyond.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setLocation("/apply/caregiver")}>
            Apply Now
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
