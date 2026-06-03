import { useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const BREADCRUMB_MAP: Record<string, BreadcrumbItem[]> = {
  "/": [{ label: "Home", path: "/" }],
  "/about": [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ],
  "/services": [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
  ],
  "/for-families": [
    { label: "Home", path: "/" },
    { label: "For Families", path: "/for-families" },
  ],
  "/for-caregivers": [
    { label: "Home", path: "/" },
    { label: "For Caregivers", path: "/for-caregivers" },
  ],
  "/community-impact": [
    { label: "Home", path: "/" },
    { label: "Community Impact", path: "/community-impact" },
  ],
  "/funding-partnerships": [
    { label: "Home", path: "/" },
    { label: "Funding & Partnerships", path: "/funding-partnerships" },
  ],
  "/careers": [
    { label: "Home", path: "/" },
    { label: "Careers", path: "/careers" },
  ],
  "/blog": [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
  ],
  "/contact": [
    { label: "Home", path: "/" },
    { label: "Contact", path: "/contact" },
  ],
  "/support": [
    { label: "Home", path: "/" },
    { label: "Support", path: "/support" },
  ],
  "/resources": [
    { label: "Home", path: "/" },
    { label: "Resources", path: "/resources" },
  ],
  "/apply/caregiver": [
    { label: "Home", path: "/" },
    { label: "Apply", path: "/apply/caregiver" },
  ],
  "/apply/family": [
    { label: "Home", path: "/" },
    { label: "Request Care", path: "/apply/family" },
  ],
};

export default function Breadcrumb() {
  const [location] = useLocation();

  // Get breadcrumbs for current location
  let breadcrumbs = BREADCRUMB_MAP[location];

  // Handle blog articles
  if (!breadcrumbs && location.startsWith("/blog/")) {
    const articleId = location.split("/blog/")[1];
    breadcrumbs = [
      { label: "Home", path: "/" },
      { label: "Blog", path: "/blog" },
      { label: "Article", path: location },
    ];
  }

  // Don't show breadcrumb on home page
  if (!breadcrumbs || breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav
      className="bg-secondary/30 border-b border-border py-3"
      aria-label="Breadcrumb"
    >
      <div className="container">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index === 0 ? (
                <a
                  href={item.path}
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                >
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              ) : (
                <>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-foreground font-medium">{item.label}</span>
                  ) : (
                    <a
                      href={item.path}
                      className="text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                    >
                      {item.label}
                    </a>
                  )}
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
