import { useState } from "react";
import { Menu, DatabaseZap, Radio, Network, MonitorPlay } from "lucide-react";
import { navigate } from "vike/client/router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { trackSignInClick } from "@/utils/analytics";

interface NavigationProps {
  className?: string;
}

const features = [
  {
    name: "Graph Database",
    description: "Postgres + Apache AGE Engine",
    href: "/features/graph",
    icon: DatabaseZap,
    type: "internal",
  },
  {
    name: "Events & Streaming",
    description: "Kafka, MQTT & Webhooks",
    href: "/features/events",
    icon: Radio,
    type: "internal",
  },
  {
    name: "MCP Server",
    description: "Connect AI Agents directly",
    href: "/features/mcp",
    icon: Network,
    type: "internal",
  },
  {
    name: "Graph Explorer",
    description: "Visual Interface & Debugger",
    href: "/features/explorer",
    icon: MonitorPlay,
    type: "internal",
  },
];

export function DesktopNavigation({ className }: NavigationProps) {
  const handleFeatureClick = (feature: (typeof features)[0]) => {
    if (feature.type === "external") {
      window.open(feature.href, "_blank");
    } else {
      navigate(feature.href);
    }
  };

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[active]:bg-transparent data-[state=open]:bg-transparent">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="bg-brand-dark border-white/20 text-foreground w-80 p-4 rounded-xl shadow-xl">
              <div className="space-y-4">
                {features.map((feature) => (
                  <button
                    key={feature.name}
                    onClick={() => handleFeatureClick(feature)}
                    className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-brand-teal/10 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-2">
                      <feature.icon className="h-4 w-4 text-brand-teal group-hover:text-brand-teal/80" />
                      <span className="font-semibold text-foreground">
                        {feature.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground pl-6">
                      {feature.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            href="https://docs.konnektr.io/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Documentation
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            href="https://docs.konnektr.io/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNavigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleFeatureClick = (feature: (typeof features)[0]) => {
    if (feature.type === "external") {
      window.open(feature.href, "_blank");
    } else {
      navigate(feature.href);
    }
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className={className}>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-brand-dark border-white/20 w-80">
        <SheetHeader>
          <SheetTitle className="text-left text-foreground">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              Features
            </h3>
            <div className="space-y-2">
              {features.map((feature) => (
                <button
                  key={feature.name}
                  onClick={() => handleFeatureClick(feature)}
                  className="w-full text-left flex flex-col gap-2 p-3 rounded-lg hover:bg-brand-teal/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <feature.icon className="h-4 w-4 text-brand-teal" />
                    <span className="font-medium text-foreground">
                      {feature.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground pl-6">
                    {feature.description}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              Resources
            </h3>
            <a
              href="https://docs.konnektr.io/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left p-3 rounded-lg hover:bg-brand-teal/10 transition-colors text-foreground font-medium"
            >
              Documentation
            </a>
            <a
              href="https://docs.konnektr.io/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left p-3 rounded-lg hover:bg-brand-teal/10 transition-colors text-foreground font-medium"
            >
              Blog
            </a>
            <a
              href="https://ktrlplane.konnektr.io"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSignInClick("mobile_menu")}
              className="block w-full text-left p-3 rounded-lg hover:bg-brand-teal/10 transition-colors text-foreground font-medium"
            >
              Sign In
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
