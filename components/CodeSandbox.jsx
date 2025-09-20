import React, { useState } from 'react';

function CodeSandbox({ initialCode, solution }) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const runCode = () => {
    try {
      // Create a mock console for output
      let mockOutput = '';
      const mockConsole = {
        log: (...args) => {
          mockOutput += args.join(' ') + '\n';
        }
      };
      
      // Create a function with the code and execute it
      const func = new Function('console', 'process', code);
      const mockProcess = { version: 'v18.17.0' };
      func(mockConsole, mockProcess);
      
      setOutput(mockOutput || 'Code executed successfully (no output)');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setShowSolution(false);
  };

  const showSolutionCode = () => {
    setCode(solution);
    setShowSolution(true);
  };

  return (
    <div className="space-y-4">
      {/* Code Editor */}
      <div className="neon-card">
        <div className="flex items-center justify-between p-3 border-b border-neon-green/20">
          <span className="text-neon-mint font-medium">Code Editor</span>
          <div className="flex space-x-2">
            <button
              onClick={runCode}
              className="px-3 py-1 bg-neon-green/20 text-neon-green rounded border border-neon-green/50 hover:bg-neon-green/30 transition-all duration-300"
            >
              Run
            </button>
            <button
              onClick={resetCode}
              className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded border border-gray-600/50 hover:bg-gray-600/30 transition-all duration-300"
            >
              Reset
            </button>
            {solution && (
              <button
                onClick={showSolutionCode}
                className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded border border-blue-500/50 hover:bg-blue-500/30 transition-all duration-300"
              >
                Solution
              </button>
            )}
          </div>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-48 p-4 bg-gray-900 text-white font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-neon-green/50"
          spellCheck={false}
        />
      </div>

      {/* Output Panel */}
      {output && (
        <div className="neon-card">
          <div className="p-3 border-b border-neon-green/20">
            <span className="text-neon-mint font-medium">Output</span>
          </div>
          <pre className="p-4 bg-gray-900 text-gray-300 font-mono text-sm whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}

      {showSolution && (
        <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-sm">
          Solution loaded! This is one possible way to solve the task.
        </div>
      )}
    </div>
  );
}

window.CodeSandbox = CodeSandbox;