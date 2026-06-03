import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Users, Zap, Globe, CheckCircle2, Shield, TrendingUp, MapPin, Phone, Mail, Clock, Award, Lock, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [, setLocation] = useLocation();
  const [counts, setCounts] = useState({ families: 0, caregivers: 0, mothers: 0, ghana: 0 });

  // Animate counters on scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        families: Math.min(prev.families + 2, 50),
        caregivers: Math.min(prev.caregivers + 1, 25),
        mothers: Math.min(prev.mothers + 1, 15),
        ghana: Math.min(prev.ghana + 3, 200)
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      icon: Shield,
      title: "We Actually Care Who We Hire",
      description: "Character matters more than credentials. We look for people who show up, who care about their clients, and who are in this for the right reasons."
    },
    {
      icon: Heart,
      title: "Your Work Goes Further",
      description: "Every hour you work helps families here in Washington AND supports kids and women in Ghana. That's not just a job—that's impact."
    },
    {
      icon: Zap,
      title: "It Actually Works",
      description: "CNA staffing is a proven model. Good margins, steady work, and we're built lean so we can actually pay you well and keep things running."
    },
    {
      icon: Users,
      title: "Real Relationships",
      description: "We're not some big corporate machine. You'll talk to us directly. We listen. We solve problems. We treat people like people."
    }
  ];

  const trustIndicators = [
    { icon: Award, title: "Licensed Home Care Agency", description: "Washington State certified and compliant" },
    { icon: Lock, title: "Background Checks", description: "Comprehensive screening for all caregivers" },
    { icon: CheckCircle2, title: "Reference Verification", description: "Thorough vetting process" },
    { icon: Briefcase, title: "Professional Standards", description: "Ongoing training and quality assurance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
            <a href="/for-families" className="text-sm font-medium hover:text-primary transition-colors">For Families</a>
            <a href="/for-caregivers" className="text-sm font-medium hover:text-primary transition-colors">For Caregivers</a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={() => setLocation("/apply/caregiver")}>Apply</Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90" onClick={() => setLocation("/apply/family")}>Request Care</Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Premium Image */}
      <section className="relative py-0 md:py-0 overflow-hidden h-[500px] md:h-[600px]">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/hero-caregiver-senior-RuYfCofB5prCQqTAiAd7Xp.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="container relative z-20 h-full flex items-center">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent/20 text-accent border-0 animate-fade-in">Real care. Real impact.</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Caregiving That Actually Works
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in">
              We connect families with caregivers they can trust. We pay caregivers fairly. And we put money back into communities that need it. That's it. That's the whole thing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setLocation("/apply/caregiver")}>
                Join Our Team <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => setLocation("/apply/family")}>
                Find a Caregiver
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 md:py-16 bg-white border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{counts.families}+</p>
              <p className="text-sm text-muted-foreground">Families Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{counts.caregivers}+</p>
              <p className="text-sm text-muted-foreground">Caregivers Employed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{counts.mothers}+</p>
              <p className="text-sm text-muted-foreground">Single Mothers Empowered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{counts.ghana}+</p>
              <p className="text-sm text-muted-foreground">Lives Impacted in Ghana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Why Families Trust Us</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            We're not just a staffing agency. We're a vetted, licensed, professional care provider.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-6 bg-white hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
                  <Icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why ForeverGreen */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Why Us?</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            We're not trying to be everything to everyone. We're just trying to do this one thing right.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 bg-secondary/50 hover:shadow-lg transition-all hover:translate-y-[-4px] duration-300">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Caregiver Training Section with Image */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="rounded-lg overflow-hidden h-96 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{
                backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/caregiver-training-diverse-BhLchbrS35QSxvmgzUHqnd.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Professional Training & Development</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                We invest in our caregivers. Every team member gets comprehensive training in patient care, safety protocols, and professional standards.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Our caregivers aren't just employees—they're partners in our mission. We provide ongoing education, career growth opportunities, and real support.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setLocation("/for-caregivers")}>
                Learn About Careers <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Family Consultation Section with Image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Personalized Care Planning</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                We don't believe in one-size-fits-all care. We listen to your family's unique needs and create a care plan that works for you.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Our consultants take time to understand your situation, your concerns, and your goals. Then we match you with a caregiver who gets it.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setLocation("/apply/family")}>
                Request a Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div 
              className="rounded-lg overflow-hidden h-96 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{
                backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/family-consultation-DxwoufuvidT6YwGS9VzEuU.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
          </div>
        </div>
      </section>

      {/* Community Impact Section with Image */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="rounded-lg overflow-hidden h-96 shadow-lg"
              style={{
                backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/community-impact-ghana-S3ZDGZUF2yjtM8iZ4PFAQf.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Global Impact, Local Care</h2>
              <p className="text-lg text-primary-foreground/90 mb-4 leading-relaxed">
                We believe in reinvesting in communities. A portion of every dollar we make goes back to support women and children in Ghana.
              </p>
              <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
                When you work with ForeverGreen, you're not just getting great care. You're supporting education, skills training, and real opportunity in West Africa.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setLocation("/community-impact")}>
                Learn About Our Impact <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Ready to Get Started?</h2>
            <p className="text-lg text-foreground mb-12">
              Whether you're looking for work, looking for a caregiver, or just want to learn more—we're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setLocation("/apply/caregiver")}>
                Apply as Caregiver
              </Button>
              <Button size="lg" variant="outline" onClick={() => setLocation("/apply/family")}>
                Request Care Services
              </Button>
            </div>
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
              <h4 className="font-bold text-primary mb-4">For Caregivers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/apply/caregiver" className="text-muted-foreground hover:text-primary transition-colors">Apply Now</a></li>
                <li><a href="/for-caregivers" className="text-muted-foreground hover:text-primary transition-colors">Why ForeverGreen</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">For Families</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/apply/family" className="text-muted-foreground hover:text-primary transition-colors">Request Care</a></li>
                <li><a href="/for-families" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/community-impact" className="text-muted-foreground hover:text-primary transition-colors">Impact</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 ForeverGreen Staffing Solutions. All rights reserved.</p>
            <p className="mt-2">Lakewood, Washington | (253) 341-6755 | Real care. Real jobs. Real impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
