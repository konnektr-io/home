import { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { ChevronDown } from 'lucide-react';
import HomePage from './HomePage';
import AssemblerPage from './pages/Assembler';
import GraphPage from './pages/Graph';
import FlowPage from './pages/Flow';
import KonnektrLogo from './assets/konnektr.svg';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleProductClick = (page: string) => {
    setCurrentPage(page);
    setPopoverOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'assembler':
        return <AssemblerPage />;
      case 'graph':
        return <GraphPage />;
      case 'flow':
        return <FlowPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
      {/* Restored original header with logo, popover, and buttons */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B111D]/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 font-semibold text-lg">
              <img src={KonnektrLogo} alt="Konnektr Logo" className="h-7 w-7" />
              <span className="text-white">Konnektr</span>
            </button>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
              {/* Popover for Products */}
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger className="flex items-center gap-1 hover:text-white transition-colors outline-none">
                  Products <ChevronDown className="h-4 w-4" />
                </PopoverTrigger>
                <PopoverContent className="bg-[#0B111D] border-white/20 text-white w-80 p-4 rounded-xl shadow-xl">
                  <div className="space-y-4">
                    <button onClick={() => handleProductClick('assembler')} className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-[#1E9E95]/10 transition-colors">
                      <span className="font-semibold text-white">Konnektr Assembler</span>
                      <span className="text-xs text-gray-400">AI-powered digital twin builder</span>
                    </button>
                    <button onClick={() => handleProductClick('graph')} className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-[#1E9E95]/10 transition-colors">
                      <span className="font-semibold text-white">Konnektr Graph</span>
                      <span className="text-xs text-gray-400">Scalable graph database & API</span>
                    </button>
                    <button onClick={() => handleProductClick('flow')} className="w-full text-left flex flex-col gap-1 px-3 py-2 rounded-lg hover:bg-[#1E9E95]/10 transition-colors">
                      <span className="font-semibold text-white">Konnektr Flow</span>
                      <span className="text-xs text-gray-400">Real-time data & event orchestrator</span>
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sign In</a>
              <a href="#" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-9 px-4 py-2 bg-[#1E9E95] text-white shadow hover:bg-[#1E9E95]/90">
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="pt-16">
        {renderPage()}
      </main>
    </>
  );
}

export default App;
