import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a assistente do curso. Tem alguma dúvida sobre as aulas de pintura em tecido? 🎨' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(messages, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`bg-white w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto mb-4 border border-brand-100 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 h-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-500 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="font-bold">Dúvidas sobre o Curso?</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-brand-700/50 p-1 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 bg-slate-50 space-y-3">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex gap-1 items-center">
                <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-brand-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite sua dúvida..."
            className="flex-1 bg-slate-100 text-slate-800 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 border border-transparent"
          />
          <button 
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="bg-brand-600 text-white p-2 rounded-full hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5 pl-0.5" />
          </button>
        </form>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-brand-600 hover:bg-brand-700 text-white p-4 rounded-full shadow-lg shadow-brand-500/40 transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
      >
        <MessageCircle className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`} />
        <X className={`w-6 h-6 ${!isOpen ? 'hidden' : 'block'}`} />
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium pr-1">Tire suas dúvidas</span>}
      </button>
    </div>
  );
};

export default AIChat;