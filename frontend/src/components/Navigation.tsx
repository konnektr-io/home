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
import { navigationProducts } from "@/data/products";
import { trackSignInClick } from "@/utils/analytics";

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
                {navigationProducts.map((product) => (
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
                      {product.navDescription}
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
              {navigationProducts.map((product) => (
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
                    {product.navDescription}
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
