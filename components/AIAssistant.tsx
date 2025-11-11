import React, { useState } from 'react';
import Icon from './Icon';

const AIAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="bg-white dark:bg-slate-700 text-slate-900 dark:text-white p-4 rounded-lg shadow-xl mb-2 animate-fade-in w-64 border border-slate-200 dark:border-slate-600">
                    <h4 className="font-bold mb-2">AI Assistant</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                        Chatbot integration coming soon! Ask questions about inventory, sales trends, and more.
                    </p>
                </div>
            )}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-indigo-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle AI Assistant"
            >
                <Icon name={isOpen ? "x" : "sparkles"} className="w-8 h-8" />
            </button>
        </div>
    );
};

export default AIAssistant;
