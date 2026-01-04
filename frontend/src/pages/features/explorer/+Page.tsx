import {
  MonitorPlay,
  Share2,
  MousePointer2,
  Search,
} from "lucide-react";
import { useEffect } from "react";
import explorerScreenshot from "../../../assets/explorer-screenshot.png";
import {
  trackProductPageView,
} from "../../../utils/analytics.js";

export default function Page() {
  useEffect(() => {
    trackProductPageView("features/explorer");
  }, []);

  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-mono text-green-400 mb-4 border border-green-400/20 bg-green-400/5 rounded">
             <MonitorPlay className="h-3 w-3" />
             VISUAL_CONSOLE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="gradient-text">Graph Explorer</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what your agents are thinking.
            <br />
            Inspect the graph, debug relationships, and run queries visually.
          </p>
          <div className="mt-8">
             <a
                href="https://explorer.graph.konnektr.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 bg-brand-teal text-black shadow hover:bg-brand-teal/90"
              >
                Launch Explorer
              </a>
          </div>
        </div>
      </section>

      {/* Visual Demo */}
      <section className="py-12 px-4">
         <div className="container mx-auto max-w-6xl">
            <div className="aspect-video rounded-xl border border-brand-teal/20 overflow-hidden bg-[#0B111D] shadow-2xl relative">
                  <img
                    src={explorerScreenshot}
                    alt="Graph Explorer Interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent pointer-events-none"></div>
            </div>
         </div>
      </section>

       {/* Features Grid */}
       <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-6 rounded-xl bg-[#0B111D] border border-white/10">
                <Share2 className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Force-Directed Layout</h3>
                <p className="text-muted-foreground">Physics-based rendering reveals clusters and central nodes instantly in 2D or 3D specific views.</p>
             </div>
             <div className="p-6 rounded-xl bg-[#0B111D] border border-white/10">
                <MousePointer2 className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Interactive Editing</h3>
                <p className="text-muted-foreground">Click any node to edit its properties or modify relationships without writing a line of Cypher.</p>
             </div>
              <div className="p-6 rounded-xl bg-[#0B111D] border border-white/10">
                <Search className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Query Builder</h3>
                <p className="text-muted-foreground">Don't know Cypher? Use the visual builder to construct paths and filters.</p>
             </div>
          </div>
       </section>

    </div>
  );
}
