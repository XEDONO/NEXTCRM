import React, { useState } from 'react';
import Icon from './Icon';
import { Customer } from '../types';

interface AddCustomerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomer: (customer: Omit<Customer, 'id'>) => void;
}

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({ isOpen, onClose, onAddCustomer }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCustomer({ 
        name, 
        email, 
        phone, 
        lastContact: new Date().toISOString().split('T')[0], // Today's date
        status: 'Lead' 
    });
    onClose();
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 animate-fade-in">
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg shadow-2xl p-8 w-full max-w-lg border border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Add New Customer</h2>
          <button onClick={onClose} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Icon name="x" className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="w-full bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" required />
          <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" required />
          <input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} className="w-full bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" />
          <div className="mt-8 flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="py-2 px-4 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500 rounded text-slate-800 dark:text-white font-semibold">Cancel</button>
            <button type="submit" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold flex items-center">
              <Icon name="plus" className="w-5 h-5 mr-2" /> Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomerModal;
