import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Database, ChartBar, CircuitBoard, Network } from 'lucide-react';
import konnektr from '@/assets/konnektr.svg'
import { Badge } from "./components/ui/badge";


function HomePage () {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <img src={konnektr} alt="Konnektr" className="h-6" />
          <Button variant="ghost" onClick={() => window.location.href = 'mailto:info@konnektr.io'}>
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Connecting worlds
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Seamlessly integrate, model, and analyze your data with semantic intelligence
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="relative">
              <Network className="h-8 w-8 mb-2 text-blue-600" />
                <Badge className="absolute top-0 right-4 cursor-pointer" onClick={() => window.open('https://ontomanager.konnektr.io', '_blank')}>Try now</Badge>
              <CardTitle>Konnektr Ontologies</CardTitle>
              <CardDescription>
                Build and manage semantic data models with our intuitive ontology manager
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="relative">
              <Database className="h-8 w-8 mb-2 text-purple-600" />
              <Badge variant="secondary" className="absolute top-0 right-4">Coming Soon</Badge>
              <CardTitle>Konnektr Graph</CardTitle>
              <CardDescription>
                Property graph database with ontology-based validation and reasoning
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="relative">
              <CircuitBoard className="h-8 w-8 mb-2 text-green-600" />
              <Badge variant="secondary" className="absolute top-0 right-4">Coming Soon</Badge>
              <CardTitle>Konnektr Flows</CardTitle>
              <CardDescription>
                Build powerful data pipelines with semantic validation
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="relative">
              <ChartBar className="h-8 w-8 mb-2 text-red-600" />
              <Badge variant="secondary" className="absolute top-0 right-4">Coming Soon</Badge>
              <CardTitle>Konnektr Analytics</CardTitle>
              <CardDescription>
                Real-time analytics with semantic understanding
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            © 2024 Konnektr. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;