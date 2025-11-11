import React from 'react';
import Icon, { IconName } from './Icon';

interface StatsCardProps {
  icon: IconName;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, change, isPositive }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-slate-500 dark:text-slate-400">{title}</h3>
        <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg">
          <Icon name={icon} className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
        </div>
      </div>
      <p className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{value}</p>
      <div className={`text-sm font-semibold ${isPositive ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
        {change}
      </div>
    </div>
  );
};

export default StatsCard;
