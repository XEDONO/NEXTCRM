import React, { useEffect, useRef } from 'react';
import StatsCard from './StatsCard';
import { Vehicle, Customer, DealerProfile } from '../types';
import Icon from './Icon';

interface DashboardProps {
    vehicles: Vehicle[];
    customers: Customer[];
    salesData: any;
    profile: DealerProfile;
}

const Dashboard: React.FC<DashboardProps> = ({ vehicles, customers, salesData, profile }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<any>(null);

  const totalVehicles = vehicles.length;
  const inventoryValue = vehicles
    .filter(v => v.status === 'In Stock')
    .reduce((sum, v) => sum + v.price, 0);
  
  const salesThisMonth = salesData.monthlySales[salesData.monthlySales.length - 1]?.sales || 0;
  const totalCustomers = customers.length;
  
  const recentActivities = [
    { type: 'Sale', text: `Sold a ${vehicles.find(v => v.status === 'Sold')?.make || ''} ${vehicles.find(v => v.status === 'Sold')?.model || ''}.` },
    { type: 'Lead', text: `New lead: ${customers.find(c => c.status === 'Lead')?.name || ''}.` },
    { type: 'Inventory', text: `Added a ${vehicles[0]?.year} ${vehicles[0]?.make} ${vehicles[0]?.model}.` },
  ];

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstanceRef.current = new (window as any).Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
              label: 'Sales',
              data: salesData.weeklyTrend,
              borderColor: '#6366f1',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              fill: true,
              tension: 0.4,
              borderWidth: 2,
              pointBackgroundColor: '#6366f1',
              pointRadius: 0,
              pointHoverRadius: 6,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#1e293b',
                    titleColor: '#e2e8f0',
                    bodyColor: '#e2e8f0',
                },
            },
            scales: {
              x: { display: false },
              y: { display: false }
            }
          }
        });
      }
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [salesData.weeklyTrend]);

  return (
    <div className="p-6 animate-fade-in space-y-6">
        <div className="mb-6">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Welcome back, {profile.name}!</h1>
            <p className="text-slate-500 dark:text-slate-400">Here's a snapshot of your dealership's performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard icon="car" title="Vehicles In Stock" value={vehicles.filter(v => v.status === 'In Stock').length.toString()} change="+2 this week" isPositive={true}/>
            <StatsCard icon="dollar-sign" title="Inventory Value" value={`£${(inventoryValue / 1000).toFixed(0)}k`} change="-1.2% vs last week" isPositive={false}/>
            <StatsCard icon="users" title="New Customers" value={customers.filter(c => c.status === 'Lead').length.toString()} change="+10 this month" isPositive={true}/>
            <StatsCard icon="car" title="Sales This Month" value={salesThisMonth.toString()} change="+5.6% vs last month" isPositive={true}/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Weekly Sales Trend</h3>
                <div className="h-64">
                    <canvas ref={chartRef}></canvas>
                </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
                 <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Recent Activity</h3>
                 <ul className="space-y-4">
                    {recentActivities.map((activity, index) => (
                        <li key={index} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">
                                <span className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                    activity.type === 'Sale' ? 'bg-green-100 dark:bg-green-900/50 text-green-500' :
                                    activity.type === 'Lead' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-500' :
                                    'bg-slate-200 dark:bg-slate-700 text-slate-500'
                                }`}>
                                    <Icon name={activity.type === 'Sale' ? 'dollar-sign' : activity.type === 'Lead' ? 'users' : 'car'} className="h-5 w-5" />
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{activity.text}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Just now</p>
                            </div>
                        </li>
                    ))}
                 </ul>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;