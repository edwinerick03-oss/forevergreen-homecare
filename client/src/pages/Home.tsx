import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Users, Zap, Globe, CheckCircle2, Shield, TrendingUp, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

/**
 * ForeverGreen Staffing Solutions - Organizational Website
 * Design: Modern Institutional Excellence with Mission Focus
 * Voice: Natural, authentic, human - not corporate
 * Color Scheme: Forest Green (#1B5E3F) + Gold (#D4A574)
 * Typography: Playfair Display (headers) + Inter (body)
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("caregivers");

  const highlights = [
    {
      icon: Shield,
      title: "We Actually Care Who We Hire",
      description: "We don't just check boxes. We look for people who show up, who care about their clients, and who are in this for the right reasons."
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

  const ventureHighlights = [
    "Completed the state training to get licensed as a Home Care Agency",
    "Talked to real families struggling to find reliable caregivers—they confirmed we're solving a real problem",
    "Built a 5-year financial plan that actually makes sense",
    "Did the research on Washington's care system and DSHS",
    "Wrote out a real business plan with operations and hiring standards",
    "Figured out how to reach families—through DSHS, Adult Family Homes, and community",
    "Designed a mission that matters: supporting single moms locally and kids in Ghana",
    "Built a plan to serve 30 clients in 3-5 years while keeping margins healthy and caregivers supported"
  ];

  const businessMetrics = [
    { label: "We Bill", value: "$30/hr", icon: TrendingUp },
    { label: "We Pay Caregivers", value: "$20/hr", icon: Users },
    { label: "That's a Margin of", value: "33%", icon: Zap },
    { label: "Average Care Per Client", value: "30 hrs/mo", icon: Clock },
    { label: "Raised So Far", value: "$1,000", icon: Globe },
    { label: "Market Size", value: "$4.5B", icon: TrendingUp }
  ];

  const caregiverBenefits = [
    {
      title: "Work That Matters",
      description: "You're not just filling shifts. You're giving families peace of mind and helping vulnerable people get the care they deserve."
    },
    {
      title: "Steady Paychecks",
      description: "Predictable hours, reliable pay, no guessing games. We believe you should know what you're making and when."
    },
    {
      title: "You're Part of a Team",
      description: "Not a number. We know your name, your story, and we actually care about your wellbeing."
    },
    {
      title: "Global Impact",
      description: "Know that your work is helping kids and families in Ghana. Every hour you work creates opportunity somewhere else."
    }
  ];

  const familyBenefits = [
    {
      title: "Caregivers You Can Trust",
      description: "We don't just hire anyone. We find people who actually care and show up when they say they will."
    },
    {
      title: "The Right Match",
      description: "We listen to what you need and match you with someone who gets it. Not just whoever's available."
    },
    {
      title: "Peace of Mind",
      description: "You can talk to us directly. No runaround. Just real people helping you get the care your loved one deserves."
    },
    {
      title: "Values That Align",
      description: "You're working with a company that treats caregivers right and puts money back into communities that need it."
    }
  ];

  const goToMarketChannels = [
    {
      channel: "DSHS & Medicaid",
      description: "Getting licensed so we can work directly with the state to serve families who need support"
    },
    {
      channel: "Adult Family Homes",
      description: "These facilities are desperate for reliable CNAs. We know the people running them and can help fast."
    },
    {
      channel: "Community",
      description: "Churches, senior centers, immigrant communities—places where families actually look for help"
    },
    {
      channel: "Online",
      description: "Google, Facebook, a clean website. Making it easy for people to find us and understand what we do."
    }
  ];

  const competitors = [
    { name: "Right at Home", website: "www.rightathome.net" },
    { name: "Visiting Angels", website: "www.visitingangels.com" },
    { name: "Home Instead", website: "www.homeinstead.com" }
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
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#mission" className="text-sm font-medium hover:text-primary transition-colors">Our Mission</a>
            <a href="#for-caregivers" className="text-sm font-medium hover:text-primary transition-colors">For Caregivers</a>
            <a href="#for-families" className="text-sm font-medium hover:text-primary transition-colors">For Families</a>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Log In</Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/hero-forevergreen-bcCuaGV2erRu3iLJhXiEoy.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="container relative z-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent/20 text-accent border-0">Real care. Real impact.</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Caregiving That Actually Works
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We connect families with caregivers they can trust. We pay caregivers fairly. And we put money back into communities that need it. That's it. That's the whole thing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Our Team <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Find a Caregiver
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 md:py-16 bg-white border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">$4.5B</p>
              <p className="text-sm text-muted-foreground">That's the size of the home care market. It's huge.</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">33%</p>
              <p className="text-sm text-muted-foreground">Our margins. Good enough to pay people well and stay sustainable.</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">2 Communities</p>
              <p className="text-sm text-muted-foreground">Washington and Ghana. Both matter to us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ForeverGreen */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Why Us?</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            We're not trying to be everything to everyone. We're just trying to do this one thing right.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-shadow">
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

      {/* About Sequoia */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Hey, I'm Sequoia</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                I'm a single mom. For years I worked 12-hour days doing care coordination—helping families find caregivers, helping caregivers find work, navigating DSHS. I got really good at it. But I was doing it for someone else.
              </p>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                Then I realized: I could build this myself. I could create a staffing company that actually cares about both sides—caregivers AND families. That pays fairly. That hires people for the right reasons. That puts money back into communities.
              </p>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                I talked to families desperate for reliable caregivers. I talked to caregivers who wanted better work. They all said the same thing: "Yes, we need this." So here we are.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Every caregiver we hire, every family we serve—that's stability. That's dignity. That's opportunity. And some of that goes to kids in Ghana who need it too.
              </p>
            </div>
            <div 
              className="rounded-lg overflow-hidden h-96"
              style={{
                backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/grant-narrative-section-EaCjzA2tqFXYAtkCPVtmLd.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
          </div>
        </div>
      </section>

      {/* What We've Done */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">What We've Built So Far</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ventureHighlights.map((highlight, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">How This Works</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">The Simple Version</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-primary mb-2">We Bill $30/Hour</p>
                  <p className="text-foreground">Families and Adult Family Homes pay us $30 per hour for care. DSHS covers it for people on Medicaid.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">We Pay Caregivers $20/Hour</p>
                  <p className="text-foreground">That's a $10 margin per hour. After overhead, we're sustainable. Caregivers get paid well for their work.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Each Client Gets About 30 Hours a Month</p>
                  <p className="text-foreground">That's predictable, recurring revenue. As we add more clients, everything scales without needing to hire a huge team.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Multiple Revenue Streams</p>
                  <p className="text-foreground">DSHS contracts, Adult Family Homes, private families. Diversified so we're not dependent on one source.</p>
                </div>
              </div>
            </div>
            
            <div 
              className="rounded-lg overflow-hidden h-96"
              style={{
                backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/funding-opportunities-section-6kqRg6onXppQBPPVGKUBNz.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
          </div>

          <div className="bg-accent/10 border border-accent rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-8">The Numbers</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {businessMetrics.map((metric, idx) => (
                <div key={idx}>
                  <p className="text-sm text-muted-foreground font-semibold mb-2">{metric.label}</p>
                  <p className="text-3xl font-bold text-primary">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Caregivers */}
      <section id="for-caregivers" className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">For Caregivers</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            You do hard work. You deserve to be treated like it.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {caregiverBenefits.map((benefit, idx) => (
              <Card key={idx} className="p-8 bg-secondary/50 border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Real Difference?</h3>
            <p className="mb-6 text-lg">We're hiring caregivers who care. Let's talk.</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Apply Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* For Families */}
      <section id="for-families" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">For Families & Adult Family Homes</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Finding a caregiver you can trust shouldn't be this hard. We make it easier.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {familyBenefits.map((benefit, idx) => (
              <Card key={idx} className="p-8 bg-white border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Find the Right Caregiver</h3>
            <p className="mb-6 text-lg">Tell us what you need. We'll listen and find someone who's a good fit.</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How We Reach You */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">How We Find People</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {goToMarketChannels.map((item, idx) => (
              <Card key={idx} className="p-8 bg-secondary/50 border-l-4 border-l-accent">
                <h3 className="text-lg font-bold text-primary mb-3">{item.channel}</h3>
                <p className="text-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">What's Different About Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">We Hire Differently</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-primary mb-2">We Look for Character</p>
                  <p className="text-foreground">Not just credentials. We want people who show up, who care about their clients, who have emotional maturity. That matters more than anything.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">We Reinvest in Communities</p>
                  <p className="text-foreground">Part of what we make goes back. Single moms in Washington get training and support. Kids in Ghana get opportunities. That's built into who we are.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">We're Actually Small</p>
                  <p className="text-foreground">We're not a huge corporation. You talk to us directly. We know your name. We solve problems fast. We care about what happens.</p>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white">
              <h3 className="text-lg font-bold text-primary mb-6">Other Companies Out There</h3>
              <div className="space-y-4">
                {competitors.map((comp, idx) => (
                  <div key={idx} className="pb-4 border-b border-border last:border-0">
                    <p className="font-semibold text-primary">{comp.name}</p>
                    <a href={`https://${comp.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                      {comp.website}
                    </a>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                They're good companies. But they're big. We're different because we're small, we care about the people we hire, and we put money back into communities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Why We Do This</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Here in Washington</h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                We create real jobs for single moms and caregivers who want steady work. Not gig work. Not side hustles. Real paychecks, real stability, real respect.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">In Ghana</h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                We reinvest a portion of what we make into programs that support women and kids. Because opportunity matters everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Let's Connect</h2>
            <p className="text-lg text-foreground mb-12">
              Whether you're looking for work, looking for a caregiver, or just want to chat about what we're doing—reach out.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-white">
                <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Call or Text</p>
                <p className="font-semibold text-primary">Coming Soon</p>
              </Card>
              <Card className="p-6 bg-white">
                <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-primary">Coming Soon</p>
              </Card>
              <Card className="p-6 bg-white">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">We're Based In</p>
                <p className="font-semibold text-primary">Lakewood, WA</p>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Our Team
              </Button>
              <Button size="lg" variant="outline">
                Find a Caregiver
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
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Apply Now</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Why ForeverGreen</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">For Families</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Find a Caregiver</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Mission</a></li>
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
