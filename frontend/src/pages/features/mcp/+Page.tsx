import {
  Network,
  Terminal,
  Bot,
  Plug,
} from "lucide-react";
import { useEffect } from "react";
import {
  trackProductPageView,
} from "../../../utils/analytics.js";

export default function Page() {
  useEffect(() => {
    trackProductPageView("features/mcp");
  }, []);

  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-mono text-blue-400 mb-4 border border-blue-400/20 bg-blue-400/5 rounded">
            <Network className="h-3 w-3" />
             MCP_SERVER_ONLINE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="gradient-text">Model Context Protocol</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The standard for connecting Experience to Memory.
            <br />
            Plug your Konnektr Graph directly into Claude, Cursor, and Windsurf.
          </p>
        </div>
      </section>

      {/* Connection Config */}
      <section className="py-20 bg-black/20 border-y border-white/5">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Instant Connection</h2>
                  <p className="text-muted-foreground mb-6">
                    No custom API integration code required. Just add the MCP definition to your agent's configuration file, and it instantly gains:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                       <Bot className="text-blue-400"/>
                       <span className="text-white"><strong>Schema Insight</strong>: The agent can read your ontology to understand what data exists.</span>
                    </li>
                     <li className="flex items-center gap-3">
                       <Terminal className="text-blue-400"/>
                       <span className="text-white"><strong>Cypher Execution</strong>: The agent can run complex graph queries autonomously.</span>
                    </li>
                     <li className="flex items-center gap-3">
                       <Plug className="text-blue-400"/>
                       <span className="text-white"><strong>Hybrid Search</strong>: The agent can find nodes by vector similarity.</span>
                    </li>
                  </ul>
               </div>
               
               <div className="bg-[#0B111D] border border-white/10 rounded-xl p-6 shadow-2xl">
                 <div className="flex gap-2 mb-4 text-xs font-mono text-muted-foreground border-b border-white/5 pb-2">
                   <span>claude_desktop_config.json</span>
                 </div>
                 <pre className="font-mono text-sm overflow-x-auto text-gray-300">
                   <span className="text-blue-400">"mcpServers"</span>: {"{"}
                   <br />
                   &nbsp;&nbsp;<span className="text-green-400">"konnektr-graph"</span>: {"{"}
                   <br />
                   &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"command"</span>: <span className="text-yellow-400">"npx"</span>,
                   <br />
                   &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"args"</span>: [
                   <br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"-y"</span>, 
                   <br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"@konnektr/mcp-server-graph"</span>
                   <br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;],
                   <br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"env"</span>: {"{"}
                   <br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"RESOURCE_ID"</span>: "...",
                   <br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"CLIENT_ID"</span>: "..."
                   <br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                   <br />
                   &nbsp;&nbsp;{"}"}
                   <br />
                   {"}"}
                 </pre>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
