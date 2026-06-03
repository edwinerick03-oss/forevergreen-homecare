import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Briefcase, MapPin, Clock, DollarSign, Heart, Users, Zap, Globe } from "lucide-react";

export default function Careers() {
  const [, setLocation] = useLocation();

  const jobs = [
    {
      id: "cna-caregiver",
      title: "Certified Nursing Assistant (CNA) - Home Care",
      location: "Lakewood, WA (Serving all of Washington)",
      type: "Full-time / Part-time",
      salary: "$20/hour",
      description: "Provide compassionate in-home care to families and seniors. Help with activities of daily living, mobility assistance, and personal care.",
      requirements: [
        "Washington State CNA certification",
        "Valid driver's license and reliable transportation",
        "Background check clearance",
        "Excellent communication skills",
        "Ability to work independently and as part of a team",
        "Compassion and genuine care for clients"
      ],
      benefits: [
        "Competitive hourly rate ($20/hr)",
        "Flexible scheduling",
        "Paid time off",
        "Professional development opportunities",
        "Supportive team environment",
        "Impact work that matters"
      ]
    },
    {
      id: "hha-caregiver",
      title: "Home Health Aide (HHA) - In-Home Support",
      location: "Lakewood, WA (Serving all of Washington)",
      type: "Full-time / Part-time",
      salary: "$18-20/hour",
      description: "Support clients with personal care, light housekeeping, meal preparation, and companionship. Work directly with families to provide quality care.",
      requirements: [
        "Washington State HHA certification or CNA",
        "Valid driver's license and reliable transportation",
        "Background check clearance",
        "Strong interpersonal skills",
        "Physical ability to assist clients",
        "Reliable and punctual"
      ],
      benefits: [
        "Competitive hourly rate",
        "Flexible scheduling options",
        "Paid time off",
        "Career growth opportunities",
        "Supportive work environment",
        "Make a real difference in people's lives"
      ]
    },
    {
      id: "care-coordinator",
      title: "Care Coordinator",
      location: "Lakewood, WA",
      type: "Full-time",
      salary: "$35,000-$40,000/year",
      description: "Manage client relationships, match caregivers with families, and ensure quality care delivery. Be the bridge between our caregivers and the families we serve.",
      requirements: [
        "High school diploma or equivalent",
        "2+ years in healthcare or customer service",
        "Strong organizational and communication skills",
        "Ability to multitask and manage priorities",
        "Problem-solving mindset",
        "Passion for helping others"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Paid time off",
        "Professional development",
        "Flexible work arrangements",
        "Be part of a mission-driven team"
      ]
    },
    {
      id: "operations-manager",
      title: "Operations Manager",
      location: "Lakewood, WA",
      type: "Full-time",
      salary: "$40,000-$50,000/year",
      description: "Oversee day-to-day operations, manage schedules, handle billing, and support the growth of ForeverGreen. Help us scale our impact.",
      requirements: [
        "Bachelor's degree or equivalent experience",
        "3+ years in operations or healthcare management",
        "Strong leadership and organizational skills",
        "Experience with scheduling and billing systems",
        "Attention to detail",
        "Strategic thinking"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance and retirement plan",
        "Paid time off",
        "Professional development budget",
        "Flexible work environment",
        "Equity in a growing mission-driven company"
      ]
    }
  ];

  const whyWorkHere = [
    {
      icon: Heart,
      title: "Work That Matters",
      description: "Every day, you're making a real difference in people's lives. Your work directly impacts families and communities."
    },
    {
      icon: Users,
      title: "Supportive Team",
      description: "We're a small, tight-knit team that genuinely cares about each other. You're not just a number—you're part of our family."
    },
    {
      icon: Zap,
      title: "Fair Compensation",
      description: "We believe in paying people fairly for their work. Your compensation reflects the value you bring."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Your work supports not just Washington families, but also empowers women and children in Ghana."
    }
  ];

  const faqs = [
    {
      question: "Do I need to be a CNA to work as a caregiver?",
      answer: "For our CNA positions, yes—you'll need Washington State CNA certification. For HHA roles, you can have either HHA or CNA certification. We also provide training opportunities for those interested in getting certified."
    },
    {
      question: "What kind of schedule flexibility do you offer?",
      answer: "We offer flexible scheduling for caregiving positions. You can work full-time, part-time, or on a case-by-case basis. We work with you to find a schedule that fits your life."
    },
    {
      question: "Do you provide benefits?",
      answer: "Yes! Full-time caregivers receive paid time off and professional development opportunities. Office staff receive health insurance, retirement plans, and paid time off. All employees get to be part of something meaningful."
    },
    {
      question: "What's the application process?",
      answer: "Apply through our website, complete an interview, pass a background check, and get trained on our processes. We typically move quickly—you could start within 2-3 weeks."
    },
    {
      question: "Do you hire people without experience?",
      answer: "We're open to training the right people. If you're passionate about caregiving and willing to get certified, we want to talk to you. Contact us to discuss your situation."
    },
    {
      question: "How do you support caregivers?",
      answer: "We provide ongoing support through regular check-ins, professional development, a supportive team, and fair compensation. We also have resources for caregiver wellness and burnout prevention."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Work that matters. A team that cares. Opportunity that's real.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Why Work at ForeverGreen?</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {whyWorkHere.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Open Positions</h2>
          
          <div className="space-y-8">
            {jobs.map((job) => (
              <Card key={job.id} className="p-8 bg-white hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => setLocation("/apply/caregiver")}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap"
                  >
                    Apply Now
                  </Button>
                </div>

                <p className="text-foreground mb-6">{job.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-primary mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-foreground flex gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-foreground flex gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-8 bg-white">
                <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Apply now to join a team that's changing how care works in Washington—and making a global impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setLocation("/apply/caregiver")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Apply Now
            </Button>
            <Button
              onClick={() => setLocation("/contact")}
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Ask Questions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
