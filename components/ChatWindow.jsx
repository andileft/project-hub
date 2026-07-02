import React, { useState, useEffect, useRef } from 'react';
import { callGemini } from '../utils/ai.js';
import { formatAssistantMessageHtml, formatShortCurrency } from '../utils/formatting.js';
import { SparklesIcon, XIcon, SendHorizontalIcon } from './Icons';

export const ChatWindow = ({ projects, onClose, onFilter }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I am your Project Assistant. Ask me about your projects, PMs, or status!' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = React.useRef(null);
  const [isAiThinking, setIsAiThinking] = useState(false);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isAiThinking) return;

    const userMsgText = input;
    const userMsg = { role: 'user', text: userMsgText };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsAiThinking(true);

    try {
      const dataContext = projects.map(p => ({
        id: p.projNumber,
        name: p.projName,
        customer: p.customer,
        pm: p.pm || 'Unassigned',
        status: p.status,
        value: formatShortCurrency(p.value),
        mandays: formatShortCurrency(p.sisaMandays),
        subcon: p.subcon || 'None',
        methodology: p.methodology || 'BAST Only',
        solution: p.solusi || 'No solution recorded',
        notes: p.note || 'No notes available',
        start: p.start || 'Unknown',
        end: p.end || 'TBD',
        fileContent: Object.entries(p.files || {})
          .filter(([key]) => key.endsWith('_text'))
          .map(([key, val]) => `[${key.replace('_text', '').toUpperCase()}]: ${val.substring(0, 1000)}...`)
          .join('\n')
      }));

      const systemPrompt = `You are a Senior Project Portfolio Analyst and Advisor.
You have access to the COMPLETE project dataset including extracted text from uploaded documents (SDHO, MOM, etc.):
${JSON.stringify(dataContext)}

Capabilities & Instructions:
1. Analysis: Cross-reference project details, financial values, and document contents.
2. Documents: If asked about specific decisions or meeting outcomes, look into the "fileContent" field.
3. Formats: Use Markdown tables for comparisons. Format currencies in IDR.
4. Voice: Professional, analytical, and concise. Identify risks and suggest optimizations.`;

      const response = await callGemini(userMsgText, systemPrompt);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: "I'm sorry, I encountered an error. Please check your API key and network." }]);
    } finally {
      setIsAiThinking(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col z-50 animate-in slide-in-from-bottom-10 fade-in duration-300">
      <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-5 h-5" />
          <span className="font-bold text-sm">AI Portfolio Advisor</span>
        </div>
        <button onClick={onClose} className="hover:bg-white dark:bg-slate-800/20 p-1 rounded-lg transition-colors">
          <XIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="h-[400px] overflow-y-auto p-4 space-y-3 bg-slate-50 dark:bg-slate-900" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-xs font-medium leading-relaxed ${m.role === 'user'
                ? 'bg-indigo-600 text-white rounded-br-none shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none shadow-sm prose dark:prose-invert prose-slate'
              }`}>
              {m.role === 'assistant' ? <span dangerouslySetInnerHTML={{ __html: formatAssistantMessageHtml(m.text) }} /> : m.text}
            </div>
          </div>
        ))}
        {isAiThinking && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-800 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center">
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-800 flex gap-2">
        <input
          className="flex-1 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder="Ask about project docs or analysis..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit" disabled={!input.trim() || isAiThinking} className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          <SendHorizontalIcon className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
