import { Bot, DatabaseZap, Workflow, ArrowRight } from 'lucide-react';

export default function HomePage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
    return (
        <div className="bg-[#0B111D] text-white min-h-screen antialiased" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <section className="relative py-20 md:py-32 hero-glow">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300 mb-4 border border-white/10">
                        The Intelligent Twin Platform
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white">
                        Go from Raw Data to Digital Twin in <span className="gradient-text">Minutes</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
                        Konnektr automates digital twin creation, deployment, and orchestration. We solve for complexity, cost, and context, turning your disconnected data into a competitive advantage.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <button onClick={() => setCurrentPage('assembler')} className="inline-flex items-center justify-center rounded-md text-base font-medium transition-colors h-11 px-6 py-3 bg-[#1E9E95] text-white shadow hover:bg-[#1E9E95]/90">
                            Explore Our Products
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </div>
            </section>
            
            {/* Products Overview Section */}
            <section className="py-20 md:py-28 bg-black/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Complete Digital Twin Platform</h2>
                        <p className="mt-4 text-lg text-gray-400">
                            From intelligent modeling to scalable deployment and real-time orchestration, our integrated platform covers the entire digital twin lifecycle.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Assembler Product Card */}
                        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-[#1E9E95]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1E9E95]/20 cursor-pointer" onClick={() => setCurrentPage('assembler')}>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1E9E95]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#1E9E95]/20 border border-[#1E9E95]/30 mb-6">
                                    <Bot className="h-6 w-6 text-[#1E9E95]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Konnektr Assembler</h3>
                                <p className="text-gray-400 mb-6">AI-powered digital twin builder that automates DTDL model creation from any data source with a low-code visual interface.</p>
                                <div className="flex items-center text-[#1E9E95] font-medium text-sm group-hover:text-white transition-colors">
                                    Start Building <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Graph Product Card */}
                        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-[#1E9E95]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1E9E95]/20 cursor-pointer" onClick={() => setCurrentPage('graph')}>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1E9E95]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#1E9E95]/20 border border-[#1E9E95]/30 mb-6">
                                    <DatabaseZap className="h-6 w-6 text-[#1E9E95]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Konnektr Graph</h3>
                                <p className="text-gray-400 mb-6">Scalable digital twin runtime with high-performance graph database and API layer, fully compatible with ADT and built on open standards.</p>
                                <div className="flex items-center text-[#1E9E95] font-medium text-sm group-hover:text-white transition-colors">
                                    Start Deploying <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Flow Product Card */}
                        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 hover:border-[#1E9E95]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#1E9E95]/20 cursor-pointer" onClick={() => setCurrentPage('flow')}>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1E9E95]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#1E9E95]/20 border border-[#1E9E95]/30 mb-6">
                                    <Workflow className="h-6 w-6 text-[#1E9E95]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Konnektr Flow</h3>
                                <p className="text-gray-400 mb-6">Real-time data and event orchestrator that serves as the nervous system for your digital twin, enabling intelligent automation.</p>
                                <div className="flex items-center text-[#1E9E95] font-medium text-sm group-hover:text-white transition-colors">
                                    Start Flowing <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Why Konnektr Section */}
            <section id="features" className="py-20 md:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                         <h2 className="text-3xl md:text-4xl font-bold text-white">Why Konnektr?</h2>
                         <p className="mt-4 text-lg text-gray-400">
                           Our integrated approach solves the biggest challenges in digital twin adoption.
                         </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Feature 1: Fast Modeling */}
                        <div className="feature-card rounded-xl p-8">
                            <Bot className="h-10 w-10 text-[#1E9E95]" />
                            <h3 className="mt-6 text-xl font-bold text-white">Speed to Value</h3>
                            <p className="mt-2 text-gray-400">
                                Go from raw data to deployed digital twin in minutes, not months. Our AI eliminates the complexity of manual modeling.
                            </p>
                        </div>
                        {/* Feature 2: Scalable Graph */}
                        <div className="feature-card rounded-xl p-8">
                            <DatabaseZap className="h-10 w-10 text-[#1E9E95]" />
                            <h3 className="mt-6 text-xl font-bold text-white">Enterprise-Grade Scale</h3>
                            <p className="mt-2 text-gray-400">
                                Built for the demands of enterprise workloads with open standards, flexible deployment, and no vendor lock-in.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

