import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { ArrowLeft, Mail, Phone, Calendar, CheckCircle2, Clock, XCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"caregivers" | "families" | "contact" | "support">("caregivers");

  const caregiverAppsQuery = trpc.applications.getCaregiverApplications.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const familyAppsQuery = trpc.applications.getFamilyApplications.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const updateCaregiverStatusMutation = trpc.applications.updateCaregiverStatus.useMutation({
    onSuccess: () => {
      caregiverAppsQuery.refetch();
      toast.success("Status updated");
    },
  });

  const updateFamilyStatusMutation = trpc.applications.updateFamilyStatus.useMutation({
    onSuccess: () => {
      familyAppsQuery.refetch();
      toast.success("Status updated");
    },
  });

  const contactInquiriesQuery = trpc.contact.getInquiries.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const supportSubmissionsQuery = trpc.support.getSupport.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const updateContactStatusMutation = trpc.contact.updateInquiryStatus.useMutation({
    onSuccess: () => {
      contactInquiriesQuery.refetch();
      toast.success("Status updated");
    },
  });

  const updateSupportStatusMutation = trpc.support.updateSupportStatus.useMutation({
    onSuccess: () => {
      supportSubmissionsQuery.refetch();
      toast.success("Status updated");
    },
  });

  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary mb-2">Access Denied</h2>
          <p className="text-foreground mb-6">
            You don't have permission to access this page. Only admins can view applications.
          </p>
          <Button onClick={() => setLocation("/")} className="w-full">
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "reviewed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="w-4 h-4" />;
      case "rejected":
        return <XCircle className="w-4 h-4" />;
      case "reviewed":
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLocation("/")}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-primary">Admin Dashboard</h1>
          </div>
          <div className="text-sm text-muted-foreground">
            Logged in as: <span className="font-semibold">{user?.name}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border overflow-x-auto">
          <button
            onClick={() => setActiveTab("caregivers")}
            className={`px-4 py-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "caregivers"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Caregiver Apps ({caregiverAppsQuery.data?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab("families")}
            className={`px-4 py-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "families"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Family Requests ({familyAppsQuery.data?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-4 py-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "contact"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Contact Inquiries ({contactInquiriesQuery.data?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab("support")}
            className={`px-4 py-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "support"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Support/Donations ({supportSubmissionsQuery.data?.length || 0})
          </button>
        </div>

        {/* Caregiver Applications */}
        {activeTab === "caregivers" && (
          <div className="space-y-4">
            {caregiverAppsQuery.isLoading && <p>Loading applications...</p>}
            {caregiverAppsQuery.data?.length === 0 && (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No caregiver applications yet.</p>
              </Card>
            )}
            {caregiverAppsQuery.data?.map((app) => (
              <Card key={app.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{app.fullName}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${app.email}`} className="hover:text-primary">
                          {app.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        <a href={`tel:${app.phone}`} className="hover:text-primary">
                          {app.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(app.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(app.status)} flex items-center gap-1`}>
                    {getStatusIcon(app.status)}
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Certification</p>
                    <p className="text-muted-foreground">{app.certification}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Experience</p>
                    <p className="text-muted-foreground">{app.experience}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Availability</p>
                    <p className="text-muted-foreground">{app.availability}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Motivation</p>
                    <p className="text-muted-foreground line-clamp-2">{app.motivation}</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Select
                    value={app.status}
                    onValueChange={(status) => {
                      updateCaregiverStatusMutation.mutate({
                        id: app.id,
                        status: status as any,
                      });
                    }}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="reviewed">Reviewed</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Family Applications */}
        {activeTab === "families" && (
          <div className="space-y-4">
            {familyAppsQuery.isLoading && <p>Loading applications...</p>}
            {familyAppsQuery.data?.length === 0 && (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No family requests yet.</p>
              </Card>
            )}
            {familyAppsQuery.data?.map((app) => (
              <Card key={app.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{app.organizationName}</h3>
                    <p className="text-sm text-muted-foreground">Contact: {app.contactName}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${app.email}`} className="hover:text-primary">
                          {app.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        <a href={`tel:${app.phone}`} className="hover:text-primary">
                          {app.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(app.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(app.status)} flex items-center gap-1`}>
                    {getStatusIcon(app.status)}
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Hours Per Week</p>
                    <p className="text-muted-foreground">{app.hoursPerWeek || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Budget</p>
                    <p className="text-muted-foreground">{app.budget || "Not specified"}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold text-foreground">Care Needs</p>
                    <p className="text-muted-foreground">{app.careNeeds}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold text-foreground">Additional Message</p>
                    <p className="text-muted-foreground">{app.message}</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Select
                    value={app.status}
                    onValueChange={(status) => {
                      updateFamilyStatusMutation.mutate({
                        id: app.id,
                        status: status as any,
                      });
                    }}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="reviewed">Reviewed</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Contact Inquiries */}
        {activeTab === "contact" && (
          <div className="space-y-4">
            {contactInquiriesQuery.isLoading && <p>Loading inquiries...</p>}
            {contactInquiriesQuery.data?.length === 0 && (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No contact inquiries yet.</p>
              </Card>
            )}
            {contactInquiriesQuery.data?.map((inquiry: any) => (
              <Card key={inquiry.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{inquiry.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{inquiry.subject}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${inquiry.email}`} className="hover:text-primary">
                          {inquiry.email}
                        </a>
                      </div>
                      {inquiry.phone && (
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${inquiry.phone}`} className="hover:text-primary">
                            {inquiry.phone}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(inquiry.status)} flex items-center gap-1`}>
                    {getStatusIcon(inquiry.status)}
                    {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                  </Badge>
                </div>

                <div className="mb-4 text-sm">
                  <p className="font-semibold text-foreground mb-2">Type: {inquiry.inquiryType}</p>
                  <p className="text-foreground bg-secondary/30 p-3 rounded">{inquiry.message}</p>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Select
                    value={inquiry.status}
                    onValueChange={(status) => {
                      updateContactStatusMutation.mutate({
                        id: inquiry.id,
                        status: status as any,
                      });
                    }}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="responded">Responded</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Support/Donations */}
        {activeTab === "support" && (
          <div className="space-y-4">
            {supportSubmissionsQuery.isLoading && <p>Loading submissions...</p>}
            {supportSubmissionsQuery.data?.length === 0 && (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">No support submissions yet.</p>
              </Card>
            )}
            {supportSubmissionsQuery.data?.map((support: any) => (
              <Card key={support.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{support.supporterName}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Type: {support.supportType}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${support.email}`} className="hover:text-primary">
                          {support.email}
                        </a>
                      </div>
                      {support.phone && (
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${support.phone}`} className="hover:text-primary">
                            {support.phone}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(support.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(support.status)} flex items-center gap-1`}>
                    {getStatusIcon(support.status)}
                    {support.status.charAt(0).toUpperCase() + support.status.slice(1)}
                  </Badge>
                </div>

                <div className="mb-4 text-sm">
                  {support.amount && (
                    <p className="font-semibold text-foreground mb-2">Amount: {support.amount}</p>
                  )}
                  {support.message && (
                    <p className="text-foreground bg-secondary/30 p-3 rounded">{support.message}</p>
                  )}
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Select
                    value={support.status}
                    onValueChange={(status) => {
                      updateSupportStatusMutation.mutate({
                        id: support.id,
                        status: status as any,
                      });
                    }}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
