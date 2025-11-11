import React, { useState } from 'react';
import { Vehicle, DealerProfile } from '../types';
import Icon from './Icon';

const templates = [
  { name: 'Modern', imageUrl: 'https://placehold.co/400x300/1e293b/ffffff?text=Modern+Design' },
  { name: 'Classic', imageUrl: 'https://placehold.co/400x300/475569/ffffff?text=Classic+Look' },
  { name: 'Bold', imageUrl: 'https://placehold.co/400x300/be123c/ffffff?text=Bold+Statement' },
  { name: 'Minimalist', imageUrl: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Minimalist' },
  { name: 'Luxury', imageUrl: 'https://placehold.co/400x300/a16207/ffffff?text=Luxury+Feel' },
  { name: 'Dynamic', imageUrl: 'https://placehold.co/400x300/4f46e5/ffffff?text=Dynamic+Vibes' },
];

interface TemplateCardProps {
  name: string;
  imageUrl: string;
  isSelected: boolean;
  onSelect: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ name, imageUrl, isSelected, onSelect }) => (
    <div 
        className={`bg-white dark:bg-slate-800 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer group ${isSelected ? 'border-indigo-500 shadow-2xl scale-105' : 'border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500'}`}
        onClick={onSelect}
    >
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"/>
        <div className="p-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{name}</h3>
            <button className={`w-full mt-3 py-2 rounded-md font-semibold text-sm transition-colors ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-300 dark:bg-slate-600 text-slate-800 dark:text-slate-200 group-hover:bg-slate-400 dark:group-hover:bg-slate-500'}`}>
                {isSelected ? 'Selected' : 'Select Template'}
            </button>
        </div>
    </div>
);


interface WebsiteBuilderProps {
  vehicles: Vehicle[];
  profile: DealerProfile;
}

const WebsiteBuilder: React.FC<WebsiteBuilderProps> = ({ vehicles, profile }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('Modern');
  const [isPreviewing, setIsPreviewing] = useState(false);

  if (isPreviewing) {
    // This is a self-contained preview of the website. It doesn't use the app's shell.
    // NOTE: This uses standard Tailwind classes as if it were its own webpage.
    return (
      <div className="absolute inset-0 bg-white text-slate-800 z-50 overflow-y-auto">
        <header className="bg-slate-900 text-white p-6 flex justify-between items-center shadow-lg sticky top-0">
           <h1 className="text-3xl font-bold tracking-wider">{profile.name}</h1>
           <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-indigo-300 transition-colors">Home</a>
              <a href="#" className="hover:text-indigo-300 transition-colors">Inventory</a>
              <a href="#" className="hover:text-indigo-300 transition-colors">About Us</a>
              <a href="#" className="hover:text-indigo-300 transition-colors">Contact</a>
           </nav>
        </header>
        <main className="font-sans">
            <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{backgroundImage: "url('https://loremflickr.com/1280/720/car,dealership/all')"}}>
                <div className="bg-black/60 p-8 rounded-lg text-center">
                    <h2 className="text-5xl font-extrabold text-white">Find Your Next Ride</h2>
                    <p className="text-xl text-slate-200 mt-2">Premium selection of quality used vehicles.</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h3 className="text-4xl font-bold text-slate-900 my-8 text-center">Our Inventory</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {vehicles.map(v => (
                      <div key={v.id} className="bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300 group">
                          <img src={v.imageUrl} alt={`${v.make} ${v.model}`} className="w-full h-56 object-cover" />
                          <div className="p-6">
                              <h4 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{v.year} {v.make} {v.model}</h4>
                              <p className="text-indigo-600 font-semibold text-xl my-2">£{v.price.toLocaleString()}</p>
                              <p className="text-slate-600 text-sm mb-4 h-20 overflow-hidden">{v.description}</p>
                              <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors">View Details</button>
                          </div>
                      </div>
                  ))}
              </div>
            </div>
        </main>
        <footer className="bg-slate-900 text-slate-300 p-8 mt-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">{profile.name}</h4>
                    <p>{profile.address}</p>
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">Contact Us</h4>
                    <p>Email: {profile.email}</p>
                    <p>Phone: {profile.phone}</p>
                </div>
                <p className="md:col-start-3 md:text-right self-end">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
            </div>
        </footer>
         <button onClick={() => setIsPreviewing(false)} className="fixed bottom-6 right-6 bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition-transform hover:scale-110 z-50 ring-2 ring-white/50">
           <Icon name="x" className="w-6 h-6" /> <span className="sr-only">Exit Preview</span>
        </button>
      </div>
    )
  }

  // Template selection view
  return (
    <div className="p-6 animate-fade-in">
        <div className="mb-8 bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Dealership Website Builder</h2>
                <p className="text-slate-600 dark:text-slate-400">Choose a template to create and customize your public-facing website. All your 'In Stock' vehicles will be automatically listed.</p>
              </div>
               <button 
                  onClick={() => setIsPreviewing(true)}
                  disabled={!selectedTemplate}
                  className="bg-green-600 hover:bg-green-500 disabled:bg-green-800 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all flex items-center ml-4 whitespace-nowrap"
               >
                  <Icon name="globe" className="w-5 h-5 mr-2" />
                  Preview Website
               </button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map(template => (
                <TemplateCard 
                    key={template.name}
                    name={template.name}
                    imageUrl={template.imageUrl}
                    isSelected={selectedTemplate === template.name}
                    onSelect={() => setSelectedTemplate(template.name)}
                />
            ))}
        </div>
    </div>
  );
};

export default WebsiteBuilder;
