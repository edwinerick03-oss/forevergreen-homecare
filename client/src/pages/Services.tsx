import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Home, Briefcase, Clock, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Personal Care",
      description: "Help with bathing, grooming, dressing, toileting, and mobility so your loved one can stay comfortable at home.",
      benefits: ["Professional caregivers", "Personalized care plans", "Dignity and privacy respected"],
      details: "Our caregivers are trained in safe personal care and work with your family to create a care plan that fits your needs and preferences."
    },
    {
      icon: Users,
      title: "Companion Care",
      description: "Friendly, caring support for seniors who need someone to talk to and help with daily activities.",
      benefits: ["Conversation and engagement", "Medication reminders", "Light housekeeping"],
      details: "Our companions provide real friendship and support, helping with meals, errands, and activities while keeping your loved one engaged and happy."
    },
    {
      icon: Clock,
      title: "Respite Care",
      description: "Temporary care that gives family caregivers a much-needed break while your loved one gets quality care.",
      benefits: ["Flexible hours", "Trained caregivers", "Continuity of care"],
      details: "Caregiver burnout is real. We provide respite care so you can take a break knowing your loved one is in good hands."
    },
    {
      icon: Home,
      title: "Home Support Services",
      description: "Help with cooking, cleaning, shopping, and errands so your family can focus on spending time together.",
      benefits: ["Meal preparation", "Light housekeeping", "Shopping & errands"],
      details: "We handle the household tasks so you can focus on what really matters—being together as a family."
    },
    {
      icon: Briefcase,
      title: "Adult Family Home Staffing",
      description: "Reliable caregiver staffing for Adult Family Homes and residential care facilities in Pierce County.",
      benefits: ["Reliable staffing", "Vetted caregivers", "Consistent quality"],
      details: "We know the staffing challenges Adult Family Homes face. We provide reliable, well-trained caregivers who are committed to quality care."
    },
    {
      icon: Shield,
      title: "DSHS Client Support",
      description: "Care services for clients receiving state-funded support through Washington's Department of Social and Health Services.",
      benefits: ["DSHS licensed", "Experienced caregivers", "Smooth coordination"],
      details: "We're licensed and experienced with DSHS requirements. We handle the paperwork and coordination so families can focus on care."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We talk with you about your situation, your loved one's needs, and what kind of care support would work best."
    },
    {
      step: "2",
      title: "Caregiver Matching",
      description: "We find a caregiver who's a good fit for your family—someone with the right skills, experience, and personality."
    },
    {
      step: "3",
      title: "Orientation & Training",
      description: "Your caregiver spends time learning your routines, preferences, and any special care needs. We make sure everything goes smoothly."
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "We check in regularly, make sure everything's working well, and adjust as needed. Your satisfaction matters to us."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Comprehensive care solutions tailored to your needs. Professional, compassionate, reliable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-shadow">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-foreground mb-4">{service.description}</p>
                  
                  <p className="text-sm text-muted-foreground mb-6 italic">{service.details}</p>
                  
                  <div className="space-y-2">
                    {service.benefits.map((benefit, bidx) => (
                      <div key={bidx} className="flex gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <Card className="p-8 bg-white text-center h-full">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground text-sm">{item.description}</p>
                </Card>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Our Quality Standards</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Caregiver Screening</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Background Checks</p>
                    <p className="text-sm text-muted-foreground">Comprehensive criminal and civil background screening</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Reference Verification</p>
                    <p className="text-sm text-muted-foreground">Thorough reference checks from previous employers</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Skills Assessment</p>
                    <p className="text-sm text-muted-foreground">Evaluation of caregiving skills and experience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Values Alignment</p>
                    <p className="text-sm text-muted-foreground">Assessment of personal values and commitment to care</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Training & Support</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">CPR & First Aid</p>
                    <p className="text-sm text-muted-foreground">Current certification required for all caregivers</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Ongoing Training</p>
                    <p className="text-sm text-muted-foreground">Regular professional development and skill updates</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Supervision</p>
                    <p className="text-sm text-muted-foreground">Regular check-ins and quality assurance monitoring</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary">Support Resources</p>
                    <p className="text-sm text-muted-foreground">Access to training materials and support hotline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Availability */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Flexible Options</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white">
              <h3 className="text-xl font-bold text-primary mb-4">Hourly Care</h3>
              <p className="text-3xl font-bold text-accent mb-2">$30<span className="text-lg text-muted-foreground">/hr</span></p>
              <p className="text-sm text-muted-foreground mb-6">Flexible hourly rates for personal and companion care</p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Minimum 2-hour visit</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>No long-term contracts</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-2 border-accent">
              <Badge className="mb-4 bg-accent/20 text-accent border-0">Most Popular</Badge>
              <h3 className="text-xl font-bold text-primary mb-4">Regular Care</h3>
              <p className="text-3xl font-bold text-accent mb-2">$28<span className="text-lg text-muted-foreground">/hr</span></p>
              <p className="text-sm text-muted-foreground mb-6">Discounted rate for regular weekly care</p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>3+ visits per week</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Consistent caregiver</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Priority scheduling</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-xl font-bold text-primary mb-4">DSHS/Medicaid</h3>
              <p className="text-3xl font-bold text-accent mb-2">Billed<span className="text-lg text-muted-foreground"> Direct</span></p>
              <p className="text-sm text-muted-foreground mb-6">For eligible clients with state funding</p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>State-approved rates</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Compliance included</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>No out-of-pocket cost</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Let's find the right care solution for your needs. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Request a Consultation
            </Button>
            <Button size="lg" variant="outline">
              Call (253) 341-6755
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
