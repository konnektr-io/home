import "./index.css";
import KonnektrLogo from "../assets/konnektr.svg";
import { MailingListDialog } from "../components/MailingListDialog.js";
import { Link } from "../components/Link.js";
import { CookieConsent } from "../components/cookie-consent.js";
import { Footer } from "../components/Footer.js";
import {
  DesktopNavigation,
  MobileNavigation,
} from "../components/Navigation.js";
import { trackSignInClick, trackDemoRequest } from "../utils/analytics.js";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set GTM consent using gtag API
  const setGtmConsent = (consent: "accepted" | "declined") => {
    if (typeof window !== "undefined") {
      // Declare window.gtag for TypeScript
      type GtagFn = (
        command: string,
        action: string,
        params: Record<string, string>
      ) => void;
      const gtag = (window as typeof window & { gtag?: GtagFn }).gtag;
      if (gtag) {
        if (consent === "accepted") {
          gtag("consent", "update", {
            ad_storage: "granted",
            analytics_storage: "granted",
          });
        } else {
          gtag("consent", "update", {
            ad_storage: "denied",
            analytics_storage: "denied",
          });
        }
      }
    }
  };

  // Callback for accepting cookies
  const handleAccept = () => {
    setGtmConsent("accepted");
  };

  // Callback for declining cookies
  const handleDecline = () => {
    setGtmConsent("declined");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-lg"
            >
              <img src={KonnektrLogo} alt="Konnektr Logo" className="h-7 w-7" />
              <span className="text-foreground">Konnektr</span>
            </Link>
            <DesktopNavigation className="hidden md:flex" />
            <div className="flex items-center gap-3">
              <a
                href="https://ktrlplane.konnektr.io"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSignInClick("header")}
                className="hidden md:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign In
              </a>
              <MailingListDialog
                trigger={
                  <button
                    onClick={() => trackDemoRequest("header")}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-9 px-4 py-2 bg-brand-teal text-black shadow hover:bg-brand-teal/90 cursor-pointer"
                  >
                    Request a Demo
                  </button>
                }
                title="Request a Demo"
                description="Get a personalized walkthrough and see how Konnektr can accelerate your digital twin journey."
                ctaText="Request Demo"
                product="demo"
                successMessage="Thank you! We'll be in touch soon."
              />
              <MobileNavigation />
            </div>
          </div>
        </div>
      </header>
      <main className="pt-16">{children}</main>
      <Footer />
      <CookieConsent
        variant="minimal"
        onAcceptCallback={handleAccept}
        onDeclineCallback={handleDecline}
      />
    </>
  );
}
