import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [isReady, setIsReady] = useState(false);
  const [activeTab, setActiveTab] = useState('lessons');
  const [selectedModule, setSelectedModule] = useState('intro');

  useEffect(() => {
    const checkDependencies = () => {
      if (
        window.Header &&
        window.Sidebar &&
        window.LearningModule &&
        window.AIChat &&
        window.Footer &&
        window.CodeSandbox
      ) {
        setIsReady(true);
      }
    };

    checkDependencies();
    const interval = setInterval(checkDependencies, 100);
    return () => clearInterval(interval);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
        <div className="w-16 h-16 border-4 border-neon-green border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-neon-green font-pixel text-lg">Loading Node.js Tutor...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white font-pixel relative z-10">
      <window.Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex h-[calc(100vh-120px)]">
        <window.Sidebar 
          selectedModule={selectedModule} 
          setSelectedModule={setSelectedModule} 
        />
        
        <main className="flex-1 flex">
          <div className="flex-1 p-6">
            <window.LearningModule 
              activeTab={activeTab} 
              selectedModule={selectedModule} 
            />
          </div>
          
          <div className="w-80 border-l border-neon-green/20">
            <window.AIChat />
          </div>
        </main>
      </div>
      
      <window.Footer />
    </div>
  );
}

createRoot(document.getElementById('renderDiv')).render(<App />);