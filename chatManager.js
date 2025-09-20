class ChatManager {
  constructor(systemPrompt) {
    this.systemPrompt = systemPrompt;
    this.messages = [];
    this.apiEndpoint = 'https://api.openai.com/v1/chat/completions';
  }

  addMessage(role, content) {
    this.messages.push({ role, content });
  }

  async getCharacterResponse() {
    // Since we don't have API keys available, let's create an intelligent mock response
    const lastMessage = this.messages[this.messages.length - 1];
    const userInput = lastMessage?.content?.toLowerCase() || '';

    // Simple keyword-based responses for Node.js topics
    if (userInput.includes('hello') || userInput.includes('hi')) {
      return "Hello! I'm here to help you learn Node.js. What specific topic would you like to explore? I can explain concepts like modules, async programming, file systems, or help debug code.";
    }
    
    if (userInput.includes('module') || userInput.includes('require') || userInput.includes('import')) {
      return "Node.js modules are the building blocks of applications. There are three types:\n\n1. Core modules (built-in): fs, http, path, os\n2. Local modules: your own files using module.exports\n3. Third-party modules: installed via npm\n\nExample:\n```javascript\nconst fs = require('fs'); // core module\nconst myModule = require('./myFile'); // local\nconst express = require('express'); // third-party\n```\n\nWould you like me to explain any specific module type?";
    }
    
    if (userInput.includes('async') || userInput.includes('promise') || userInput.includes('await')) {
      return "Asynchronous programming is key in Node.js! Here are the main patterns:\n\n1. Callbacks (traditional):\n```javascript\nfs.readFile('file.txt', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n```\n\n2. Promises (modern):\n```javascript\nconst readFile = util.promisify(fs.readFile);\nreadFile('file.txt').then(data => console.log(data));\n```\n\n3. Async/Await (cleanest):\n```javascript\nasync function readData() {\n  try {\n    const data = await readFile('file.txt');\n    console.log(data);\n  } catch (err) {\n    console.error(err);\n  }\n}\n```\n\nWhich pattern would you like to practice?";
    }
    
    if (userInput.includes('express') || userInput.includes('server') || userInput.includes('http')) {
      return "Express.js is the most popular Node.js web framework. Here's a basic setup:\n\n```javascript\nconst express = require('express');\nconst app = express();\n\n// Middleware\napp.use(express.json());\n\n// Routes\napp.get('/', (req, res) => {\n  res.json({ message: 'Hello World!' });\n});\n\napp.post('/users', (req, res) => {\n  const { name, email } = req.body;\n  res.json({ id: 1, name, email });\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});\n```\n\nWant to learn about routing, middleware, or error handling?";
    }
    
    if (userInput.includes('file') || userInput.includes('fs')) {
      return "The fs (file system) module lets you work with files and directories:\n\n**Reading files:**\n```javascript\nconst fs = require('fs').promises;\n\n// Async/await\nconst data = await fs.readFile('file.txt', 'utf8');\n\n// Synchronous (blocking)\nconst data = fs.readFileSync('file.txt', 'utf8');\n```\n\n**Writing files:**\n```javascript\nawait fs.writeFile('output.txt', 'Hello World!');\n```\n\n**Working with directories:**\n```javascript\nconst files = await fs.readdir('./directory');\n```\n\nAlways prefer async methods to avoid blocking the event loop. Need help with a specific file operation?";
    }
    
    if (userInput.includes('npm') || userInput.includes('package')) {
      return "npm (Node Package Manager) is essential for Node.js development:\n\n**Common commands:**\n• `npm init` - Create package.json\n• `npm install <package>` - Install package locally\n• `npm install -g <package>` - Install globally\n• `npm install --save-dev <package>` - Dev dependency\n• `npm start` - Run start script\n• `npm test` - Run tests\n\n**package.json structure:**\n```json\n{\n  \"name\": \"my-app\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"start\": \"node app.js\",\n    \"dev\": \"nodemon app.js\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.18.0\"\n  }\n}\n```\n\nWhat aspect of package management interests you?";
    }
    
    if (userInput.includes('error') || userInput.includes('debug') || userInput.includes('try') || userInput.includes('catch')) {
      return "Error handling is crucial in Node.js applications:\n\n**Try/Catch with async/await:**\n```javascript\nasync function handleOperation() {\n  try {\n    const result = await riskyOperation();\n    return result;\n  } catch (error) {\n    console.error('Error:', error.message);\n    throw error; // Re-throw if needed\n  }\n}\n```\n\n**Error-first callbacks:**\n```javascript\nfs.readFile('file.txt', (err, data) => {\n  if (err) {\n    console.error('File read error:', err);\n    return;\n  }\n  processData(data);\n});\n```\n\n**Global error handlers:**\n```javascript\nprocess.on('uncaughtException', (err) => {\n  console.error('Uncaught Exception:', err);\n  process.exit(1);\n});\n```\n\nWhat type of error handling scenario are you working with?";
    }
    
    if (userInput.includes('test') || userInput.includes('jest') || userInput.includes('mocha')) {
      return "Testing is essential for reliable Node.js applications. Popular frameworks:\n\n**Jest (most popular):**\n```javascript\n// math.test.js\nconst { add } = require('./math');\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(add(1, 2)).toBe(3);\n});\n\ntest('async operation', async () => {\n  const result = await asyncFunction();\n  expect(result).toEqual({ success: true });\n});\n```\n\n**Mocha with Chai:**\n```javascript\nconst chai = require('chai');\nconst expect = chai.expect;\n\ndescribe('Math functions', () => {\n  it('should add numbers correctly', () => {\n    expect(add(2, 3)).to.equal(5);\n  });\n});\n```\n\nSetup: `npm install --save-dev jest` or `npm install --save-dev mocha chai`\n\nWhat testing scenario do you need help with?";
    }

    // Default response for unrecognized inputs
    return "I'm here to help you learn Node.js! I can assist with:\n\n• Core concepts and modules\n• Asynchronous programming (callbacks, promises, async/await)\n• File system operations\n• Express.js and web servers\n• Package management with npm\n• Error handling and debugging\n• Testing strategies\n• Best practices\n\nWhat specific Node.js topic would you like to explore? Feel free to ask about code examples, explanations, or help with debugging!";
  }
}

window.ChatManager = ChatManager;