import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Clock, Target, Users, DollarSign, FileText, ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * ForeverGreen Funding Opportunities Report Website
 * Design: Modern Institutional Excellence
 * Color Scheme: Forest Green (#1B5E3F) + Gold (#D4A574)
 * Typography: Playfair Display (headers) + Inter (body)
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  const fundingOpportunities = [
    {
      priority: "High",
      name: "Amber Grant for Women",
      funding: "Monthly grants + year-end larger grants",
      fit: "Women-owned startup with strong founder story",
      action: "Apply immediately with $10K use-of-funds plan",
      link: "https://ambergrantsforwomen.com/get-an-amber-grant/"
    },
    {
      priority: "High",
      name: "IFundWomen Universal Grant Application",
      funding: "Matching to corporate grants, coaching, crowdfunding",
      fit: "Women founder seeking grants and funding marketplace",
      action: "Complete universal application and keep profile updated",
      link: "https://www.ifundwomen.com/grants/universal-funding-grant-application/welcome"
    },
    {
      priority: "High",
      name: "HerRise MicroGrant",
      funding: "Microgrant support for marketing, training, branding",
      fit: "Women entrepreneurs creating community-impact solutions",
      action: "Apply once business registration and website ready",
      link: "https://www.hersuitespot.com/herrise/"
    },
    {
      priority: "High",
      name: "Washington Women's Business Center",
      funding: "Free coaching, training, networking, funding readiness",
      fit: "Washington women-owned startup needing coaching",
      action: "Schedule business coaching and grant review",
      link: "https://businessimpactnw.org/washington-womens-business-center/"
    },
    {
      priority: "High",
      name: "Washington Center for Women in Business",
      funding: "Business counseling, programs, and resources",
      fit: "Washington woman founder needing business support",
      action: "Register for counseling and request grant packet review",
      link: "https://www.wcwb.org/"
    },
    {
      priority: "High",
      name: "Washington OMWBE Certification",
      funding: "Certification support, technical assistance, contracting",
      fit: "Woman-owned business seeking certification",
      action: "Begin certification readiness process",
      link: "https://omwbe.wa.gov/"
    },
    {
      priority: "Medium",
      name: "NASE Growth Grant",
      funding: "Up to $4,000 for growth activities",
      fit: "Small business needing specific growth expense",
      action: "Use for website, marketing, recruitment, or licensing",
      link: "https://www.nase.org/become-a-member/member-benefits/business-resources/growth-grants"
    },
    {
      priority: "Medium",
      name: "Washington State Business Funding",
      funding: "Loans and capital access through CDFIs",
      fit: "Washington startup needing working capital",
      action: "Explore after grant packet is ready",
      link: "https://www.business.wa.gov/site/alias__business/928/loans-and-grants.aspx"
    }
  ];

  const actionPlan = [
    {
      phase: "Days 1-3",
      title: "Build Grant Foundation",
      tasks: [
        "Build grant folder and create grant tracker",
        "List all required documents",
        "Create standard application answers"
      ]
    },
    {
      phase: "Days 4-7",
      title: "Gather Proof of Demand",
      tasks: [
        "Create proof-of-demand tracker",
        "List all families and AFHs contacted",
        "Document caregiver interest and referral sources"
      ]
    },
    {
      phase: "Week 2",
      title: "Draft Core Narratives",
      tasks: [
        "Draft founder bio and business description",
        "Write problem and solution statements",
        "Create use-of-funds budgets for $1K, $4K, $10K, $25K"
      ]
    },
    {
      phase: "Week 3",
      title: "Activate Support Network",
      tasks: [
        "Contact Washington Women's Business Center",
        "Reach out to OMWBE and local resources",
        "Schedule advising appointments"
      ]
    },
    {
      phase: "Week 4",
      title: "Submit First Applications",
      tasks: [
        "Submit Amber Grant application",
        "Submit IFundWomen application",
        "Prepare HerRise and NASE applications"
      ]
    }
  ];

  const useOfFunds = [
    {
      amount: "$1,000",
      allocation: [
        { item: "Logo/brand refinement", percent: 15 },
        { item: "Website domain/hosting", percent: 15 },
        { item: "Printed outreach materials", percent: 20 },
        { item: "Background-check/recruitment tools", percent: 25 },
        { item: "Local networking and transportation", percent: 15 },
        { item: "Admin software", percent: 10 }
      ]
    },
    {
      amount: "$4,000",
      allocation: [
        { item: "Licensing contribution", percent: 37.5 },
        { item: "Website and Google Business setup", percent: 15 },
        { item: "Recruitment ads/materials", percent: 20 },
        { item: "Liability/compliance setup", percent: 15 },
        { item: "Community outreach and networking", percent: 7.5 },
        { item: "Software/admin tools", percent: 5 }
      ]
    },
    {
      amount: "$10,000",
      allocation: [
        { item: "Home care license", percent: 30 },
        { item: "Insurance/legal/compliance", percent: 20 },
        { item: "Website/branding/marketing", percent: 15 },
        { item: "Caregiver recruitment/onboarding", percent: 15 },
        { item: "Background checks/admin systems", percent: 10 },
        { item: "Operating reserve", percent: 10 }
      ]
    },
    {
      amount: "$25,000",
      allocation: [
        { item: "Licensing/insurance/compliance", percent: 24 },
        { item: "Caregiver recruitment and onboarding", percent: 20 },
        { item: "Marketing/client acquisition", percent: 16 },
        { item: "Payroll/operating reserve", percent: 20 },
        { item: "Website/CRM/admin systems", percent: 8 },
        { item: "Community impact pilot", percent: 12 }
      ]
    }
  ];

  const grantPacketDocuments = [
    { doc: "1-page Executive Summary", content: "Business name, founder, problem, solution, target market, funding need, impact" },
    { doc: "Founder Bio", content: "Professional story showing lived experience, care background, single-mother motivation" },
    { doc: "Problem Statement", content: "Caregiver reliability gaps, family stress, Adult Family Home staffing strain" },
    { doc: "Solution Statement", content: "Values-based CNA/HCA staffing model, screening, cultural competence, reliability" },
    { doc: "Use-of-Funds Statement", content: "Exactly how $1K, $4K, $10K, $15K, or $25K would be used" },
    { doc: "Startup Budget", content: "Licensing, insurance, website, recruitment, payroll buffer, compliance" },
    { doc: "Licensing Roadmap", content: "Completed training, remaining steps, expected cost, timeline, DSHS path" },
    { doc: "Financial Summary", content: "Year 1-5 projections: clients, revenue, expenses, break-even, cash balance" },
    { doc: "Proof-of-Demand Tracker", content: "Families interviewed, AFHs contacted, caregivers interested, letters of support" },
    { doc: "Impact Metrics", content: "Jobs created, caregivers employed, families served, community beneficiaries" }
  ];

  const businessSnapshot = [
    { label: "Founder/CEO", value: "Sequoia Conner" },
    { label: "Location", value: "Lakewood, Washington, USA" },
    { label: "Business Model", value: "CNA/HCA staffing and home care services" },
    { label: "Current Stage", value: "MVP built / pre-revenue; $1,000 raised" },
    { label: "Billing Rate", value: "$30/hour; Caregiver pay: $20/hour; 33% margin" },
    { label: "Key Readiness", value: "Training completed, business plan, 5-year model, branding, market research" }
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
              <p className="text-xs text-muted-foreground">Funding Opportunities Report</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => setActiveTab("overview")} className="text-sm font-medium hover:text-primary transition-colors">Overview</button>
            <button onClick={() => setActiveTab("opportunities")} className="text-sm font-medium hover:text-primary transition-colors">Opportunities</button>
            <button onClick={() => setActiveTab("action")} className="text-sm font-medium hover:text-primary transition-colors">Action Plan</button>
            <button onClick={() => setActiveTab("resources")} className="text-sm font-medium hover:text-primary transition-colors">Resources</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/hero-forevergreen-bcCuaGV2erRu3iLJhXiEoy.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="container relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Funding Opportunities for ForeverGreen Staffing Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              A comprehensive guide to grants, funding, and business support for a woman-led CNA staffing and home care startup in Lakewood, Washington.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View Opportunities <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Snapshot */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Business Snapshot</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessSnapshot.map((item, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-l-accent">
                <p className="text-sm text-muted-foreground font-medium mb-2">{item.label}</p>
                <p className="text-lg font-semibold text-foreground">{item.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Tabs Content */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              <TabsTrigger value="action">Action Plan</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div 
                className="rounded-lg overflow-hidden mb-8"
                style={{
                  backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/funding-opportunities-section-6kqRg6onXppQBPPVGKUBNz.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px"
                }}
              />
              
              <Card className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-4 text-primary">Executive Summary</h3>
                <div className="space-y-4 text-foreground">
                  <p>
                    ForeverGreen is a strong candidate for women-focused startup grants, community-impact microgrants, small business technical assistance, and Washington-based capital readiness programs. The business has a clear social need, founder-market fit, a measurable service model, and a compelling story.
                  </p>
                  <p className="font-semibold text-primary">
                    The strongest funding angle is not simply "home care staffing"; it is "a woman-led care workforce business solving caregiver reliability gaps while creating stable jobs for caregivers and reinvesting impact into underserved women and children."
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-6 text-primary">Immediate Recommendations</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Apply first to high-priority opportunities</p>
                      <p className="text-sm text-muted-foreground">Amber Grant, IFundWomen, HerRise MicroGrant, and NASE Growth Grant are accessible to early-stage women-led businesses</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Leverage support organizations</p>
                      <p className="text-sm text-muted-foreground">Use Washington Women's Business Center, OMWBE, and local resources to strengthen business plan and applications</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Prepare reusable grant packet</p>
                      <p className="text-sm text-muted-foreground">Create standard documents that can be tailored for each opportunity to save time and ensure consistency</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-4 text-primary">Funding Positioning</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-l-accent pl-4">
                    <h4 className="font-semibold text-primary mb-2">Women-owned Business</h4>
                    <p className="text-sm text-foreground">Use Sequoia's leadership, lived experience, and single-mother founder story as the grant narrative</p>
                  </div>
                  <div className="border-l-4 border-l-accent pl-4">
                    <h4 className="font-semibold text-primary mb-2">Healthcare/Workforce Shortage</h4>
                    <p className="text-sm text-foreground">Emphasize caregiver shortages, CNA reliability, vulnerable adults, and DSHS-connected care needs</p>
                  </div>
                  <div className="border-l-4 border-l-accent pl-4">
                    <h4 className="font-semibold text-primary mb-2">Community Impact</h4>
                    <p className="text-sm text-foreground">Highlight job creation for caregivers/single mothers and reinvestment into Ghana programs</p>
                  </div>
                  <div className="border-l-4 border-l-accent pl-4">
                    <h4 className="font-semibold text-primary mb-2">Pre-revenue/Startup</h4>
                    <p className="text-sm text-foreground">Focus on launch funding for licensing, insurance, recruitment, website, and compliance setup</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Opportunities Tab */}
            <TabsContent value="opportunities" className="space-y-6">
              <div 
                className="rounded-lg overflow-hidden mb-8"
                style={{
                  backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/funding-opportunities-section-6kqRg6onXppQBPPVGKUBNz.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px"
                }}
              />

              <div className="space-y-4">
                {fundingOpportunities.map((opp, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-l-4" style={{borderLeftColor: opp.priority === "High" ? "#1B5E3F" : "#D4A574"}}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-primary">{opp.name}</h4>
                          <Badge variant={opp.priority === "High" ? "default" : "secondary"}>
                            {opp.priority} Priority
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{opp.fit}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold mb-1">FUNDING/SUPPORT</p>
                        <p className="text-sm text-foreground">{opp.funding}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold mb-1">RECOMMENDED ACTION</p>
                        <p className="text-sm text-foreground">{opp.action}</p>
                      </div>
                    </div>

                    <a 
                      href={opp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                    >
                      Visit Website <ExternalLink className="w-3 h-3" />
                    </a>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Action Plan Tab */}
            <TabsContent value="action" className="space-y-8">
              <div 
                className="rounded-lg overflow-hidden mb-8"
                style={{
                  backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/action-plan-section-Kmtatz7xhnysQrbFnrHSmt.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px"
                }}
              />

              <h3 className="text-2xl font-bold text-primary">30-Day Action Plan</h3>
              
              <div className="space-y-4">
                {actionPlan.map((phase, idx) => (
                  <Card key={idx} className="p-6 bg-white">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-2">
                          <Badge variant="outline" className="border-accent text-accent">{phase.phase}</Badge>
                          <h4 className="text-lg font-bold text-primary">{phase.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, taskIdx) => (
                            <li key={taskIdx} className="flex gap-3 text-sm text-foreground">
                              <span className="text-accent font-bold">•</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-8 bg-accent/10 border-accent">
                <h4 className="font-bold text-primary mb-4">Grant Application Packet to Build Now</h4>
                <p className="text-sm text-foreground mb-6">
                  Prepare reusable content once, then tailor it for each opportunity. Store these documents in a shared folder and update weekly.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {grantPacketDocuments.map((doc, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg">
                      <p className="font-semibold text-primary text-sm mb-2">{doc.doc}</p>
                      <p className="text-xs text-muted-foreground">{doc.content}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-8">
              <div 
                className="rounded-lg overflow-hidden mb-8"
                style={{
                  backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/resources-section-PfvSwWEorkqXrdDvCMxTLp.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px"
                }}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8 bg-white">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-accent" />
                    Use-of-Funds Budgets
                  </h3>
                  <div className="space-y-6">
                    {useOfFunds.map((budget, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-primary mb-3">{budget.amount}</h4>
                        <div className="space-y-2">
                          {budget.allocation.map((item, itemIdx) => (
                            <div key={itemIdx}>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-foreground">{item.item}</span>
                                <span className="text-muted-foreground">{item.percent}%</span>
                              </div>
                              <div className="w-full bg-secondary rounded-full h-2">
                                <div 
                                  className="bg-accent h-2 rounded-full transition-all"
                                  style={{width: `${item.percent}%`}}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-8 bg-white">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    Support Organizations
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-primary text-sm mb-1">Washington Women's Business Center</p>
                      <p className="text-xs text-muted-foreground mb-2">Free coaching, training, networking, funding readiness</p>
                      <a href="https://businessimpactnw.org/washington-womens-business-center/" target="_blank" rel="noopener noreferrer" className="text-accent text-xs hover:underline">Visit →</a>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-primary text-sm mb-1">Washington OMWBE</p>
                      <p className="text-xs text-muted-foreground mb-2">Certification support, technical assistance, contracting</p>
                      <a href="https://omwbe.wa.gov/" target="_blank" rel="noopener noreferrer" className="text-accent text-xs hover:underline">Visit →</a>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-primary text-sm mb-1">SBA Women-Owned Businesses</p>
                      <p className="text-xs text-muted-foreground mb-2">Counseling, training, certification guidance</p>
                      <a href="https://www.sba.gov/business-guide/grow-your-business/women-owned-businesses" target="_blank" rel="noopener noreferrer" className="text-accent text-xs hover:underline">Visit →</a>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-primary text-sm mb-1">Lakewood & Pierce County Resources</p>
                      <p className="text-xs text-muted-foreground mb-2">Local business support, networking, funding links</p>
                      <a href="https://cityoflakewood.us/business-resources/" target="_blank" rel="noopener noreferrer" className="text-accent text-xs hover:underline">Visit →</a>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-white">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  Grant Narrative
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Business Description</h4>
                    <p className="text-sm text-foreground">
                      ForeverGreen Staffing Solutions is a woman-owned CNA/HCA staffing and home care business based in Lakewood, Washington. The company will provide reliable, values-based caregiver staffing for seniors, adults with disabilities, Adult Family Homes, DSHS-connected clients, and private-pay families. The business is designed to address Washington's caregiver reliability gap while creating dignified employment pathways for caregivers and single mothers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Funding Need</h4>
                    <p className="text-sm text-foreground">
                      Startup funding will help ForeverGreen move from planning to launch by covering licensing, insurance, compliance setup, recruitment systems, website development, community outreach, and early operating costs. These investments will allow the business to secure licensing, recruit vetted caregivers, build a referral pipeline, and begin serving families who need consistent care support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Community Impact</h4>
                    <p className="text-sm text-foreground">
                      ForeverGreen will create local employment opportunities for caregivers, improve care continuity for vulnerable adults, support families struggling with unreliable care, and reinvest a portion of revenue into programs supporting single mothers locally and children in Ghana. The company's impact model connects every hour of care delivered in Washington to a broader mission of stability, dignity, and opportunity.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start with the 30-day action plan and begin building your grant packet today. The strongest funding opportunities are waiting.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Download Full Report <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-primary mb-3">ForeverGreen</h4>
              <p className="text-sm text-muted-foreground">Woman-owned CNA staffing and home care startup in Lakewood, Washington</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Opportunities</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Action Plan</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-3">Contact</h4>
              <p className="text-sm text-muted-foreground">Prepared by: Edwin Wasonga</p>
              <p className="text-sm text-muted-foreground">Date: June 2026</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 ForeverGreen Staffing Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
