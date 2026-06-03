import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "5 Signs You Need In-Home Care Support",
      excerpt: "Recognizing when it's time to bring in professional caregiving support can be difficult. Here are five clear signs that in-home care might be right for your family.",
      category: "For Families",
      author: "Sequoia",
      date: "June 1, 2026",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "What Makes a Great Caregiver?",
      excerpt: "It's not just about certifications. We believe the best caregivers combine technical skills with genuine compassion and reliability. Here's what we look for.",
      category: "For Caregivers",
      author: "Sequoia",
      date: "May 28, 2026",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Understanding Washington's Home Care Regulations",
      excerpt: "Navigating state regulations can be confusing. We break down what you need to know about licensing, background checks, and compliance standards.",
      category: "Resources",
      author: "ForeverGreen Team",
      date: "May 25, 2026",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Building Trust with Your Caregiver",
      excerpt: "A strong relationship between family and caregiver is built on communication, respect, and clear expectations. Here's how to get started on the right foot.",
      category: "For Families",
      author: "Sequoia",
      date: "May 22, 2026",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "The Business of Care: How We Stay Sustainable",
      excerpt: "Transparency matters. Here's how we price our services, how we pay our caregivers, and how we reinvest in the communities we serve.",
      category: "About Us",
      author: "Sequoia",
      date: "May 19, 2026",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Stories from Our Caregivers",
      excerpt: "Meet some of the amazing people who make ForeverGreen work. Their stories of impact, growth, and meaningful work inspire us every day.",
      category: "Stories",
      author: "ForeverGreen Team",
      date: "May 15, 2026",
      readTime: "10 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "For Families": "bg-blue-100 text-blue-800",
      "For Caregivers": "bg-green-100 text-green-800",
      "Resources": "bg-purple-100 text-purple-800",
      "About Us": "bg-amber-100 text-amber-800",
      "Stories": "bg-pink-100 text-pink-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Insights, stories, and practical guidance for caregivers, families, and partners.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div
              className="rounded-lg overflow-hidden h-96"
              style={{
                backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663607234030/SUYffTLqfYfkiJeh93ob3u/hero-forevergreen-bcCuaGV2erRu3iLJhXiEoy.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent border-0">Featured Article</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                5 Signs You Need In-Home Care Support
              </h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Recognizing when it's time to bring in professional caregiving support can be difficult. Here are five clear signs that in-home care might be right for your family, and how to know if now is the right time to reach out.
              </p>
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>June 1, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By Sequoia</span>
                </div>
                <span>5 min read</span>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Read Article <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="p-8 bg-white hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <Badge className={`${getCategoryColor(article.category)} border-0`}>
                    {article.category}
                  </Badge>
                  <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-foreground mb-6 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get insights, stories, and resources delivered to your inbox. No spam, just real content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder:text-muted-foreground"
            />
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
