import React from 'react';
import Icon, { IconName } from './Icon';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  setView: (view: View) => void;
  isSidebarOpen: boolean;
}

const NavItem: React.FC<{
  icon: IconName;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <li>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`flex items-center p-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group ${isActive ? 'bg-indigo-600 text-white shadow-lg' : ''}`}
    >
      <Icon name={icon} className={`w-6 h-6 transition-colors ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200'}`} />
      <span className={`ml-4 font-medium ${isActive ? 'text-white' : 'text-slate-800 dark:text-white'}`}>{label}</span>
    </a>
  </li>
);

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 200 50" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor"
  >
    <path d="M25 5 L5 25 L25 45 L45 25 Z M25 15 L35 25 L25 35 L15 25 Z" />
    <text x="55" y="35" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="bold">
      NextCRM
    </text>
  </svg>
);


const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, isSidebarOpen }) => {
  return (
    <aside className={`absolute inset-y-0 left-0 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 w-64 p-6 transform transition-transform duration-300 ease-in-out z-30 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center mb-10 h-8">
        <Logo className="h-8 w-auto text-indigo-600 dark:text-indigo-400" />
      </div>
      <nav>
        <ul className="space-y-3">
          <NavItem icon="dashboard" label="Dashboard" isActive={currentView === 'dashboard'} onClick={() => setView('dashboard')} />
          <NavItem icon="car" label="Inventory" isActive={currentView === 'inventory'} onClick={() => setView('inventory')} />
          <NavItem icon="users" label="Customers" isActive={currentView === 'customers'} onClick={() => setView('customers')} />
          <NavItem icon="globe" label="Website" isActive={currentView === 'website'} onClick={() => setView('website')} />
          <NavItem icon="dollar-sign" label="Sales" isActive={currentView === 'sales'} onClick={() => setView('sales')} />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;