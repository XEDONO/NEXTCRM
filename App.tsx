import React, { useState, useEffect } from 'react';
import { View, Vehicle, Customer, DealerProfile } from './types';
import { mockVehicles } from './data/mockData';
import { mockCustomers } from './data/mockCustomers';
import { salesData } from './data/mockSales';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Customers from './components/Customers';
import WebsiteBuilder from './components/WebsiteBuilder';
import AddVehicleModal from './components/AddVehicleModal';
import AddCustomerModal from './components/AddCustomerModal';
import AIAssistant from './components/AIAssistant';
import ProfileModal from './components/ProfileModal';
import Sales from './components/Sales';

const initialProfile: DealerProfile = {
  name: 'AJ Motors',
  email: 'contact@ajmotors.co.uk',
  phone: '020 7946 0918',
  address: '123 Regent Street, London, W1B 5TH',
  vatNumber: 'GB123456789',
  logoUrl: 'https://placehold.co/100x100/4f46e5/ffffff?text=AJ'
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  
  // Initialize state from localStorage or fall back to mock data
  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    const savedVehicles = localStorage.getItem('vehicles');
    return savedVehicles ? JSON.parse(savedVehicles) : mockVehicles;
  });
  const [customers, setCustomers] = useState<Customer[]>(() => {
    const savedCustomers = localStorage.getItem('customers');
    return savedCustomers ? JSON.parse(savedCustomers) : mockCustomers;
  });
  const [profile, setProfile] = useState<DealerProfile>(() => {
    const savedProfile = localStorage.getItem('profile');
    return savedProfile ? JSON.parse(savedProfile) : initialProfile;
  });
  
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Effect for theme management
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Effects for data persistence
  useEffect(() => {
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
  }, [vehicles]);

  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);
  
  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);


  const handleAddVehicle = (newVehicleData: Omit<Vehicle, 'id' | 'status'>) => {
    const newVehicle: Vehicle = {
      id: vehicles.length > 0 ? Math.max(...vehicles.map(v => v.id)) + 1 : 1,
      ...newVehicleData,
      status: 'In Stock',
    };
    setVehicles([newVehicle, ...vehicles]);
  };
  
  const handleDeleteVehicle = (id: number) => {
    if(window.confirm('Are you sure you want to delete this vehicle?')) {
      setVehicles(vehicles.filter(v => v.id !== id));
    }
  };
  
  const handleAddCustomer = (newCustomerData: Omit<Customer, 'id'>) => {
    const newCustomer: Customer = {
      id: customers.length > 0 ? Math.max(...customers.map(c => c.id)) + 1 : 1,
      ...newCustomerData,
    };
    setCustomers([newCustomer, ...customers]);
  }

  const handleUpdateProfile = (newProfile: DealerProfile) => {
    setProfile(newProfile);
    setIsProfileModalOpen(false);
  };
  
  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard vehicles={vehicles} customers={customers} salesData={salesData} profile={profile} />;
      case 'inventory':
        return <Inventory vehicles={vehicles} onAddVehicleClick={() => setIsVehicleModalOpen(true)} onDeleteVehicle={handleDeleteVehicle} />;
      case 'customers':
        return <Customers customers={customers} onAddCustomerClick={() => setIsCustomerModalOpen(true)} />;
      case 'website':
        return <WebsiteBuilder vehicles={vehicles.filter(v => v.status === 'In Stock')} profile={profile} />;
      case 'sales':
        return <Sales salesData={salesData} theme={theme} />;
      default:
        return <Dashboard vehicles={vehicles} customers={customers} salesData={salesData} profile={profile} />;
    }
  };

  const setViewAndCloseSidebar = (view: View) => {
    setCurrentView(view);
    setIsSidebarOpen(false);
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200 flex transition-colors duration-300">
      {/* Overlay for mobile sidebar */}
       {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <Sidebar 
        currentView={currentView}
        setView={setViewAndCloseSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
            title={currentView} 
            onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
            theme={theme}
            setTheme={setTheme}
            onProfileClick={() => setIsProfileModalOpen(true)}
        />
        <main className="flex-1 overflow-y-auto">
          {renderView()}
        </main>
      </div>

      <AddVehicleModal 
        isOpen={isVehicleModalOpen}
        onClose={() => setIsVehicleModalOpen(false)}
        onAddVehicle={handleAddVehicle}
      />
      
      <AddCustomerModal
        isOpen={isCustomerModalOpen}
        onClose={() => setIsCustomerModalOpen(false)}
        onAddCustomer={handleAddCustomer}
      />

      <ProfileModal 
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onSave={handleUpdateProfile}
      />

      <AIAssistant />
    </div>
  );
};

export default App;