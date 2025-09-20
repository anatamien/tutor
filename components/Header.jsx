import React from 'react';

function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'lessons', label: 'Lessons' },
    { id: 'cheatsheets', label: 'Cheat Sheets' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <header className="border-b border-neon-green/20 bg-dark/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <svg width="48" height="48" viewBox="0 0 48 48" className="neon-glow">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#32ff7e" />
                <stop offset="100%" stopColor="#19e56a" />
              </linearGradient>
            </defs>
            <rect x="4" y="4" width="40" height="40" rx="8" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
            <path d="M16 12 L32 12 L32 20 L24 20 L24 36 L16 36 Z" fill="url(#logoGradient)" />
            <circle cx="28" cy="28" r="4" fill="url(#logoGradient)" />
          </svg>
          <div>
            <h1 className="text-2xl font-bold text-neon-green neon-text">Node.js Tutor</h1>
            <p className="text-xs text-neon-mint opacity-80">Interactive Learning Platform</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-neon-green'
                  : 'text-gray-400 hover:text-neon-mint'
              }`}
            >
              {/* SVG Button Background */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id={`tabGradient-${tab.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={activeTab === tab.id ? "#32ff7e" : "transparent"} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={activeTab === tab.id ? "#19e56a" : "transparent"} stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <rect 
                  width="100" 
                  height="40" 
                  rx="4" 
                  fill={`url(#tabGradient-${tab.id})`}
                  stroke={activeTab === tab.id ? "#32ff7e" : "transparent"}
                  strokeWidth="1"
                  className={activeTab === tab.id ? 'neon-glow' : ''}
                />
              </svg>
              <span className="relative z-10 font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

window.Header = Header;