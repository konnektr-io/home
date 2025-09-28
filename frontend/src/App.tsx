import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import HomePage from "./HomePage";
import AssemblerPage from "./pages/Assembler";
import GraphPage from "./pages/Graph";
import FlowPage from "./pages/Flow";
import CompassPage from "./pages/Compass";
import KonnektrLogo from "./assets/konnektr.svg";
import { MailingListDialog } from "./components/MailingListDialog";

function App() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = (path: string) => {
    navigate(path);
    setPopoverOpen(false);
  };

  return (
    <>
      {/* Restored original header with logo, popover, and buttons */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold text-lg"
            >
              <img src={KonnektrLogo} alt="Konnektr Logo" className="h-7 w-7" />
              <span className="text-foreground">Konnektr</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              {/* Popover for Products */}
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger className="flex items-center gap-1 hover:text-foreground transition-colors outline-none">
                  Products <ChevronDown className="h-4 w-4" />
                </PopoverTrigger>
                <PopoverContent className="bg-brand-dark border-white/20 text-foreground w-80 p-4 rounded-xl shadow-xl">
                  <div className="space-y-4">
                    <button
                      onClick={() => handleProductClick("/assembler")}
                      className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-brand-teal/10 transition-colors"
                    >
                      <span className="font-semibold text-foreground">
                        Konnektr Assembler
                      </span>
                      <span className="text-xs text-muted-foreground">
                        AI-powered digital twin builder
                      </span>
                    </button>
                    <button
                      onClick={() => handleProductClick("/graph")}
                      className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-brand-teal/10 transition-colors"
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
                      className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-brand-teal/10 transition-colors"
                    >
                      <span className="font-semibold text-foreground">
                        Konnektr Flow
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Real-time data & event orchestrator
                      </span>
                    </button>
                    <button
                      onClick={() => handleProductClick("/compass")}
                      className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-brand-teal/10 transition-colors"
                    >
                      <span className="font-semibold text-foreground">
                        Konnektr Compass
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Analytics & insights platform
                      </span>
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign In
              </a>
              <MailingListDialog
                trigger={
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-9 px-4 py-2 bg-brand-teal text-white shadow hover:bg-brand-teal/90">
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
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assembler" element={<AssemblerPage />} />
          <Route path="/graph" element={<GraphPage />} />
          <Route path="/flow" element={<FlowPage />} />
          <Route path="/compass" element={<CompassPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
