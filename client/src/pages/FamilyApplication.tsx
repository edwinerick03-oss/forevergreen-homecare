import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

export default function FamilyApplication() {
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    careNeeds: "",
    hoursPerWeek: "",
    budget: "",
    message: "",
  });

  const submitMutation = trpc.applications.submitFamilyApp.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitMutation.mutateAsync({
        organizationName: formData.organizationName,
        contactName: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        careNeeds: formData.careNeeds,
        hoursPerWeek: formData.hoursPerWeek ? parseInt(formData.hoursPerWeek) : undefined,
        budget: formData.budget || undefined,
        message: formData.message,
      });

      setIsSuccess(true);
      toast.success("Request submitted! We'll contact you soon.");
      setTimeout(() => setLocation("/"), 3000);
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary mb-2">Request Submitted!</h2>
          <p className="text-foreground mb-6">
            Thank you for reaching out to ForeverGreen. We'll review your care needs and contact you within 2-3 business days to discuss how we can help.
          </p>
          <Button onClick={() => setLocation("/")} className="w-full">
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4 flex items-center gap-4">
          <button
            onClick={() => setLocation("/")}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-primary">Request Care Services</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">Find the Right Caregiver</h2>
              <p className="text-foreground">
                Tell us about your care needs and we'll match you with a trusted caregiver from our team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Organization Information */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Your Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organization/Family Name *
                    </label>
                    <Input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      placeholder="e.g., Lakewood Adult Family Home or Smith Family"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Person *
                    </label>
                    <Input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(206) 555-0123"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Care Needs */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Care Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Care Needs Description *
                    </label>
                    <Textarea
                      name="careNeeds"
                      value={formData.careNeeds}
                      onChange={handleChange}
                      placeholder="Tell us about the care needed. Who will be receiving care? What are their specific needs?"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Hours Per Week
                      </label>
                      <Input
                        type="number"
                        name="hoursPerWeek"
                        value={formData.hoursPerWeek}
                        onChange={handleChange}
                        placeholder="e.g., 20"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Budget/Rate Preference
                      </label>
                      <Input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="e.g., $20-25/hr or DSHS"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Additional Information</h3>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Anything Else We Should Know? *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any preferences, special requirements, or questions for us?"
                    rows={4}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setLocation("/")}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-accent hover:bg-accent/90"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </div>
            </form>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              We'll review your request and contact you within 2-3 business days. Questions? Email us at hello@forevergreen.care
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}
