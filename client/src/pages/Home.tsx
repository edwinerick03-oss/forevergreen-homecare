import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Users, Zap, Globe, CheckCircle2, Shield, TrendingUp, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

/**
 * ForeverGreen Staffing Solutions - Organizational Website
 * Design: Modern Institutional Excellence with Mission Focus
 * Color Scheme: Forest Green (#1B5E3F) + Gold (#D4A574)
 * Typography: Playfair Display (headers) + Inter (body)
 * 
 * Target Audiences:
 * - Caregivers seeking meaningful work
 * - Families needing reliable in-home care
 * - Adult Family Homes seeking staffing solutions
 * - DSHS case managers and partners
 * - Investors and mission-aligned partners
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("caregivers");

  const highlights = [
    {
      icon: Shield,
      title: "Values-Based Hiring",
      description: "Rigorous screening for commitment, emotional maturity, and cultural competence—not just credentials."
    },
    {
      icon: Heart,
      title: "Dual-Impact Mission",
      description: "Every contract reinvests into programs supporting single mothers locally and children in Ghana."
    },
    {
      icon: Zap,
      title: "Proven Model",
      description: "CNA staffing with 33% margins, low overhead, and recurring revenue from DSHS and private clients."
    },
    {
      icon: Users,
      title: "Relationship-Driven",
      description: "Hands-on support and direct communication that builds trust with families, AFHs, and partners."
    }
  ];

  const ventureHighlights = [
    "Completed state-required Home Care Agency Administrator training",
    "Validated demand through direct conversations with families and caregivers",
    "Built comprehensive 5-year financial model with revenue projections",
    "Conducted extensive market research on Washington's long-term care system",
    "Developed complete business plan with operations and compliance strategy",
    "Created values-based hiring model and go-to-market strategy",
    "Established dual-impact mission supporting local and global communities",
    "Designed scalable plan to serve 30 clients within 3–5 years"
  ];

  const businessMetrics = [
    { label: "Billing Rate", value: "$30/hour", icon: TrendingUp },
    { label: "Caregiver Pay", value: "$20/hour", icon: Users },
    { label: "Margin", value: "33%", icon: Zap },
    { label: "Avg Client Hours", value: "30/month", icon: Clock },
    { label: "Raised to Date", value: "$1,000", icon: Globe },
    { label: "TAM", value: "$4.5B", icon: TrendingUp }
  ];

  const caregiverBenefits = [
    {
      title: "Meaningful Work",
      description: "Care for vulnerable adults with a company that values your wellbeing and professional growth"
    },
    {
      title: "Stable Income",
      description: "Consistent, predictable hours with competitive pay and reliable scheduling"
    },
    {
      title: "Support & Community",
      description: "Join a team that treats you with respect and invests in your development"
    },
    {
      title: "Impact Beyond Borders",
      description: "Know that your work supports programs helping families in Ghana and your local community"
    }
  ];

  const familyBenefits = [
    {
      title: "Reliability You Can Trust",
      description: "Vetted, professional caregivers who show up and provide consistent, compassionate care"
    },
    {
      title: "Perfect Matching",
      description: "Caregivers matched based on values, personality, and specific care needs—not just availability"
    },
    {
      title: "Peace of Mind",
      description: "Direct communication with our team and transparent, professional service"
    },
    {
      title: "Values-Aligned Care",
      description: "Support from a company that treats caregivers well and reinvests into communities"
    }
  ];

  const goToMarketChannels = [
    {
      channel: "DSHS Contracting",
      description: "Home Care Agency License enables direct contracts with DSHS for Medicaid-funded clients"
    },
    {
      channel: "Adult Family Home Partnerships",
      description: "Direct relationships with AFHs struggling with caregiver shortages"
    },
    {
      channel: "Community Outreach",
      description: "Churches, senior centers, immigrant communities, and local organizations"
    },
    {
      channel: "Digital Presence",
      description: "Google Business Profile, social media, and website for local discovery and trust-building"
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
            <Badge className="mb-4 bg-accent/20 text-accent border-0">Reliable Care. Real Impact.</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Care That Matters. Jobs That Empower.
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              ForeverGreen connects vulnerable adults with vetted, compassionate caregivers while creating stable jobs for single mothers and reinvesting into communities in Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Our Team <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Care
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
              <p className="text-sm text-muted-foreground">Total Addressable Market in Home Care</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">33%</p>
              <p className="text-sm text-muted-foreground">Sustainable Margins with Values-Based Model</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">2 Communities</p>
              <p className="text-sm text-muted-foreground">Local & Global Impact Through Reinvestment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ForeverGreen */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Why ForeverGreen?</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            We're not just filling shifts. We're building stability for vulnerable adults, creating dignified jobs for caregivers, and proving that business can be both profitable and purposeful.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Meet Sequoia Conner</h2>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                As a single mother and experienced care-coordination advocate, I've spent years supporting families, caregivers, and Adult Family Homes through the complexities of Washington's long-term care system. I saw firsthand how caregiver burnout and unreliability devastate vulnerable adults and their families.
              </p>
              <p className="text-lg text-foreground mb-4 leading-relaxed">
                That's when I realized I could build something better. ForeverGreen isn't just a business—it's a response to a crisis. By combining rigorous hiring, values-based matching, and a commitment to reinvesting into communities, we're proving that care can be both reliable and transformative.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Every caregiver we hire, every family we serve, and every hour of care we provide is an investment in stability, dignity, and opportunity—here in Washington and in Ghana.
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

      {/* Venture Highlights */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Our Progress</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">The Business Model</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">How We Work</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-primary mb-2">Revenue Generation</p>
                  <p className="text-foreground">We bill $30/hour for in-home care services to DSHS, Adult Family Homes, and private-pay families. Each client averages 30 hours of care per month, creating predictable, recurring revenue.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Sustainable Economics</p>
                  <p className="text-foreground">We pay caregivers $20/hour, creating a $10/hour margin before overhead. Our low-overhead model scales without heavy infrastructure or large capital investment.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Multiple Revenue Channels</p>
                  <p className="text-foreground">DSHS contracting, Adult Family Home partnerships, and private-pay families create a diversified, stable client pipeline and long-term sustainability.</p>
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
            <h3 className="text-2xl font-bold text-primary mb-8">Key Metrics</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {businessMetrics.slice(0, 6).map((metric, idx) => (
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
            Join a team that values your work, supports your growth, and knows that the care you provide changes lives.
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
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="mb-6 text-lg">Join ForeverGreen and build a career with purpose, stability, and community impact.</p>
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
            Finding reliable, compassionate caregivers shouldn't be a struggle. We match vetted professionals with your specific needs.
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
            <h3 className="text-2xl font-bold mb-4">Get the Care You Deserve</h3>
            <p className="mb-6 text-lg">Contact us today to discuss your care needs and find the right caregiver match.</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Request Care <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Go-to-Market Strategy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">How We Reach You</h2>
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

      {/* Competitive Advantage */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">What Sets Us Apart</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Our Competitive Advantage</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-primary mb-2">Values-Based Hiring</p>
                  <p className="text-foreground">We screen for emotional maturity, cultural competence, and long-term commitment—not just credentials. This dramatically reduces turnover and ensures consistent, compassionate care.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Dual-Impact Mission</p>
                  <p className="text-foreground">We reinvest a portion of revenue into programs supporting single mothers locally and children in Ghana. This creates deeper purpose for caregivers and stronger community connections.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Hands-On Approach</p>
                  <p className="text-foreground">Unlike larger agencies, we provide direct communication, thoughtful matching, and relationship-driven support that builds trust with families, AFHs, and DSHS partners.</p>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white">
              <h3 className="text-lg font-bold text-primary mb-6">Competitors in the Space</h3>
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
              <p className="text-xs text-muted-foreground mt-6">
                ForeverGreen combines professional reliability with heart-centered mission, values-based hiring, and community reinvestment that larger agencies overlook.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Our Team</h2>
          <Card className="p-12 bg-secondary/50 text-center border-l-4 border-l-accent">
            <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Sequoia Conner</h3>
            <p className="text-lg text-accent font-semibold mb-4">Founder & CEO</p>
            <p className="text-foreground max-w-2xl mx-auto">
              Single mother, care-coordination advocate, and mission-driven entrepreneur building ForeverGreen to fill critical care gaps in Washington while creating opportunity and impact in communities here and in Ghana.
            </p>
          </Card>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Dual-Impact Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Impact</h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                We create stable, dignified employment for single mothers and underserved caregivers in Washington. Every caregiver we hire is an investment in family stability and economic opportunity.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                We reinvest a portion of every contract into programs supporting women and children in Ghana. Your care becomes their opportunity.
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
              Whether you're a caregiver ready to make a difference, a family seeking reliable care, or a partner interested in our mission—we'd love to hear from you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-white">
                <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Call Us</p>
                <p className="font-semibold text-primary">Coming Soon</p>
              </Card>
              <Card className="p-6 bg-white">
                <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-primary">Coming Soon</p>
              </Card>
              <Card className="p-6 bg-white">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold text-primary">Lakewood, WA</p>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Our Team
              </Button>
              <Button size="lg" variant="outline">
                Request Care
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
              <p className="text-sm text-muted-foreground">Care that matters. Jobs that empower.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">For Caregivers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Join Our Team</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Why ForeverGreen</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">For Families</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Request Care</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Services</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Mission</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 ForeverGreen Staffing Solutions. All rights reserved.</p>
            <p className="mt-2">Lakewood, Washington | Building care. Creating opportunity. Changing lives.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
