import React, { useEffect, useRef } from 'react';

interface SalesProps {
  salesData: any;
  theme: string;
}

const ChartCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">{title}</h3>
        <div className="h-80">
            {children}
        </div>
    </div>
);

const Sales: React.FC<SalesProps> = ({ salesData, theme }) => {
  const barChartRef = useRef<HTMLCanvasElement | null>(null);
  const lineChartRef = useRef<HTMLCanvasElement | null>(null);
  const doughnutChartRef = useRef<HTMLCanvasElement | null>(null);
  
  const barChartInstance = useRef<any>(null);
  const lineChartInstance = useRef<any>(null);
  const doughnutChartInstance = useRef<any>(null);

  useEffect(() => {
    const isDark = theme === 'dark';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const textColor = isDark ? '#e2e8f0' : '#334155';
    
    const chartConfigs = [
        // Bar Chart - Monthly Sales
        {
            ref: barChartRef,
            instance: barChartInstance,
            type: 'bar',
            data: {
                labels: salesData.monthlySales.map((d: any) => d.month),
                datasets: [{
                    label: 'Units Sold',
                    data: salesData.monthlySales.map((d: any) => d.sales),
                    backgroundColor: 'rgba(99, 102, 241, 0.7)',
                    borderColor: 'rgba(99, 102, 241, 1)',
                    borderWidth: 1,
                    borderRadius: 4,
                }],
            },
            options: {
                scales: { 
                    y: { ticks: { color: textColor }, grid: { color: gridColor } },
                    x: { ticks: { color: textColor }, grid: { color: 'transparent' } }
                },
                plugins: { legend: { display: false } }
            }
        },
        // Line Chart - Monthly Revenue
        {
            ref: lineChartRef,
            instance: lineChartInstance,
            type: 'line',
            data: {
                labels: salesData.monthlySales.map((d: any) => d.month),
                datasets: [{
                    label: 'Revenue (£)',
                    data: salesData.monthlySales.map((d: any) => d.revenue),
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: true,
                    tension: 0.4,
                }],
            },
            options: {
                scales: { 
                    y: { ticks: { color: textColor, callback: (value: number) => `£${value/1000}k` }, grid: { color: gridColor } },
                    x: { ticks: { color: textColor }, grid: { color: 'transparent' } }
                },
                plugins: { legend: { display: false } }
            }
        },
        // Doughnut Chart - Sales by Make
        {
            ref: doughnutChartRef,
            instance: doughnutChartInstance,
            type: 'doughnut',
            data: {
                labels: salesData.salesByMake.map((d: any) => d.make),
                datasets: [{
                    label: 'Units Sold',
                    data: salesData.salesByMake.map((d: any) => d.count),
                    backgroundColor: ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff', '#f1f5f9'],
                    borderColor: isDark ? '#334155' : '#fff',
                }],
            },
            options: {
                 plugins: { legend: { position: 'bottom', labels: { color: textColor } } }
            }
        },
    ];

    chartConfigs.forEach(config => {
        if (config.ref.current) {
            if (config.instance.current) {
                config.instance.current.destroy();
            }
            const ctx = config.ref.current.getContext('2d');
            if (ctx) {
                config.instance.current = new (window as any).Chart(ctx, {
                    type: config.type,
                    data: config.data,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        ...config.options,
                    },
                });
            }
        }
    });

    return () => {
        chartConfigs.forEach(config => {
            if (config.instance.current) {
                config.instance.current.destroy();
            }
        });
    };
  }, [salesData, theme]);

  return (
    <div className="p-6 animate-fade-in space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
                <ChartCard title="Monthly Sales Volume">
                    <canvas ref={barChartRef}></canvas>
                </ChartCard>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg flex flex-col justify-center items-center text-center">
                 <h3 className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-2">Lead Conversion Rate</h3>
                 <p className="text-6xl font-bold text-indigo-600 dark:text-indigo-400">{salesData.leadConversion}%</p>
                 <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">of all leads became customers this quarter.</p>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
             <div className="lg:col-span-3">
                <ChartCard title="Monthly Revenue">
                    <canvas ref={lineChartRef}></canvas>
                </ChartCard>
            </div>
             <div className="lg:col-span-2">
                <ChartCard title="Sales by Make">
                    <canvas ref={doughnutChartRef}></canvas>
                </ChartCard>
            </div>
        </div>
    </div>
  );
};

export default Sales;
