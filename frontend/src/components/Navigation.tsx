import { useState } from "react";
import { Menu } from "lucide-react";
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

interface Product {
  name: string;
  path: string;
  description: string;
  status?: "early-access" | "coming-soon";
}

const products: Product[] = [
  {
    name: "Konnektr Assembler",
    path: "/assembler",
    description: "AI-powered digital twin builder",
    status: "early-access",
  },
  {
    name: "Konnektr Graph",
    path: "/graph",
    description: "Scalable graph database & API",
  },
  {
    name: "Konnektr Flow",
    path: "/flow",
    description: "Real-time data & event orchestrator",
    status: "coming-soon",
  },
  {
    name: "Konnektr Compass",
    path: "/compass",
    description: "Analytics & insights platform",
    status: "coming-soon",
  },
];

interface NavigationProps {
  className?: string;
}

export function DesktopNavigation({ className }: NavigationProps) {
  const handleProductClick = (path: string) => {
    navigate(path);
  };

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[active]:bg-transparent data-[state=open]:bg-transparent">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="bg-brand-dark border-white/20 text-foreground w-80 p-4 rounded-xl shadow-xl">
              <div className="space-y-4">
                {products.map((product) => (
                  <button
                    key={product.path}
                    onClick={() => handleProductClick(product.path)}
                    className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-brand-teal/10 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">
                        {product.name}
                      </span>
                      {product.status === "early-access" && (
                        <span className="px-2 py-0.5 text-xs bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">
                          Early Access
                        </span>
                      )}
                      {product.status === "coming-soon" && (
                        <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {product.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNavigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleProductClick = (path: string) => {
    navigate(path);
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
              Products
            </h3>
            <div className="space-y-2">
              {products.map((product) => (
                <button
                  key={product.path}
                  onClick={() => handleProductClick(product.path)}
                  className="w-full text-left flex flex-col gap-2 p-3 rounded-lg hover:bg-brand-teal/10 transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-medium text-foreground">
                      {product.name}
                    </span>
                    {product.status && (
                      <div className="flex">
                        {product.status === "early-access" && (
                          <span className="px-2 py-0.5 text-xs bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30 whitespace-nowrap">
                            Early Access
                          </span>
                        )}
                        {product.status === "coming-soon" && (
                          <span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 whitespace-nowrap">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.description}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
