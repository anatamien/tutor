import React, { useState, useRef, useEffect } from 'react';

function AIChat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Add welcome message
    setMessages([{
      role: 'assistant',
      content: 'Hello! I\'m your Node.js tutor AI. I can help you understand Node.js concepts, debug code, explain async patterns, and guide you through best practices. What would you like to learn about today?'
    }]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userInput) => {
    const input = userInput.toLowerCase();

    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! I'm here to help you learn Node.js. What specific topic would you like to explore? I can explain concepts like modules, async programming, file systems, or help debug code.";
    }
    
    if (input.includes('module') || input.includes('require') || input.includes('import')) {
      return "Node.js modules are the building blocks of applications. There are three types:\n\n1. Core modules (built-in): fs, http, path, os\n2. Local modules: your own files using module.exports\n3. Third-party modules: installed via npm\n\nExample:\n```javascript\nconst fs = require('fs'); // core module\nconst myModule = require('./myFile'); // local\nconst express = require('express'); // third-party\n```\n\nWould you like me to explain any specific module type?";
    }
    
    if (input.includes('async') || input.includes('promise') || input.includes('await') || input.includes('callback')) {
      return "Asynchronous programming is key in Node.js! Here are the main patterns:\n\n1. Callbacks (traditional):\n```javascript\nfs.readFile('file.txt', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n```\n\n2. Promises (modern):\n```javascript\nconst readFile = util.promisify(fs.readFile);\nreadFile('file.txt').then(data => console.log(data));\n```\n\n3. Async/Await (cleanest):\n```javascript\nasync function readData() {\n  try {\n    const data = await readFile('file.txt');\n    console.log(data);\n  } catch (err) {\n    console.error(err);\n  }\n}\n```\n\nWhich pattern would you like to practice?";
    }
    
    if (input.includes('express') || input.includes('server') || input.includes('http') || input.includes('api')) {
      return "Express.js is the most popular Node.js web framework. Here's a basic setup:\n\n```javascript\nconst express = require('express');\nconst app = express();\n\n// Middleware\napp.use(express.json());\n\n// Routes\napp.get('/', (req, res) => {\n  res.json({ message: 'Hello World!' });\n});\n\napp.post('/users', (req, res) => {\n  const { name, email } = req.body;\n  res.json({ id: 1, name, email });\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});\n```\n\nWant to learn about routing, middleware, or error handling?";
    }
    
    if (input.includes('file') || input.includes('fs')) {
      return "The fs (file system) module lets you work with files and directories:\n\n**Reading files:**\n```javascript\nconst fs = require('fs').promises;\n\n// Async/await\nconst data = await fs.readFile('file.txt', 'utf8');\n\n// Synchronous (blocking)\nconst data = fs.readFileSync('file.txt', 'utf8');\n```\n\n**Writing files:**\n```javascript\nawait fs.writeFile('output.txt', 'Hello World!');\n```\n\n**Working with directories:**\n```javascript\nconst files = await fs.readdir('./directory');\n```\n\nAlways prefer async methods to avoid blocking the event loop. Need help with a specific file operation?";
    }
    
    if (input.includes('npm') || input.includes('package')) {
      return "npm (Node Package Manager) is essential for Node.js development:\n\n**Common commands:**\n• `npm init` - Create package.json\n• `npm install <package>` - Install package locally\n• `npm install -g <package>` - Install globally\n• `npm install --save-dev <package>` - Dev dependency\n• `npm start` - Run start script\n• `npm test` - Run tests\n\n**package.json structure:**\n```json\n{\n  \"name\": \"my-app\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"start\": \"node app.js\",\n    \"dev\": \"nodemon app.js\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.18.0\"\n  }\n}\n```\n\nWhat aspect of package management interests you?";
    }
    
    if (input.includes('error') || input.includes('debug') || input.includes('try') || input.includes('catch')) {
      return "Error handling is crucial in Node.js applications:\n\n**Try/Catch with async/await:**\n```javascript\nasync function handleOperation() {\n  try {\n    const result = await riskyOperation();\n    return result;\n  } catch (error) {\n    console.error('Error:', error.message);\n    throw error; // Re-throw if needed\n  }\n}\n```\n\n**Error-first callbacks:**\n```javascript\nfs.readFile('file.txt', (err, data) => {\n  if (err) {\n    console.error('File read error:', err);\n    return;\n  }\n  processData(data);\n});\n```\n\n**Global error handlers:**\n```javascript\nprocess.on('uncaughtException', (err) => {\n  console.error('Uncaught Exception:', err);\n  process.exit(1);\n});\n```\n\nWhat type of error handling scenario are you working with?";
    }
    
    if (input.includes('test') || input.includes('jest') || input.includes('mocha')) {
      return "Testing is essential for reliable Node.js applications. Popular frameworks:\n\n**Jest (most popular):**\n```javascript\n// math.test.js\nconst { add } = require('./math');\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(add(1, 2)).toBe(3);\n});\n\ntest('async operation', async () => {\n  const result = await asyncFunction();\n  expect(result).toEqual({ success: true });\n});\n```\n\n**Mocha with Chai:**\n```javascript\nconst chai = require('chai');\nconst expect = chai.expect;\n\ndescribe('Math functions', () => {\n  it('should add numbers correctly', () => {\n    expect(add(2, 3)).to.equal(5);\n  });\n});\n```\n\nSetup: `npm install --save-dev jest` or `npm install --save-dev mocha chai`\n\nWhat testing scenario do you need help with?";
    }

    // Default response for unrecognized inputs
    return "I'm here to help you learn Node.js! I can assist with:\n\n• Core concepts and modules\n• Asynchronous programming (callbacks, promises, async/await)\n• File system operations\n• Express.js and web servers\n• Package management with npm\n• Error handling and debugging\n• Testing strategies\n• Best practices\n\nWhat specific Node.js topic would you like to explore? Feel free to ask about code examples, explanations, or help with debugging!";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    setIsLoading(true);

    // Simulate thinking time
    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-full flex flex-col bg-dark/50 relative z-10">
      {/* Header */}
      <div className="p-4 border-b border-neon-green/20">
        <h3 className="text-lg font-bold text-neon-green">AI Tutor</h3>
        <p className="text-xs text-gray-400">Ask me anything about Node.js</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-neon-green/20 text-white border border-neon-green/50'
                  : 'bg-gray-800/50 text-gray-300 border border-gray-600/30'
              }`}
            >
              <div className="flex items-center mb-1">
                <div className="w-6 h-6 rounded-full mr-2 flex items-center justify-center">
                  {message.role === 'user' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-neon-green">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-neon-mint">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  )}
                </div>
                <span className="text-xs font-medium opacity-80">
                  {message.role === 'user' ? 'You' : 'AI Tutor'}
                </span>
              </div>
              <div className="text-sm whitespace-pre-wrap">
                {message.content}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[85%] p-3 rounded-lg bg-gray-800/50 border border-gray-600/30">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-neon-green/20">
        <div className="flex space-x-2">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about Node.js concepts, code examples..."
            className="flex-1 p-3 bg-gray-900 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-neon-green/50 resize-none h-12 text-sm"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !inputMessage.trim()}
            className="px-4 py-2 bg-neon-green/20 text-neon-green rounded-lg border border-neon-green/50 hover:bg-neon-green/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

window.AIChat = AIChat;