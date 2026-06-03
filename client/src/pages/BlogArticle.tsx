import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const articles: Record<string, any> = {
  "caregiver-wellness": {
    title: "Caregiver Wellness: Preventing Burnout While Caring for Others",
    author: "ForeverGreen Team",
    date: "June 1, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=1200&h=600&fit=crop",
    category: "Caregiver Support",
    content: `
Caregiving is one of the most rewarding yet demanding professions. Whether you're a CNA, home health aide, or family caregiver, the emotional and physical toll can be significant. At ForeverGreen, we believe that taking care of yourself is essential to providing quality care for others.

## Understanding Caregiver Burnout

Burnout happens when the demands of caregiving exceed your resources to cope. Signs include:
- Chronic fatigue and sleep problems
- Emotional exhaustion
- Difficulty concentrating
- Increased irritability or frustration
- Feeling disconnected from your work

## Practical Wellness Strategies

### 1. Set Boundaries
It's okay to say no. Establish clear work hours and stick to them. Your personal time is sacred.

### 2. Build a Support Network
Connect with other caregivers. Share experiences, challenges, and solutions. You're not alone in this.

### 3. Practice Self-Care
- Exercise regularly (even 20 minutes of walking helps)
- Maintain a healthy diet
- Get adequate sleep
- Engage in activities you enjoy

### 4. Seek Professional Support
Don't hesitate to talk to a counselor or therapist. Mental health is just as important as physical health.

### 5. Take Regular Breaks
Use your days off to truly rest and recharge. Don't think about work during your time off.

## Why ForeverGreen Supports Caregiver Wellness

We believe that well-supported caregivers provide better care. That's why we:
- Offer flexible scheduling to prevent burnout
- Provide professional development opportunities
- Foster a community of mutual support
- Ensure fair compensation for your work

Your wellbeing matters to us. If you're struggling, reach out. We're here to support you.
    `
  },
  "home-care-guide": {
    title: "The Complete Guide to Home Care: What Families Need to Know",
    author: "ForeverGreen Team",
    date: "May 25, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=1200&h=600&fit=crop",
    category: "Family Resources",
    content: `
Deciding to bring professional care into your home is a big decision. This guide walks you through everything you need to know.

## Types of Home Care Services

### Personal Care Assistance
Help with activities of daily living (ADLs):
- Bathing and grooming
- Dressing and toileting
- Mobility assistance
- Meal preparation

### Medical Care
For those with specific health needs:
- Medication management
- Wound care
- Physical therapy support
- Post-operative care

### Companionship Care
Emotional and social support:
- Conversation and engagement
- Accompanying to appointments
- Light housekeeping
- Meal preparation

## Choosing the Right Caregiver

### What to Look For
- Professional certifications (CNA, HHA)
- Background check clearance
- Experience with your specific needs
- Personality fit with your family
- References from previous clients

### Questions to Ask
1. What is your experience with [specific condition]?
2. How do you handle emergencies?
3. What is your approach to patient dignity and respect?
4. How do you communicate with family members?
5. What are your availability and flexibility?

## Getting Started

### The Assessment
A good home care agency will conduct a thorough assessment of your needs before matching you with a caregiver.

### Trial Period
Start with a trial period to ensure the match works well for your family.

### Ongoing Communication
Regular check-ins with your care coordinator ensure quality and address any concerns.

## Cost Considerations

Home care costs vary based on:
- Type of care needed
- Frequency and duration
- Geographic location
- Caregiver qualifications

Many families use a combination of private pay, insurance, Medicaid, and family support.

## Why Quality Matters

Your loved one deserves care from someone who is trained, vetted, and genuinely committed to their wellbeing. At ForeverGreen, that's our standard.
    `
  },
  "impact-in-ghana": {
    title: "Making a Global Difference: ForeverGreen's Impact in Ghana",
    author: "ForeverGreen Team",
    date: "May 18, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop",
    category: "Community Impact",
    content: `
At ForeverGreen, we believe that opportunity should exist everywhere. That's why a portion of every dollar we earn goes directly to supporting communities in Ghana.

## Our Programs in Ghana

### Education for All
We provide scholarships and educational support to children in partner communities:
- School fees and uniforms
- Educational materials and books
- Teacher training and support
- School infrastructure improvements

### Women's Economic Empowerment
We believe in lifting up women through skills and opportunity:
- Vocational training programs
- Microfinance support
- Business development
- Market access

### Community Health
Supporting healthcare access and maternal health programs that save lives.

## Stories of Impact

### Maria's Story
Maria was a student in Accra with dreams of becoming a nurse. Thanks to our scholarship program, she completed secondary school and is now in nursing college. "ForeverGreen gave me hope," she says. "Now I can help my community."

### Ama's Cooperative
Ama and 15 other women completed our business training program. They started a cooperative producing and selling traditional crafts. Their income has tripled, and they're now training other women.

## How Your Support Makes a Difference

Every donation directly impacts lives:
- $50 provides school supplies for 5 children
- $250 funds a month of vocational training
- $500 provides a full-year scholarship
- $1,000 supports a woman's business startup

## Our Commitment

We're committed to sustainable, community-led development. We work with local partners who understand their communities and can ensure lasting impact.

When you support ForeverGreen, you're not just getting quality care—you're investing in opportunity globally.
    `
  }
};

export default function BlogArticle() {
  const [location, setLocation] = useLocation();
  const slug = location.split("/blog/")[1];
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-foreground mb-8">Sorry, we couldn't find that article.</p>
          <Button onClick={() => setLocation("/blog")} className="bg-accent hover:bg-accent/90">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 md:py-12 bg-primary text-primary-foreground">
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => setLocation("/blog")}
            className="text-primary-foreground hover:bg-primary-foreground/10 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
          <div className="flex flex-wrap gap-6 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <span className="text-sm">{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden h-96">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {article.content.split('\n').map((paragraph: string, idx: number) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={idx} className="text-3xl font-bold text-primary mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={idx} className="text-2xl font-bold text-primary mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('-')) {
                return (
                  <li key={idx} className="text-foreground ml-6 mb-2">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={idx} className="text-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Share & CTA */}
          <Card className="p-8 bg-accent/10 border-l-4 border-l-accent">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Share this article</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-bold text-primary mb-3">Ready to join ForeverGreen?</h3>
              <p className="text-foreground mb-4">Whether you're looking for quality care or meaningful work, we're here to help.</p>
              <div className="flex gap-3">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Apply as Caregiver
                </Button>
                <Button variant="outline">
                  Request Care
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(articles)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, art]) => (
                <Card
                  key={key}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setLocation(`/blog/${key}`)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-accent font-semibold mb-2">{art.category}</p>
                    <h3 className="text-lg font-bold text-primary mb-3 line-clamp-2">{art.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{art.date}</span>
                      <span>{art.readTime}</span>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
