import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, DollarSign, FileText, Handshake, CheckCircle2, ArrowRight } from "lucide-react";

export default function FundingPartnerships() {
  const fundingSources = [
    {
      icon: DollarSign,
      title: "Small Business Grants",
      description: "Washington State and federal grants for women-owned businesses in healthcare and social services",
      examples: ["SBA Microloan Program", "Washington State Department of Commerce grants", "Community Development Block Grants"],
      status: "In Progress"
    },
    {
      icon: Target,
      title: "Impact Investing",
      description: "Investment from funds focused on social impact, healthcare innovation, and women entrepreneurship",
      examples: ["Mission-driven venture capital", "Community development finance", "Social impact bonds"],
      status: "Seeking"
    },
    {
      icon: Users,
      title: "Philanthropic Funding",
      description: "Grants from foundations supporting workforce development, women's empowerment, and global impact",
      examples: ["Gates Foundation", "Community foundations", "Women's empowerment funds"],
      status: "Seeking"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Collaborations with healthcare systems, senior living communities, and social service agencies",
      examples: ["Adult Family Home networks", "DSHS partnerships", "Community health centers"],
      status: "Active"
    }
  ];

  const investmentHighlights = [
    {
      metric: "$4.5B",
      label: "Market Size",
      description: "Home care services market in Washington State alone"
    },
    {
      metric: "33%",
      label: "Healthy Margins",
      description: "Sustainable business model with room for growth and reinvestment"
    },
    {
      metric: "3-5 yrs",
      label: "Profitability Timeline",
      description: "Path to profitability while maintaining values and fair wages"
    },
    {
      metric: "2x Impact",
      label: "Dual Benefit",
      description: "Local economic impact plus global community development"
    }
  ];

  const partnerTypes = [
    {
      title: "Healthcare Systems",
      description: "Hospitals and health networks needing reliable caregiver staffing for discharge planning and home health",
      benefits: ["Reduced turnover", "Better patient outcomes", "Compliance support"]
    },
    {
      title: "Senior Living Communities",
      description: "Adult Family Homes and assisted living facilities seeking dependable staffing solutions",
      benefits: ["Flexible staffing", "Vetted caregivers", "Consistent quality"]
    },
    {
      title: "Government Agencies",
      description: "DSHS and other state agencies managing care for vulnerable populations",
      benefits: ["Compliance ready", "Transparent pricing", "Outcome tracking"]
    },
    {
      title: "Community Organizations",
      description: "Nonprofits focused on aging, disability, or community support services",
      benefits: ["Mission alignment", "Collaborative approach", "Community impact"]
    }
  ];

  const impactMetrics = [
    {
      icon: Users,
      metric: "50+",
      label: "Families Served",
      description: "Growing network of families receiving quality care"
    },
    {
      icon: TrendingUp,
      metric: "25+",
      label: "Caregivers Employed",
      description: "Jobs created with fair wages and benefits"
    },
    {
      icon: CheckCircle2,
      metric: "15+",
      label: "Single Mothers Supported",
      description: "Economic empowerment in our community"
    },
    {
      icon: Target,
      metric: "96+",
      label: "Lives Impacted in Ghana",
      description: "Educational and economic opportunities created"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Funding & Partnerships</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Building a sustainable, mission-driven business through strategic partnerships and impact-focused funding.
          </p>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Why Invest in ForeverGreen?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, idx) => (
              <Card key={idx} className="p-8 bg-white text-center hover:shadow-lg transition-shadow">
                <p className="text-4xl font-bold text-accent mb-2">{highlight.metric}</p>
                <p className="text-lg font-semibold text-primary mb-2">{highlight.label}</p>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Sources */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Funding Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {fundingSources.map((source, idx) => {
              const Icon = source.icon;
              return (
                <Card key={idx} className="p-8 bg-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <Badge className={source.status === "In Progress" ? "bg-blue-100 text-blue-800" : source.status === "Active" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}>
                      {source.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-2">{source.title}</h3>
                  <p className="text-foreground mb-4">{source.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Examples:</p>
                    {source.examples.map((example, eidx) => (
                      <div key={eidx} className="flex gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{example}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {partnerTypes.map((partner, idx) => (
              <Card key={idx} className="p-8 bg-white border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">{partner.title}</h3>
                <p className="text-foreground mb-4">{partner.description}</p>
                <div className="space-y-2">
                  {partner.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="flex gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-accent/10 border border-accent rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Interested in Partnering?</h3>
            <p className="text-lg text-foreground mb-6">
              We're actively seeking strategic partners who share our commitment to quality care and community impact.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Discuss Partnership Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <Card key={idx} className="p-8 bg-white text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">{metric.metric}</p>
                  <p className="font-semibold text-primary mb-2">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Sustainable Business Model</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-4">Revenue</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-primary mb-1">Billing Rate</p>
                  <p className="text-3xl font-bold text-accent">$30/hr</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-2">Multiple revenue streams:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Private families</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Adult Family Homes</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>DSHS contracts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-4">Costs</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-primary mb-1">Caregiver Pay</p>
                  <p className="text-3xl font-bold text-accent">$20/hr</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-2">Lean operations:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Minimal overhead</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Technology-enabled</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Scalable model</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-4">Margin</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-primary mb-1">Per Hour</p>
                  <p className="text-3xl font-bold text-accent">$10</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-2">Reinvestment:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Operations & growth</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Community programs</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Ghana initiatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-accent/10 border border-accent">
            <h3 className="text-2xl font-bold text-primary mb-6">Growth Projections</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Year 1</p>
                <p className="text-3xl font-bold text-primary">30 Clients</p>
                <p className="text-sm text-muted-foreground mt-2">Break-even operations</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Year 2-3</p>
                <p className="text-3xl font-bold text-primary">75 Clients</p>
                <p className="text-sm text-muted-foreground mt-2">Profitability achieved</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Year 5</p>
                <p className="text-3xl font-bold text-primary">150+ Clients</p>
                <p className="text-sm text-muted-foreground mt-2">Regional expansion</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're an investor, partner, grant writer, or supporter—there are many ways to help ForeverGreen grow and scale its impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Investor Information
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
