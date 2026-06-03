import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ForFamilies from "./pages/ForFamilies";
import ForCaregivers from "./pages/ForCaregivers";
import CommunityImpact from "./pages/CommunityImpact";
import FundingPartnerships from "./pages/FundingPartnerships";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CaregiverApplication from "./pages/CaregiverApplication";
import FamilyApplication from "./pages/FamilyApplication";
import AdminDashboard from "./pages/AdminDashboard";
import Downloads from "./pages/Downloads";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/for-families"} component={ForFamilies} />
      <Route path={"/for-caregivers"} component={ForCaregivers} />
      <Route path={"/community-impact"} component={CommunityImpact} />
      <Route path={"/funding-partnerships"} component={FundingPartnerships} />
      <Route path={"/careers"} component={Careers} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/apply/caregiver"} component={CaregiverApplication} />
      <Route path={"/apply/family"} component={FamilyApplication} />
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/resources"} component={Downloads} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
