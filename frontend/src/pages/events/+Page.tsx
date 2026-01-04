import {
  Radio,
  History,
  ArrowRight,
  Database,
  Webhook,
  Cloud,
  MessageSquare,
  FileJson,
  Zap,
  GitBranch,
  Clock,
} from "lucide-react";
import { useEffect } from "react";
import { Button } from "../../components/ui/button.js";
import { trackProductPageView } from "../../utils/analytics.js";

function CodeBlock({
  code,
  language,
  filename,
}: {
  code: string;
  language: string;
  filename?: string;
}) {
  return (
    <div className="code-block rounded-lg overflow-hidden">
      {filename && (
        <div className="terminal-header px-4 py-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-mono">
            {filename}
          </span>
          <span className="text-xs text-muted-foreground">{language}</span>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
    </div>
  );
}

export default function Page() {
  useEffect(() => {
    trackProductPageView("features/events");
  }, []);

  const cloudEventExample = `<span class="punctuation">{</span>
  <span class="property">"specversion"</span><span class="punctuation">:</span> <span class="string">"1.0"</span><span class="punctuation">,</span>
  <span class="property">"type"</span><span class="punctuation">:</span> <span class="string">"Konnektr.Graph.Twin.Update"</span><span class="punctuation">,</span>
  <span class="property">"source"</span><span class="punctuation">:</span> <span class="string">"https://api.graph.konnektr.io"</span><span class="punctuation">,</span>
  <span class="property">"id"</span><span class="punctuation">:</span> <span class="string">"550e8400-e29b-41d4-a716-446655440000"</span><span class="punctuation">,</span>
  <span class="property">"time"</span><span class="punctuation">:</span> <span class="string">"2025-01-20T10:30:00Z"</span><span class="punctuation">,</span>
  <span class="property">"subject"</span><span class="punctuation">:</span> <span class="string">"customer-acme-corp"</span><span class="punctuation">,</span>
  <span class="property">"datacontenttype"</span><span class="punctuation">:</span> <span class="string">"application/json"</span><span class="punctuation">,</span>
  <span class="property">"data"</span><span class="punctuation">:</span> <span class="punctuation">{</span>
    <span class="property">"modelId"</span><span class="punctuation">:</span> <span class="string">"dtmi:konnektr:Customer;1"</span><span class="punctuation">,</span>
    <span class="property">"patch"</span><span class="punctuation">:</span> <span class="punctuation">[</span>
      <span class="punctuation">{</span>
        <span class="property">"op"</span><span class="punctuation">:</span> <span class="string">"replace"</span><span class="punctuation">,</span>
        <span class="property">"path"</span><span class="punctuation">:</span> <span class="string">"/healthScore"</span><span class="punctuation">,</span>
        <span class="property">"value"</span><span class="punctuation">:</span> <span class="number">72</span>
      <span class="punctuation">}</span>
    <span class="punctuation">]</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span>`;

  const kafkaConsumerExample = `<span class="keyword">from</span> cloudevents.http <span class="keyword">import</span> from_json
<span class="keyword">from</span> kafka <span class="keyword">import</span> KafkaConsumer

consumer <span class="operator">=</span> KafkaConsumer<span class="punctuation">(</span>
    <span class="string">'konnektr-graph-events'</span><span class="punctuation">,</span>
    bootstrap_servers<span class="operator">=</span><span class="punctuation">[</span><span class="string">'kafka:9092'</span><span class="punctuation">]</span><span class="punctuation">,</span>
    value_deserializer<span class="operator">=</span><span class="keyword">lambda</span> m<span class="punctuation">:</span> from_json<span class="punctuation">(</span>m<span class="punctuation">)</span>
<span class="punctuation">)</span>

<span class="keyword">for</span> message <span class="keyword">in</span> consumer<span class="punctuation">:</span>
    event <span class="operator">=</span> message<span class="punctuation">.</span>value

    <span class="keyword">if</span> event<span class="punctuation">[</span><span class="string">'type'</span><span class="punctuation">]</span> <span class="operator">==</span> <span class="string">'Konnektr.Graph.Twin.Update'</span><span class="punctuation">:</span>
        node_id <span class="operator">=</span> event<span class="punctuation">[</span><span class="string">'subject'</span><span class="punctuation">]</span>
        changes <span class="operator">=</span> event<span class="punctuation">[</span><span class="string">'data'</span><span class="punctuation">][</span><span class="string">'patch'</span><span class="punctuation">]</span>

        <span class="comment"># Trigger downstream actions</span>
        <span class="keyword">if</span> <span class="function">any</span><span class="punctuation">(</span>p<span class="punctuation">[</span><span class="string">'path'</span><span class="punctuation">]</span> <span class="operator">==</span> <span class="string">'/healthScore'</span> <span class="keyword">for</span> p <span class="keyword">in</span> changes<span class="punctuation">)</span><span class="punctuation">:</span>
            <span class="function">notify_customer_success</span><span class="punctuation">(</span>node_id<span class="punctuation">,</span> changes<span class="punctuation">)</span>`;

  const webhookExample = `<span class="comment">// Azure Function triggered by Konnektr webhook</span>
<span class="keyword">import</span> <span class="punctuation">{</span> app<span class="punctuation">,</span> HttpRequest<span class="punctuation">,</span> HttpResponseInit <span class="punctuation">}</span> <span class="keyword">from</span> <span class="string">"@azure/functions"</span><span class="punctuation">;</span>

app<span class="punctuation">.</span><span class="function">http</span><span class="punctuation">(</span><span class="string">'graphWebhook'</span><span class="punctuation">,</span> <span class="punctuation">{</span>
  methods<span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">'POST'</span><span class="punctuation">]</span><span class="punctuation">,</span>
  <span class="keyword">async</span> <span class="function">handler</span><span class="punctuation">(</span>request<span class="punctuation">:</span> HttpRequest<span class="punctuation">)</span><span class="punctuation">:</span> Promise<span class="operator">&lt;</span>HttpResponseInit<span class="operator">&gt;</span> <span class="punctuation">{</span>
    <span class="keyword">const</span> event <span class="operator">=</span> <span class="keyword">await</span> request<span class="punctuation">.</span><span class="function">json</span><span class="punctuation">()</span><span class="punctuation">;</span>

    <span class="comment">// CloudEvents standard format</span>
    <span class="keyword">const</span> <span class="punctuation">{</span> type<span class="punctuation">,</span> subject<span class="punctuation">,</span> data <span class="punctuation">}</span> <span class="operator">=</span> event<span class="punctuation">;</span>

    <span class="keyword">if</span> <span class="punctuation">(</span>type <span class="operator">===</span> <span class="string">'Konnektr.Graph.Relationship.Create'</span><span class="punctuation">)</span> <span class="punctuation">{</span>
      <span class="comment">// New relationship detected</span>
      <span class="keyword">await</span> <span class="function">updateSearchIndex</span><span class="punctuation">(</span>subject<span class="punctuation">,</span> data<span class="punctuation">)</span><span class="punctuation">;</span>
      <span class="keyword">await</span> <span class="function">notifySlack</span><span class="punctuation">(</span><span class="string">\`New connection: \${subject}\`</span><span class="punctuation">)</span><span class="punctuation">;</span>
    <span class="punctuation">}</span>

    <span class="keyword">return</span> <span class="punctuation">{</span> status<span class="punctuation">:</span> <span class="number">200</span> <span class="punctuation">}</span><span class="punctuation">;</span>
  <span class="punctuation">}</span>
<span class="punctuation">})</span><span class="punctuation">;</span>`;

  return (
    <div className="bg-brand-dark text-foreground min-h-screen antialiased">
      {/* Hero */}
      <section className="relative py-20 md:py-32 hero-glow">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-mono text-brand-teal mb-4 border border-brand-teal/30 bg-brand-teal/5 rounded">
            <Radio className="h-3 w-3" />
            EVENTS_STREAMING
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Events & Streaming
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your knowledge graph isn't static. Stream every change to Kafka,
            Webhooks, or time-series databases. Give your agents the full
            history they need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-brand-teal text-black hover:bg-brand-teal/90 h-12 px-8 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://ktrlplane.konnektr.io/resources/create?resource_type=Konnektr.Graph",
                  "_blank"
                )
              }
            >
              Start Streaming
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 h-12 px-8 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://docs.konnektr.io/docs/events-streaming",
                  "_blank"
                )
              }
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Route Events Anywhere
            </h2>
            <p className="text-muted-foreground">
              Konnektr acts as a nervous system, routing graph changes to
              downstream systems in real-time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="feature-card p-6 rounded-xl">
              <Cloud className="h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-white font-bold mb-2">Kafka / Event Hubs</h3>
              <p className="text-sm text-muted-foreground">
                High-throughput streaming for microservices. Native support for
                Azure Event Hubs and Confluent.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl">
              <Webhook className="h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-white font-bold mb-2">Webhooks</h3>
              <p className="text-sm text-muted-foreground">
                Trigger serverless functions or notify external systems. Works
                with Azure Functions, AWS Lambda, or any HTTP endpoint.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl">
              <Database className="h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-white font-bold mb-2">Azure Data Explorer</h3>
              <p className="text-sm text-muted-foreground">
                Native sink for Kusto. Turn graph updates into an append-only
                historical log for analytics and auditing.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl">
              <MessageSquare className="h-8 w-8 text-brand-teal mb-4" />
              <h3 className="text-white font-bold mb-2">MQTT</h3>
              <p className="text-sm text-muted-foreground">
                Broadcast updates to IoT devices or edge gateways. Lightweight
                pub/sub for constrained environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CloudEvents Standard */}
      <section className="py-20" aria-label="Event Standards">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-mono text-brand-teal mb-4 border border-brand-teal/30 bg-brand-teal/5 rounded">
                <FileJson className="h-3 w-3" />
                CLOUDEVENTS_1.0
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Industry-Standard Format
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                No proprietary formats. We emit CloudEvents 1.0, the CNCF
                standard for event data. Consume with any standard library in
                Python, Go, Node.js, or Java.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-teal/10 p-2 rounded border border-brand-teal/30 text-brand-teal mt-1">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      Konnektr.Graph.Twin.Update
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Emitted when node properties change. Payload contains JSON
                      Patch operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-teal/10 p-2 rounded border border-brand-teal/30 text-brand-teal mt-1">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      Konnektr.Graph.Relationship.Create
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Emitted when new relationships are formed between nodes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-teal/10 p-2 rounded border border-brand-teal/30 text-brand-teal mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      Konnektr.Graph.Twin.Delete
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Emitted when nodes are removed. Includes full snapshot for
                      audit trails.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-xl">
              <CodeBlock
                code={cloudEventExample}
                language="JSON"
                filename="Node.Update.json"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Consume Events Your Way
            </h2>
            <p className="text-muted-foreground">
              Standard CloudEvents format means you can use your existing tools
              and libraries.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cloud className="h-5 w-5 text-brand-teal" />
                Kafka Consumer
              </h3>
              <CodeBlock
                code={kafkaConsumerExample}
                language="Python"
                filename="consumer.py"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Webhook className="h-5 w-5 text-brand-teal" />
                Webhook Handler
              </h3>
              <CodeBlock
                code={webhookExample}
                language="TypeScript"
                filename="graphWebhook.ts"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History / Time Travel */}
      <section className="py-20" aria-label="Data History">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-mono text-brand-teal mb-4 border border-brand-teal/30 bg-brand-teal/5 rounded">
              <History className="h-3 w-3" />
              TEMPORAL_CONTEXT
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Give Agents Historical Context
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              AI agents often need to know <em>what happened</em>, not just{" "}
              <em>what is</em>. By routing events to a time-series database, you
              give your agents long-term memory they can query.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="feature-card p-6 rounded-xl">
              <h4 className="text-white font-bold mb-3">Operational Context</h4>
              <p className="text-brand-teal font-mono text-sm mb-4">
                "What changed in the customer's account before they churned?"
              </p>
              <p className="text-sm text-muted-foreground">
                Agents can query historical events to understand the sequence of
                changes that led to an outcome.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl">
              <h4 className="text-white font-bold mb-3">Audit Trail</h4>
              <p className="text-brand-teal font-mono text-sm mb-4">
                "Who modified this record and when?"
              </p>
              <p className="text-sm text-muted-foreground">
                Every change is logged with user attribution, timestamps, and
                the full JSON Patch for compliance.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl">
              <h4 className="text-white font-bold mb-3">Time Travel Queries</h4>
              <p className="text-brand-teal font-mono text-sm mb-4">
                "Show me the state of this entity 30 days ago"
              </p>
              <p className="text-sm text-muted-foreground">
                Reconstruct any point-in-time view of your graph by replaying
                events from your history store.
              </p>
            </div>
            <div className="feature-card p-6 rounded-xl">
              <h4 className="text-white font-bold mb-3">Trend Analysis</h4>
              <p className="text-brand-teal font-mono text-sm mb-4">
                "How has this metric changed over the past quarter?"
              </p>
              <p className="text-sm text-muted-foreground">
                Aggregate historical events to identify patterns and trends that
                inform agent decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Real-Time Intelligence
            </h2>
            <p className="text-muted-foreground">
              Event streaming enables reactive workflows that respond to graph
              changes instantly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-brand-teal/30">
                <Zap className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Real-Time Alerts
              </h3>
              <p className="text-sm text-muted-foreground">
                Trigger notifications when specific patterns appear in your
                graph. Alert on anomalies before they become problems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-brand-teal/30">
                <GitBranch className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Index Synchronization
              </h3>
              <p className="text-sm text-muted-foreground">
                Keep search indices, caches, and derived data stores in sync
                with your authoritative graph.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-brand-teal/30">
                <Database className="h-8 w-8 text-brand-teal" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Agent Memory Updates
              </h3>
              <p className="text-sm text-muted-foreground">
                Push graph changes to your agents so they always have the latest
                context without polling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to stream your graph?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Configure event routing in minutes. Connect to Kafka, webhooks, or
            your time-series database of choice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 h-12 px-8 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://docs.konnektr.io/docs/events-streaming",
                  "_blank"
                )
              }
            >
              Read the Docs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
