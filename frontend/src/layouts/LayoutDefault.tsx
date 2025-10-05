import "./index.css";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../components/ui/popover";
import { ChevronDown } from "lucide-react";
import { navigate } from "vike/client/router";
import KonnektrLogo from "../assets/konnektr.svg";
import { MailingListDialog } from "../components/MailingListDialog.js";
import { Link } from "../components/Link.js";
import { CookieConsent } from "../components/cookie-consent.js";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleProductClick = (path: string) => {
    navigate(path);
    setPopoverOpen(false);
  };

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
      {/* Restored original header with logo, popover, and buttons */}
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
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              {/* Popover for Products */}
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger className="flex items-center gap-1 hover:text-foreground transition-colors outline-none cursor-pointer">
                  Products <ChevronDown className="h-4 w-4" />
                </PopoverTrigger>
                <PopoverContent className="bg-brand-dark border-white/20 text-foreground w-80 p-4 rounded-xl shadow-xl">
                  <div className="space-y-4">
                    <button
                      onClick={() => handleProductClick("/assembler")}
                      className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-brand-teal/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">
                          Konnektr Assembler
                        </span>
                        <span className="px-2 py-0.5 text-xs bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">
                          Early Access
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        AI-powered digital twin builder
                      </span>
                    </button>
                    <button
                      onClick={() => handleProductClick("/graph")}
                      className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-brand-teal/10 transition-colors cursor-pointer"
                    >
                      <span className="font-semibold text-foreground">
                        Konnektr Graph
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Scalable graph database & API
                      </span>
                    </button>
                    <button
                      onClick={() => handleProductClick("/flow")}
                      className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-brand-teal/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">
                          Konnektr Flow
                        </span>
                        <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                          Coming Soon
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Real-time data & event orchestrator
                      </span>
                    </button>
                    <button
                      onClick={() => handleProductClick("/compass")}
                      className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-brand-teal/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">
                          Konnektr Compass
                        </span>
                        <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                          Coming Soon
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Analytics & insights platform
                      </span>
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </nav>
            <div className="flex items-center gap-4">
              {/* <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign In
              </a> */}
              <MailingListDialog
                trigger={
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-9 px-4 py-2 bg-brand-teal text-black shadow hover:bg-brand-teal/90 cursor-pointer">
                    Request a Demo
                  </button>
                }
                title="Request a Demo"
                description="Get a personalized walkthrough and see how Konnektr can accelerate your digital twin journey."
                ctaText="Request Demo"
                product="demo"
                successMessage="Thank you! We'll be in touch soon."
              />
            </div>
          </div>
        </div>
      </header>
      <main className="pt-16">{children}</main>
      {/* Render CookieConsent outside main/header for debugging */}
      <CookieConsent
        variant="minimal"
        onAcceptCallback={handleAccept}
        onDeclineCallback={handleDecline}
      />
    </>
  );
}
