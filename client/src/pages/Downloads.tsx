import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, ArrowRight, Heart } from "lucide-react";

/**
 * Downloads Page - Business Proposal & Resources
 * Design: Natural, human voice
 * Purpose: Allow users to download the business proposal and other resources
 */

export default function Downloads() {
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
            <a href="#" className="text-sm font-medium text-primary font-semibold">Resources</a>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Log In</Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
            Get to Know ForeverGreen
          </h1>
          <p className="text-xl text-foreground mb-8 leading-relaxed">
            Download our business proposal and learn how we're building a staffing company that actually works—for caregivers, for families, and for communities.
          </p>
        </div>
      </section>

      {/* Main Downloads */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-primary">Resources</h2>

          {/* Business Proposal Card */}
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 mb-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-primary">Business Proposal</h3>
                  <Badge className="bg-accent/20 text-accent border-0">PDF</Badge>
                </div>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  The full story. Everything you need to understand ForeverGreen—our mission, our model, why we exist, and why we're going to succeed. This is the real deal, not a pitch deck. Read it if you're considering investing, partnering, or just want to understand what we're building.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/forevergreen-business-proposal.pdf" 
                    download
                    className="inline-flex"
                  >
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Download Proposal <Download className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                  <Button size="lg" variant="outline">
                    Read Online
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* What's Inside */}
          <Card className="p-8 bg-secondary/50 border-l-4 border-l-accent mb-12">
            <h3 className="text-xl font-bold text-primary mb-6">What's Inside the Proposal</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-primary mb-2">✓ The Real Story</p>
                <p className="text-foreground text-sm">Why Sequoia started ForeverGreen and what she saw that made her believe this was necessary.</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">✓ The Problem</p>
                <p className="text-foreground text-sm">The caregiver crisis in Washington. Families desperate for help. Facilities struggling. Why this matters now.</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">✓ How We're Different</p>
                <p className="text-foreground text-sm">Our values-based hiring. Our commitment to fair pay. Our mission to reinvest in communities.</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">✓ The Business Model</p>
                <p className="text-foreground text-sm">How we make money. Why the margins work. How we scale. The financial projections.</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">✓ What We've Done</p>
                <p className="text-foreground text-sm">The work we've already completed. Market research. Financial modeling. Founder-market fit.</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">✓ The Ask</p>
                <p className="text-foreground text-sm">What we need to launch. How we'll use the funding. What we're looking for in partners.</p>
              </div>
            </div>
          </Card>

          {/* Why Download */}
          <div className="bg-primary text-primary-foreground p-12 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">Why Read This?</h3>
            <div className="space-y-4 text-lg">
              <p>✓ You're considering investing and want the full picture</p>
              <p>✓ You're an Adult Family Home looking for a staffing partner</p>
              <p>✓ You're a caregiver wanting to understand the company</p>
              <p>✓ You're a DSHS partner exploring collaboration</p>
              <p>✓ You just want to know what we're building and why</p>
            </div>
          </div>
        </div>
      </section>

      {/* More Resources Coming */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-primary">Coming Soon</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-l-4 border-l-accent">
              <h3 className="text-lg font-bold text-primary mb-3">Caregiver Handbook</h3>
              <p className="text-foreground mb-4">Everything you need to know about working with ForeverGreen. How we hire. What we expect. What you can expect from us.</p>
              <Badge className="bg-secondary text-foreground">Coming Soon</Badge>
            </Card>

            <Card className="p-8 bg-white border-l-4 border-l-accent">
              <h3 className="text-lg font-bold text-primary mb-3">Family Guide</h3>
              <p className="text-foreground mb-4">How to request care. What to expect. How we match caregivers. Your rights and our commitment to you.</p>
              <Badge className="bg-secondary text-foreground">Coming Soon</Badge>
            </Card>

            <Card className="p-8 bg-white border-l-4 border-l-accent">
              <h3 className="text-lg font-bold text-primary mb-3">Adult Family Home Partnership Guide</h3>
              <p className="text-foreground mb-4">How we work with facilities. Staffing solutions. Reliability. Pricing. Let's talk about how we can help.</p>
              <Badge className="bg-secondary text-foreground">Coming Soon</Badge>
            </Card>

            <Card className="p-8 bg-white border-l-4 border-l-accent">
              <h3 className="text-lg font-bold text-primary mb-3">Impact Report</h3>
              <p className="text-foreground mb-4">Stories from caregivers. Stories from families. Updates on our Ghana programs. Real impact, real numbers.</p>
              <Badge className="bg-secondary text-foreground">Coming Soon</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Ready to Get Involved?</h2>
          <p className="text-lg text-foreground mb-12">
            Whether you're interested in investing, partnering, or joining the team—let's talk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="inline-flex">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Back to Home <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Button size="lg" variant="outline">
              Contact Us
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
              <h4 className="font-bold text-primary mb-4">For Caregivers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Apply Now</a></li>
                <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Why ForeverGreen</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">For Families</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Find a Caregiver</a></li>
                <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Resources</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
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
