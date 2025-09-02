import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Code, Share2, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

// You should have your logo as an SVG in your assets
import KonnektrLogo from "@/assets/konnektr-logo-small.png";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <a className="flex items-center justify-center" href="#">
          <img src={KonnektrLogo} alt="Konnektr Logo" className="h-8 w-auto" />
          <span className="sr-only">Konnektr</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleTheme}
            className="mr-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                The Self-Assembling Digital Twin Platform
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Konnektr uses AI to automatically generate, simulate, and manage your digital twins.
                Go from raw data to actionable insights in record time.
              </p>
              <div className="space-x-4">
                <Button size="lg">
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="secondary">
                  Read Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-secondary/20 text-secondary px-3 py-1 text-sm">
                    Our Core Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Automate, Simulate, Operate
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We solve the hardest problems in digital twin implementation so you can focus on your business.
                </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Card className="bg-background/50">
                <CardHeader>
                  <Bot className="h-8 w-8 text-primary" />
                  <CardTitle className="mt-4">Genesis Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our AI automatically inspects your data streams to propose and generate complete DTDL ontologies and twin relationships.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <Share2 className="h-8 w-8 text-primary" />
                  <CardTitle className="mt-4">Nexus Simulator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    An integrated spatial and physics engine that understands proximity, flow, and causality for true what-if analysis.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <Code className="h-8 w-8 text-primary" />
                  <CardTitle className="mt-4">Operational Co-Pilot</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A natural language interface that allows your team to query and command your digital twin ecosystem in plain English.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Konnektr Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}