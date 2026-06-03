import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, TrendingUp, BookOpen, Home, CheckCircle2, Award } from "lucide-react";

export default function CommunityImpact() {
  const localImpact = [
    {
      icon: Users,
      title: "Employment for Single Mothers",
      metric: "15+",
      description: "Providing stable, dignified employment with fair wages for single mothers in Washington State",
      details: "These aren't gig jobs or side hustles. They're real paychecks, real benefits, real stability."
    },
    {
      icon: Home,
      title: "Families Served",
      metric: "50+",
      description: "Connecting families with caregivers they can trust",
      details: "From seniors to people with disabilities, we're providing the care support families desperately need."
    },
    {
      icon: TrendingUp,
      title: "Caregivers Employed",
      metric: "25+",
      description: "Creating meaningful work in the home care industry",
      details: "Caregivers who are valued, trained, and compensated fairly for their essential work."
    },
    {
      icon: Award,
      title: "Professional Development",
      metric: "100%",
      description: "All caregivers receive ongoing training and certification support",
      details: "We invest in our team's growth and professional advancement."
    }
  ];

  const globalImpact = [
    {
      icon: BookOpen,
      title: "Educational Access",
      description: "Supporting children's education in Ghana through scholarships and school programs",
      metric: "50+",
      label: "Children Supported"
    },
    {
      icon: Users,
      title: "Women's Empowerment",
      description: "Skills training and economic opportunities for women in Ghana",
      metric: "30+",
      label: "Women Trained"
    },
    {
      icon: Home,
      title: "Community Development",
      description: "Infrastructure and resource projects in partner communities",
      metric: "5",
      label: "Communities Served"
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Supporting healthcare initiatives and maternal health programs",
      metric: "96+",
      label: "Lives Impacted"
    }
  ];

  const initiatives = [
    {
      region: "Washington State",
      title: "Single Mother Support Program",
      description: "Providing employment, professional development, and community support for single mothers in the Lakewood area",
      activities: [
        "Fair-wage employment as CNAs and caregivers",
        "Professional certification and training support",
        "Flexible scheduling for work-life balance",
        "Community networking and peer support",
        "Career advancement opportunities"
      ]
    },
    {
      region: "Washington State",
      title: "Family Care Access Initiative",
      description: "Ensuring reliable, affordable care access for families and seniors across Washington",
      activities: [
        "Vetted caregiver placement services",
        "DSHS-compliant care for state-funded clients",
        "Respite care for family caregivers",
        "Adult Family Home staffing solutions",
        "Quality assurance and ongoing support"
      ]
    },
    {
      region: "Ghana",
      title: "Education for All",
      description: "Providing educational opportunities and scholarships for children in partner communities",
      activities: [
        "School scholarships and tuition support",
        "Educational materials and resources",
        "Teacher training and support",
        "School infrastructure improvements",
        "Mentorship and career guidance"
      ]
    },
    {
      region: "Ghana",
      title: "Women's Economic Empowerment",
      description: "Building economic independence and opportunity for women through skills training and business support",
      activities: [
        "Vocational skills training programs",
        "Microfinance and business startup support",
        "Cooperative development and support",
        "Market access and sales training",
        "Leadership development programs"
      ]
    }
  ];

  const stories = [
    {
      name: "Maria",
      role: "CNA & Single Mother",
      story: "Working with ForeverGreen changed my life. I have stable income, flexible hours that work with my kids' schedule, and I feel valued for my work. Plus, knowing that my hours help kids in Ghana get an education—that means everything.",
      location: "Lakewood, WA"
    },
    {
      name: "The Johnson Family",
      role: "Care Recipient Family",
      story: "We were struggling to find reliable care for my mom. ForeverGreen connected us with Sarah, who has become like family. The peace of mind knowing my mom is in such good hands is priceless.",
      location: "Tacoma, WA"
    },
    {
      name: "Ama",
      role: "Student in Ghana",
      story: "Thanks to ForeverGreen's scholarship program, I was able to finish secondary school. Now I'm studying to become a nurse. I want to help people like the caregivers who helped my family.",
      location: "Accra, Ghana"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Impact</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Creating meaningful change in Washington State and beyond. Every caregiver we employ, every family we serve, every child we support—that's impact that matters.
          </p>
        </div>
      </section>

      {/* Local Impact */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Local Impact: Washington State</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {localImpact.map((impact, idx) => {
              const Icon = impact.icon;
              return (
                <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-3xl font-bold text-accent">{impact.metric}</p>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{impact.title}</h3>
                  <p className="text-foreground mb-3">{impact.description}</p>
                  <p className="text-sm text-muted-foreground italic">{impact.details}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Global Impact: Ghana</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {globalImpact.map((impact, idx) => {
              const Icon = impact.icon;
              return (
                <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{impact.title}</h3>
                  <p className="text-sm text-foreground mb-4">{impact.description}</p>
                  <p className="text-2xl font-bold text-accent mb-1">{impact.metric}</p>
                  <p className="text-xs text-muted-foreground">{impact.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Our Initiatives</h2>
          <div className="space-y-8">
            {initiatives.map((initiative, idx) => (
              <Card key={idx} className="p-8 bg-white border-l-4 border-l-accent">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-3 bg-accent/20 text-accent border-0">{initiative.region}</Badge>
                    <h3 className="text-2xl font-bold text-primary">{initiative.title}</h3>
                  </div>
                </div>
                <p className="text-lg text-foreground mb-6">{initiative.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {initiative.activities.map((activity, aidx) => (
                    <div key={aidx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Stories of Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{story.name}</h3>
                  <p className="text-sm text-accent font-semibold">{story.role}</p>
                </div>
                <p className="text-foreground mb-6 italic">"{story.story}"</p>
                <p className="text-sm text-muted-foreground">— {story.location}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">How You Can Support Our Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white">
              <h3 className="text-xl font-bold text-primary mb-4">Hire a Caregiver</h3>
              <p className="text-foreground mb-6">
                When you use ForeverGreen for your care needs, you're supporting employment, fair wages, and community development.
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Find a Caregiver
              </Button>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-xl font-bold text-primary mb-4">Join Our Team</h3>
              <p className="text-foreground mb-6">
                Work as a caregiver with ForeverGreen and be part of something bigger than yourself.
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Apply Now
              </Button>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-xl font-bold text-primary mb-4">Partner With Us</h3>
              <p className="text-foreground mb-6">
                Healthcare systems, nonprofits, and organizations can partner with us to expand impact.
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Our 5-Year Impact Goals</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Washington State</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">150+ Families Served</p>
                    <p className="text-sm text-primary-foreground/80">Expanding care access across the state</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">75+ Caregivers Employed</p>
                    <p className="text-sm text-primary-foreground/80">Creating stable, dignified jobs</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">50+ Single Mothers Supported</p>
                    <p className="text-sm text-primary-foreground/80">Economic empowerment in our community</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Ghana</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">500+ Children Supported</p>
                    <p className="text-sm text-primary-foreground/80">Through education and scholarships</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">200+ Women Trained</p>
                    <p className="text-sm text-primary-foreground/80">In skills and entrepreneurship</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">10+ Communities Transformed</p>
                    <p className="text-sm text-primary-foreground/80">Through development initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
