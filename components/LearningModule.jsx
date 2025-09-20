import React, { useState } from 'react';

function LearningModule({ activeTab, selectedModule }) {
  const [activeSection, setActiveSection] = useState('theory');

  const moduleContent = {
    intro: {
      title: 'Introduction to Node.js',
      theory: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, opening up new possibilities for web development.

Key features:
• Event-driven, non-blocking I/O model
• Built on V8 engine for high performance
• Large ecosystem with npm package manager
• Cross-platform compatibility

Node.js is perfect for building scalable network applications, REST APIs, real-time applications, and microservices.`,
      
      tasks: [
        {
          title: 'Hello World',
          description: 'Create your first Node.js application that prints "Hello, Node.js!" to the console.',
          starter: 'console.log("Hello, Node.js!");',
          solution: 'console.log("Hello, Node.js!");'
        },
        {
          title: 'Check Node Version',
          description: 'Write code to display the current Node.js version.',
          starter: '// Write code to show Node.js version',
          solution: 'console.log(process.version);'
        }
      ]
    },
    modules: {
      title: 'Working with Modules',
      theory: `Node.js uses a module system to organize code into reusable components. There are three types of modules:

Core Modules: Built into Node.js (fs, http, path, etc.)
• Available without installation
• Imported using require()

Local Modules: Your own files
• Created using module.exports
• Imported with relative paths

Third-party Modules: From npm
• Installed via npm install
• Imported by package name`,
      
      tasks: [
        {
          title: 'Create and Export Module',
          description: 'Create a module that exports a function to calculate square of a number.',
          starter: '// math.js\nfunction square(num) {\n  // Complete this function\n}\n\nmodule.exports = { square };',
          solution: '// math.js\nfunction square(num) {\n  return num * num;\n}\n\nmodule.exports = { square };'
        }
      ]
    },
    async: {
      title: 'Asynchronous Programming',
      theory: `Node.js excels at handling asynchronous operations. Understanding async patterns is crucial:

Callbacks: Traditional way of handling async operations
• Function passed as argument
• Called when operation completes

Promises: Modern approach with better error handling
• Represents eventual completion of async operation
• Chainable with .then() and .catch()

Async/Await: Syntactic sugar for Promises
• Makes async code look synchronous
• Better error handling with try/catch`,
      
      tasks: [
        {
          title: 'Promise Example',
          description: 'Create a promise that resolves after 2 seconds with a success message.',
          starter: 'const delay = new Promise((resolve, reject) => {\n  // Complete this promise\n});\n\ndelay.then(message => console.log(message));',
          solution: 'const delay = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve("Operation completed successfully!");\n  }, 2000);\n});\n\ndelay.then(message => console.log(message));'
        }
      ]
    }
    // Add other modules here...
  };

  const currentModule = moduleContent[selectedModule] || moduleContent.intro;
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const currentTask = currentModule.tasks?.[currentTaskIndex];

  if (activeTab === 'cheatsheets') {
    return (
      <div className="space-y-6">
        <div className="neon-panel p-6">
          <h2 className="text-2xl font-bold text-neon-green mb-4 neon-text">Node.js Cheat Sheets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="neon-card p-4">
              <h3 className="text-lg font-bold text-neon-mint mb-3">Core Modules</h3>
              <div className="space-y-2 text-sm">
                <div><code className="text-neon-green">fs</code> - File system operations</div>
                <div><code className="text-neon-green">http</code> - HTTP server/client</div>
                <div><code className="text-neon-green">path</code> - File path utilities</div>
                <div><code className="text-neon-green">os</code> - Operating system utilities</div>
                <div><code className="text-neon-green">crypto</code> - Cryptographic functionality</div>
              </div>
            </div>
            
            <div className="neon-card p-4">
              <h3 className="text-lg font-bold text-neon-mint mb-3">Common Commands</h3>
              <div className="space-y-2 text-sm">
                <div><code className="text-neon-green">node app.js</code> - Run application</div>
                <div><code className="text-neon-green">npm init</code> - Initialize project</div>
                <div><code className="text-neon-green">npm install</code> - Install dependencies</div>
                <div><code className="text-neon-green">npm start</code> - Start application</div>
                <div><code className="text-neon-green">npm test</code> - Run tests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'projects') {
    return (
      <div className="space-y-6">
        <div className="neon-panel p-6">
          <h2 className="text-2xl font-bold text-neon-green mb-4 neon-text">Practice Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="neon-card p-4">
              <h3 className="text-lg font-bold text-neon-mint mb-3">Beginner Projects</h3>
              <ul className="space-y-2 text-sm">
                <li>• Command Line Calculator</li>
                <li>• File Manager CLI</li>
                <li>• Simple HTTP Server</li>
                <li>• JSON Data Parser</li>
              </ul>
            </div>
            
            <div className="neon-card p-4">
              <h3 className="text-lg font-bold text-neon-mint mb-3">Advanced Projects</h3>
              <ul className="space-y-2 text-sm">
                <li>• REST API with Express</li>
                <li>• Real-time Chat Application</li>
                <li>• File Upload Service</li>
                <li>• Authentication System</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Module Header */}
      <div className="neon-panel p-6">
        <h2 className="text-2xl font-bold text-neon-green mb-2 neon-text">{currentModule.title}</h2>
        <div className="h-0.5 bg-gradient-to-r from-neon-green to-transparent"></div>
      </div>

      {/* Section Navigation */}
      <div className="flex space-x-4">
        <button
          onClick={() => setActiveSection('theory')}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeSection === 'theory'
              ? 'bg-neon-green/20 text-neon-green border border-neon-green/50'
              : 'text-gray-400 hover:text-neon-mint'
          }`}
        >
          Theory
        </button>
        <button
          onClick={() => setActiveSection('practice')}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeSection === 'practice'
              ? 'bg-neon-green/20 text-neon-green border border-neon-green/50'
              : 'text-gray-400 hover:text-neon-mint'
          }`}
        >
          Practice
        </button>
      </div>

      {/* Content */}
      {activeSection === 'theory' && (
        <div className="neon-panel p-6">
          <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed">
            {currentModule.theory}
          </pre>
        </div>
      )}

      {activeSection === 'practice' && currentModule.tasks && (
        <div className="space-y-6">
          {/* Task Navigation */}
          {currentModule.tasks.length > 1 && (
            <div className="flex space-x-2">
              {currentModule.tasks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTaskIndex(index)}
                  className={`px-3 py-1 rounded text-sm transition-all duration-300 ${
                    currentTaskIndex === index
                      ? 'bg-neon-green/20 text-neon-green'
                      : 'text-gray-400 hover:text-neon-mint'
                  }`}
                >
                  Task {index + 1}
                </button>
              ))}
            </div>
          )}

          {/* Current Task */}
          <div className="neon-panel p-6">
            <h3 className="text-xl font-bold text-neon-mint mb-2">{currentTask.title}</h3>
            <p className="text-gray-300 mb-4">{currentTask.description}</p>
            
            <window.CodeSandbox 
              initialCode={currentTask.starter}
              solution={currentTask.solution}
            />
          </div>
        </div>
      )}
    </div>
  );
}

window.LearningModule = LearningModule;