import React from 'react';
import { Customer } from '../types';
import Icon from './Icon';

interface CustomersProps {
  customers: Customer[];
  onAddCustomerClick: () => void;
}

const getStatusColor = (status: Customer['status']) => {
    switch (status) {
        case 'Active': return 'bg-green-500/20 text-green-500 dark:text-green-300';
        case 'Lead': return 'bg-blue-500/20 text-blue-500 dark:text-blue-300';
        case 'Lost': return 'bg-red-500/20 text-red-500 dark:text-red-300';
        default: return 'bg-slate-500/20 text-slate-500 dark:text-slate-300';
    }
}

const CustomerRow: React.FC<{ customer: Customer }> = ({ customer }) => (
    <tr className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200">
        <td className="p-4 text-slate-900 dark:text-white font-medium">{customer.name}</td>
        <td className="p-4 text-slate-600 dark:text-slate-300">{customer.email}</td>
        <td className="p-4 text-slate-600 dark:text-slate-300">{customer.phone}</td>
        <td className="p-4 text-slate-600 dark:text-slate-300">{customer.lastContact}</td>
        <td className="p-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(customer.status)}`}>
                {customer.status}
            </span>
        </td>
        <td className="p-4">
             <div className="flex items-center space-x-2">
                <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"><Icon name="edit" className="w-5 h-5" /></button>
                <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"><Icon name="trash" className="w-5 h-5" /></button>
            </div>
        </td>
    </tr>
)

const Customers: React.FC<CustomersProps> = ({ customers, onAddCustomerClick }) => {
  return (
    <div className="p-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full max-w-xs">
          <input type="text" placeholder="Search customers..." className="w-full bg-slate-200 dark:bg-slate-700 p-3 pl-10 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300" />
          <Icon name="search" className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <button onClick={onAddCustomerClick} className="flex items-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all w-full sm:w-auto justify-center">
          <Icon name="plus" className="w-5 h-5 mr-2" />
          Add Customer
        </button>
      </div>
      <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg overflow-x-auto transition-colors duration-300">
        <table className="w-full text-left">
            <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                    <th className="p-4 font-semibold text-slate-600 dark:text-slate-300">Name</th>
                    <th className="p-4 font-semibold text-slate-600 dark:text-slate-300">Email</th>
                    <th className="p-4 font-semibold text-slate-600 dark:text-slate-300">Phone</th>
                    <th className="p-4 font-semibold text-slate-600 dark:text-slate-300">Last Contact</th>
                    <th className="p-4 font-semibold text-slate-600 dark:text-slate-300">Status</th>
                    <th className="p-4 font-semibold text-slate-600 dark:text-slate-300">Actions</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer => <CustomerRow key={customer.id} customer={customer} />)}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
