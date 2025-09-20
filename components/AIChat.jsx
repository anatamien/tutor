import React, { useState, useEffect, useRef } from 'react';

function AIChat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatManagerRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    chatManagerRef.current = new window.ChatManager(
      'You are a Node.js tutor AI assistant. Help users learn Node.js concepts, debug code, and understand best practices. Provide clear, concise explanations with practical examples. Focus on Node.js core modules, npm, Express.js, asynchronous programming, and common development patterns. Never use emojis or smileys in your responses.'
    );

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

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    setIsLoading(true);
    chatManagerRef.current.addMessage('user', userMessage);

    try {
      const response = await chatManagerRef.current.getCharacterResponse();
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      chatManagerRef.current.addMessage('assistant', response);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try asking your question again.'
      }]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-full flex flex-col bg-dark/50">
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