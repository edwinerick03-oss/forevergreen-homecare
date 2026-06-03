import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

export default function CaregiverApplication() {
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    certification: "CNA",
    availability: "",
    motivation: "",
  });

  const submitMutation = trpc.applications.submitCaregiverApp.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, certification: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitMutation.mutateAsync({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience,
        certification: formData.certification,
        availability: formData.availability,
        motivation: formData.motivation,
      });

      setIsSuccess(true);
      toast.success("Application submitted! We'll be in touch soon.");
      setTimeout(() => setLocation("/"), 3000);
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
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
          <h2 className="text-2xl font-bold text-primary mb-2">Application Submitted!</h2>
          <p className="text-foreground mb-6">
            Thank you for your interest in joining ForeverGreen. We'll review your application and get back to you within 3-5 business days.
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
          <h1 className="text-xl font-bold text-primary">Caregiver Application</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-primary mb-2">Join Our Team</h2>
              <p className="text-foreground">
                We're looking for caregivers who care. Tell us about yourself and why you want to work with ForeverGreen.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
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

              {/* Experience & Certification */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Experience & Certification</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Certification *
                    </label>
                    <Select value={formData.certification} onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CNA">Certified Nursing Assistant (CNA)</SelectItem>
                        <SelectItem value="HCA">Home Care Aide (HCA)</SelectItem>
                        <SelectItem value="RN">Registered Nurse (RN)</SelectItem>
                        <SelectItem value="LPN">Licensed Practical Nurse (LPN)</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Years of Experience *
                    </label>
                    <Textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Tell us about your caregiving experience..."
                      rows={4}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Availability & Motivation */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Availability & Motivation</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Availability *
                    </label>
                    <Textarea
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      placeholder="What days/times are you available? Any scheduling preferences?"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Why ForeverGreen? *
                    </label>
                    <Textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      placeholder="Tell us what draws you to ForeverGreen and what matters to you in your work..."
                      rows={4}
                      required
                    />
                  </div>
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
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              We review applications within 3-5 business days. Questions? Email us at hello@forevergreen.care
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}
