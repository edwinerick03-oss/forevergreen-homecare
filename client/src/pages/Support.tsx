import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Globe, TrendingUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Support() {
  const { user } = useAuth();
  const submitSupportMutation = trpc.support.submitSupport.useMutation();
  
  const [formData, setFormData] = useState({
    supporterName: "",
    email: "",
    phone: "",
    supportType: "monetary" as const,
    message: "",
    amount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitSupportMutation.mutateAsync({
        supporterName: formData.supporterName,
        email: formData.email,
        phone: formData.phone,
        supportType: formData.supportType,
        message: formData.message,
        amount: formData.amount,
      });
      
      toast.success("Thank you for your support! We'll be in touch soon.");
      setFormData({ supporterName: "", email: "", phone: "", supportType: "monetary", message: "", amount: "" });
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
      console.error(error);
    }
  };

  const supportOptions = [
    {
      icon: Heart,
      title: "Monetary Donation",
      description: "Support our mission with a financial contribution",
      type: "monetary"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Donate your time and skills to help our community",
      type: "volunteer"
    },
    {
      icon: Globe,
      title: "Partnership",
      description: "Collaborate with us to expand our impact",
      type: "partnership"
    },
    {
      icon: TrendingUp,
      title: "Advocacy",
      description: "Help spread the word about ForeverGreen",
      type: "advocacy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Your support helps us create meaningful employment, provide quality care, and build opportunity in communities that need it most.
          </p>
        </div>
      </section>

      {/* Impact of Support */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">How Your Support Makes a Difference</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-8 bg-white text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-accent mb-3">$50</div>
              <p className="text-foreground font-semibold mb-2">Provides training materials for one caregiver</p>
              <p className="text-sm text-muted-foreground">Professional development and certification support</p>
            </Card>

            <Card className="p-8 bg-white text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-accent mb-3">$250</div>
              <p className="text-foreground font-semibold mb-2">Supports one family's care for a month</p>
              <p className="text-sm text-muted-foreground">Enables access to quality, affordable caregiving</p>
            </Card>

            <Card className="p-8 bg-white text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-accent mb-3">$500</div>
              <p className="text-foreground font-semibold mb-2">Funds a child's education in Ghana</p>
              <p className="text-sm text-muted-foreground">Annual scholarship for school and materials</p>
            </Card>

            <Card className="p-8 bg-white text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-accent mb-3">$1,000</div>
              <p className="text-foreground font-semibold mb-2">Supports a woman's skills training</p>
              <p className="text-sm text-muted-foreground">Economic empowerment program in Ghana</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Ways to Support</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {supportOptions.map((option, idx) => {
              const Icon = option.icon;
              return (
                <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setFormData(prev => ({ ...prev, supportType: option.type as any }))}>
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{option.title}</h3>
                  <p className="text-sm text-foreground">{option.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 bg-white">
              <h2 className="text-3xl font-bold text-primary mb-8">Tell Us How You'd Like to Help</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                    <Input
                      type="text"
                      name="supporterName"
                      value={formData.supporterName}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(253) 341-6755"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Type of Support *</label>
                    <select
                      name="supportType"
                      value={formData.supportType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    >
                      <option value="monetary">Monetary Donation</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="partnership">Partnership</option>
                      <option value="advocacy">Advocacy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {formData.supportType === "monetary" && (
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Donation Amount</label>
                    <div className="flex gap-2 mb-4">
                      {["$50", "$250", "$500", "$1,000"].map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={formData.amount === amount ? "default" : "outline"}
                          onClick={() => setFormData(prev => ({ ...prev, amount }))}
                          className="flex-1"
                        >
                          {amount}
                        </Button>
                      ))}
                    </div>
                    <Input
                      type="text"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="Custom amount (e.g., $350)"
                      className="w-full"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your support or any questions you have..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitSupportMutation.isPending}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {submitSupportMutation.isPending ? "Submitting..." : "Submit Support"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Support Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white">
              <h3 className="text-lg font-bold text-primary mb-3">Is my donation tax-deductible?</h3>
              <p className="text-foreground">We're working on 501(c)(3) nonprofit status. Contact us for current information about tax deductibility.</p>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-lg font-bold text-primary mb-3">How is my donation used?</h3>
              <p className="text-foreground">100% of donations go directly to supporting caregivers, families, and community programs in Washington and Ghana.</p>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-lg font-bold text-primary mb-3">Can I set up a recurring donation?</h3>
              <p className="text-foreground">Yes! Contact us to set up monthly giving. Recurring donors receive impact updates and special recognition.</p>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-lg font-bold text-primary mb-3">Do you accept corporate sponsorships?</h3>
              <p className="text-foreground">Absolutely! We'd love to partner with businesses. Contact us to discuss partnership opportunities.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
