import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Contact() {
  const { user } = useAuth();
  const submitContactMutation = trpc.contact.submitInquiry.useMutation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general" as const,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitContactMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        inquiryType: formData.inquiryType,
      });
      
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", inquiryType: "general" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Have questions? Want to join our team? Looking for a caregiver? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Call or Text</h3>
              <a href="tel:+12533416755" className="text-xl font-semibold text-accent hover:underline">
                (253) 341-6755
              </a>
              <p className="text-sm text-muted-foreground mt-2">Mon-Fri, 9am-5pm PT</p>
            </Card>

            {/* Email */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
              <a href="mailto:hello@forevergreenstaffing.com" className="text-lg font-semibold text-accent hover:underline">
                hello@forevergreenstaffing.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours</p>
            </Card>

            {/* Location */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Location</h3>
              <p className="text-lg font-semibold text-foreground">Lakewood, Washington</p>
              <p className="text-sm text-muted-foreground mt-2">Serving all of Washington state</p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 bg-white">
              <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
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
                    <label className="block text-sm font-semibold text-foreground mb-2">Inquiry Type *</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="caregiver">Caregiver Application</option>
                      <option value="family">Family/Care Request</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject *</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitContactMutation.isPending}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white">
              <h3 className="text-lg font-bold text-primary mb-3">How quickly will I hear back?</h3>
              <p className="text-foreground">We aim to respond to all inquiries within 24 hours during business hours (Mon-Fri, 9am-5pm PT).</p>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-lg font-bold text-primary mb-3">What if I need immediate assistance?</h3>
              <p className="text-foreground">For urgent matters, please call us directly at (253) 341-6755. We prioritize emergency care requests.</p>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-lg font-bold text-primary mb-3">How do I apply as a caregiver?</h3>
              <p className="text-foreground">Select "Caregiver Application" in the inquiry type above, or visit our Careers page for more details about the application process.</p>
            </Card>

            <Card className="p-8 bg-white">
              <h3 className="text-lg font-bold text-primary mb-3">Can I request care for a specific date?</h3>
              <p className="text-foreground">Yes! Select "Family/Care Request" and let us know your needs. We'll work with you to find the best caregiver match.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
