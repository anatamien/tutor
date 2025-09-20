import React from 'react';

function Footer() {
  const links = [
    { label: 'Docs', url: 'https://nodejs.org/docs/' },
    { label: 'API', url: 'https://nodejs.org/api/' },
    { label: 'Examples', url: 'https://github.com/nodejs/examples' }
  ];

  return (
    <footer className="border-t border-neon-green/20 bg-dark/95 backdrop-blur-sm p-4">
      <div className="flex items-center justify-between">
        {/* Links */}
        <div className="flex space-x-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-mint transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Attribution */}
        <div className="text-xs text-gray-500">
          Built for learning Node.js • Pixelify Sans • SVG UI • No tokens, just tools
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;