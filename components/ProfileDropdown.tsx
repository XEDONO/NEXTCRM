import React from 'react';
import Icon from './Icon';
import { DealerProfile } from '../types';

interface ProfileDropdownProps {
  onEditProfile: () => void;
  profile: DealerProfile;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onEditProfile, profile }) => {
  return (
    <div className="absolute top-full right-0 mt-2 w-56 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 animate-fade-in p-2 z-30">
      <div className="p-2">
        <p className="font-bold text-slate-800 dark:text-white truncate">{profile.name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{profile.email}</p>
      </div>
      <div className="h-px bg-slate-200 dark:bg-slate-700 my-1"></div>
      <ul>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); onEditProfile(); }} className="flex items-center w-full text-left px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors">
            <Icon name="user" className="w-5 h-5 mr-3" /> Profile
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center w-full text-left px-3 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors">
            <Icon name="settings" className="w-5 h-5 mr-3" /> Settings
          </a>
        </li>
      </ul>
      <div className="h-px bg-slate-200 dark:bg-slate-700 my-1"></div>
      <ul>
        <li>
          <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center w-full text-left px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/20 rounded-md transition-colors">
            <Icon name="logout" className="w-5 h-5 mr-3" /> Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;