import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Users, Shield, Zap, Globe, CheckCircle2, Award, TrendingUp, MapPin } from "lucide-react";
import { updateMetaTags, pageConfigs } from "@/lib/seo";

export default function About() {
  useEffect(() => {
    updateMetaTags(pageConfigs.about);
  }, []);

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

  const credentials = [
    {
      icon: Award,
      title: "State Licensed",
      description: "Pursuing full Washington State home care agency license with all required compliance"
    },
    {
      icon: Shield,
      title: "Background Checked",
      description: "All caregivers undergo comprehensive background checks and reference verification"
    },
    {
      icon: CheckCircle2,
      title: "Trained & Certified",
      description: "All caregivers maintain current CPR/First Aid and relevant certifications"
    },
    {
      icon: TrendingUp,
      title: "Quality Assured",
      description: "Regular quality assurance checks and family satisfaction surveys"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ForeverGreen</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            A woman-owned staffing company built on the belief that caregiving should be treated with dignity, respect, and fair compensation.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Meet Sequoia</h2>
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

      {/* Our Mission & Vision */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-foreground leading-relaxed">
                To connect families with caregivers they can trust, pay caregivers fairly for their essential work, and reinvest in communities that need support—creating sustainable, dignified employment while strengthening the fabric of care in Washington and beyond.
              </p>
            </Card>
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-foreground leading-relaxed">
                A world where caregiving is recognized as the essential, dignified work it is. Where caregivers earn fair wages, families get reliable support, and businesses can be profitable while putting people first.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials & Trust */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Why You Can Trust Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((cred, idx) => {
              const Icon = cred.icon;
              return (
                <Card key={idx} className="p-8 bg-white border-l-4 border-l-accent">
                  <div className="flex gap-4">
                    <Icon className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">{cred.title}</h3>
                      <p className="text-foreground">{cred.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground font-bold">
                    {item.year.split("-")[0]}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.milestone}</h3>
                  <p className="text-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-lg text-primary-foreground/90">Families Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">25+</p>
              <p className="text-lg text-primary-foreground/90">Caregivers Employed</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-lg text-primary-foreground/90">Single Mothers Supported</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">96+</p>
              <p className="text-lg text-primary-foreground/90">Lives Impacted in Ghana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Impact */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Dual Impact: Local & Global</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-white">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Here in Washington</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Real jobs for single moms and caregivers</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Fair wages and stable employment</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Professional development and growth</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Community support and resources</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">In Ghana</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Educational opportunities for children</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Skills training for women</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Economic empowerment programs</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Community development initiatives</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Be Part of Our Story?</h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a caregiver looking for meaningful work, a family seeking reliable care, or a partner interested in our mission—let's connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Join Our Team
            </Button>
            <Button size="lg" variant="outline">
              Find a Caregiver
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
