import React from 'react';

function Sidebar({ selectedModule, setSelectedModule }) {
  const modules = [
    { id: 'intro', title: 'Introduction to Node.js', icon: 'M8 8h8v8H8z' },
    { id: 'modules', title: 'Working with Modules', icon: 'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z' },
    { id: 'async', title: 'Asynchronous Programming', icon: 'M12 2l3.09 6.26L22 9l-5.91 4.74L18 22l-6-4.74L6 22l1.91-8.26L2 9l6.91-.74L12 2z' },
    { id: 'filesystem', title: 'File System Operations', icon: 'M6 2c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6z' },
    { id: 'express', title: 'HTTP & Express.js', icon: 'M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z' },
    { id: 'testing', title: 'Testing & Debugging', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'deploy', title: 'Deployment & Production', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' }
  ];

  return (
    <aside className="w-80 border-r border-neon-green/20 bg-dark/50 p-4">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-neon-green mb-2">Learning Modules</h2>
        <div className="h-0.5 bg-gradient-to-r from-neon-green to-transparent"></div>
      </div>
      
      <nav className="space-y-2">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => setSelectedModule(module.id)}
            className={`w-full text-left p-3 rounded-lg transition-all duration-300 relative group ${
              selectedModule === module.id
                ? 'text-neon-green bg-neon-green/10'
                : 'text-gray-300 hover:text-neon-mint hover:bg-neon-green/5'
            }`}
          >
            {/* SVG Button Background */}
            <svg 
              className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id={`moduleGradient-${module.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#32ff7e" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#19e56a" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <rect 
                width="100" 
                height="40" 
                rx="8" 
                fill={`url(#moduleGradient-${module.id})`}
                stroke="#32ff7e"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
            </svg>
            
            <div className="relative z-10 flex items-center space-x-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d={module.icon} />
              </svg>
              <span className="font-medium">{module.title}</span>
            </div>
          </button>
        ))}
      </nav>
    </aside>
  );
}

window.Sidebar = Sidebar;