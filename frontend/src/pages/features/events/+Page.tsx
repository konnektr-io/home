import {
  Radio,
  History,
  Activity,
  ArrowRightLeft,
  Server,
  Database,
} from "lucide-react";
import { useEffect } from "react";
import {
  trackProductPageView,
} from "../../../utils/analytics.js";

export default function Page() {
  useEffect(() => {
    trackProductPageView("features/events");
  }, []);

  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-mono text-purple-400 mb-4 border border-purple-400/20 bg-purple-400/5 rounded">
            <Radio className="h-3 w-3" />
            REACTIVE_STREAM
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="gradient-text">Events & Streaming</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just store data—broadcast it.
            <br />
            Turn your graph into a real-time nervous system with Kafka, MQTT, and Kusto.
          </p>
        </div>
      </section>

      {/* Architecture Diagram (CSS-based) */}
      <section className="py-20 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
              {/* Source */}
              <div className="p-6 rounded-xl bg-[#0B111D] border border-white/10 text-center w-full md:w-64">
                 <div className="mx-auto w-12 h-12 bg-brand-teal/10 rounded flex items-center justify-center text-brand-teal mb-4">
                   <Activity />
                 </div>
                 <h3 className="font-bold text-white">Graph Update</h3>
                 <p className="text-sm text-muted-foreground mt-2">Property Change<br/>Relationship Change</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-muted-foreground">
                <ArrowRightLeft className="w-8 h-8" />
              </div>

               {/* Router */}
               <div className="p-6 rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-center w-full md:w-64 relative">
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-brand-blue text-white px-2 py-0.5 rounded">Event Hub</div>
                 <div className="mx-auto w-12 h-12 bg-white/5 rounded flex items-center justify-center text-white mb-4">
                   <Server />
                 </div>
                 <h3 className="font-bold text-white">Routing Layer</h3>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-muted-foreground">
                <ArrowRightLeft className="w-8 h-8" />
              </div>

              {/* Sinks */}
               <div className="flex flex-col gap-4 w-full md:w-64">
                 <div className="p-4 rounded-lg bg-[#0B111D] border border-white/10 flex items-center gap-3">
                    <Radio className="text-orange-400 h-5 w-5" /> <div><div className="font-bold text-white text-sm">Kafka / Event Hubs</div></div>
                 </div>
                 <div className="p-4 rounded-lg bg-[#0B111D] border border-white/10 flex items-center gap-3">
                    <Activity className="text-green-400 h-5 w-5" /> <div><div className="font-bold text-white text-sm">MQTT</div></div>
                 </div>
                 <div className="p-4 rounded-lg bg-[#0B111D] border border-white/10 flex items-center gap-3">
                    <Database className="text-blue-400 h-5 w-5" /> <div><div className="font-bold text-white text-sm">Azure Data Explorer</div></div>
                 </div>
               </div>
           </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-20">
         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Outbound Streams
              </h2>
              <p className="text-muted-foreground mb-6">
                 Keep your external systems in sync. Whenever a node property changes or a relationship is created/deleted, Konnektr emits a strictly typed event.
              </p>
              <ul className="space-y-4">
                <li className="p-4 rounded bg-white/5 border border-white/10">
                   <h4 className="font-bold text-white mb-1">Webhooks</h4>
                   <p className="text-xs text-muted-foreground">Trigger Serverless functions or CI/CD pipelines instantly.</p>
                </li>
                 <li className="p-4 rounded bg-white/5 border border-white/10">
                   <h4 className="font-bold text-white mb-1">Kafka / Event Hubs</h4>
                   <p className="text-xs text-muted-foreground">High-throughput streaming for enterprise integration.</p>
                </li>
                 <li className="p-4 rounded bg-white/5 border border-white/10">
                   <h4 className="font-bold text-white mb-1">MQTT</h4>
                   <p className="text-xs text-muted-foreground">Broadcast updates to edge devices and IoT fleets.</p>
                </li>
              </ul>
            </div>
            <div>
               <h2 className="text-3xl font-bold text-white mb-6">
                Historical Audit (Time Travel)
              </h2>
              <p className="text-muted-foreground mb-6">
                 Knowledge Graphs usually only show the <em>current state</em>. Kusto shows what happened <em>before</em>.
              </p>
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="text-blue-400" />
                  <h3 className="font-bold text-white">ADX / Kusto Integration</h3>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  We automatically mirror every graph change to **Azure Data Explorer (Kusto)** or **Fabric Real-Time Intelligence**.
                </p>
                <div className="bg-black/50 p-4 rounded font-mono text-xs text-blue-300">
                   Updates<br/>
                   | where Timestamp &gt; ago(1h)<br/>
                   | where EntityId == "Pump-01"<br/>
                   | project Timestamp, Property, Value<br/>
                   | render timechart
                </div>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
}
