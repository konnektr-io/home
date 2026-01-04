import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "./Link";
import KonnektrLogo from "../assets/konnektr.svg";

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-lg"
            >
              <img src={KonnektrLogo} alt="Konnektr Logo" className="h-7 w-7" />
              <span className="text-foreground">Konnektr</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Open-source digital twin platform for the modern world. Build,
              scale, and manage your digital twins with ease.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/konnektr-io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Konnektr on GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <SiGithub className="h-5 w-5" />
                <span className="text-sm">Open Source</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/graph"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Konnektr Graph
                </Link>
              </li>
              <li>
                <Link
                  href="/features/mcp"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  MCP Server
                </Link>
              </li>
              <li>
                <Link
                  href="/features/events"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Events & Streaming
                </Link>
              </li>
              <li>
                <Link
                  href="/features/explorer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Graph Explorer
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.konnektr.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/konnektr-io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/konnektr-io/konnektr-home/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Konnektr. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ and open-source technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
