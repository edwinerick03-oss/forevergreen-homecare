import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Target, Users, Shield, Zap, Globe } from "lucide-react";
import { useLocation } from "wouter";

export default function About() {
  const [, setLocation] = useLocation();

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We care deeply about the wellbeing of every caregiver and family we serve."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical standards in everything we do."
    },
    {
      icon: Users,
      title: "Community",
      description: "We invest in local communities and support those who need it most."
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We maintain the highest standards in caregiver screening, training, and care delivery."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We measure success not just by revenue, but by lives changed and communities strengthened."
    },
    {
      icon: Target,
      title: "Accountability",
      description: "We take responsibility for our commitments and deliver on our promises."
    }
  ];

  const timeline = [
    {
      year: "2024",
      milestone: "Founded ForeverGreen Staffing Solutions",
      description: "Sequoia Conner launches the company with a vision to transform home care staffing in Washington State."
    },
    {
      year: "2024",
      milestone: "Completed Home Care Agency Training",
      description: "Completed Washington State training requirements for home care agency licensing."
    },
    {
      year: "2024-2025",
      milestone: "Pursuing Washington State License",
      description: "Working through the licensing process to become a fully licensed home care agency."
    },
    {
      year: "2025",
      milestone: "First Caregivers Hired",
      description: "Onboarding initial cohort of values-based caregivers and beginning service delivery."
    },
    {
      year: "2025-2026",
      milestone: "DSHS Contract Development",
      description: "Establishing contracts with Washington Department of Social and Health Services."
    },
    {
      year: "2026+",
      milestone: "Regional Expansion",
      description: "Scaling operations to serve more families and create more caregiver employment opportunities."
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
            <a href="/about" className="text-sm font-medium text-primary">About</a>
            <a href="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
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

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About ForeverGreen</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            We're building a different kind of home care agency—one that puts people first, treats caregivers with dignity, and creates measurable impact in our communities.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Sequoia's Story</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                I'm a single mom. For years, I worked as a Case Care Manager, helping families navigate the system and find caregivers. I placed clients into Adult Family Homes, coordinated care, and advocated for vulnerable adults. I got really good at it. But I was doing it for someone else.
              </p>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Then I realized something: I could build this myself. I could create a staffing company that actually cares about both sides—caregivers AND families. That pays fairly. That hires people for the right reasons. That puts money back into communities.
              </p>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                I talked to families desperate for reliable caregivers. I talked to caregivers who wanted better work. They all said the same thing: "Yes, we need this." So here we are.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Every caregiver we hire, every family we serve—that's stability. That's dignity. That's opportunity. And some of that goes to kids in Ghana who need it too.
              </p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-8 h-96 flex items-center justify-center">
              <p className="text-center text-muted-foreground">Founder Photo Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-foreground leading-relaxed">
                ForeverGreen Staffing Solutions provides dependable, compassionate, and professionally vetted caregivers to seniors, adults with disabilities, Adult Family Homes, and families throughout Washington State. We are committed to creating stable employment opportunities for caregivers while reinvesting a portion of profits into programs supporting single mothers locally and children in Ghana.
              </p>
            </Card>
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-foreground leading-relaxed">
                To become Washington State's most trusted home care staffing partner while creating measurable social impact both locally and globally. We envision a future where every family can access reliable, compassionate care, every caregiver is treated with dignity and paid fairly, and communities thrive through meaningful reinvestment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-primary">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-primary">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                <Card className="flex-1 p-6 bg-white">
                  <h3 className="text-lg font-bold text-primary mb-2">{item.milestone}</h3>
                  <p className="text-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Be Part of Our Story?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're looking for care or looking to make a difference as a caregiver, let's connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setLocation("/apply/caregiver")}>
              Apply as a Caregiver
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setLocation("/for-families")}>
              Request Care
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
