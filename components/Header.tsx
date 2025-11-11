import React, { useState } from 'react';
import Icon from './Icon';
import ProfileDropdown from './ProfileDropdown';

interface HeaderProps {
    title: string;
    onMenuClick: () => void;
    theme: string;
    setTheme: (theme: string) => void;
    onProfileClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onMenuClick, theme, setTheme, onProfileClick }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="flex items-center justify-between p-6 bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-20 lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:static">
      {/* Mobile Menu Button */}
      <button onClick={onMenuClick} className="lg:hidden text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
        <Icon name="menu" className="w-6 h-6" />
      </button>

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white capitalize">
        {title}
      </h1>

      {/* Placeholder for User Profile/Actions */}
      <div className="flex items-center space-x-2 sm:space-x-4">
         <button onClick={toggleTheme} className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="w-6 h-6" />
        </button>
        <div className="relative">
             <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-indigo-500 dark:text-indigo-400 font-bold border-2 border-transparent hover:border-indigo-500 transition-colors">
                AJ
             </button>
             {isProfileOpen && <ProfileDropdown onEditProfile={() => { onProfileClick(); setIsProfileOpen(false); }} />}
        </div>
      </div>
    </header>
  );
};

export default Header;