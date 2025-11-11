import React, { useState } from 'react';
import { Vehicle } from '../types';
import Icon from './Icon';

interface InventoryProps {
  vehicles: Vehicle[];
  onAddVehicleClick: () => void;
  onEditVehicleClick: (vehicle: Vehicle) => void;
  onDeleteVehicle: (id: number) => void;
}

const VehicleCard: React.FC<{ vehicle: Vehicle; onEdit: () => void; onDelete: () => void; }> = ({ vehicle, onEdit, onDelete }) => (
  <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-indigo-500/20 hover:border-indigo-500 transition-all duration-300 flex flex-col">
    <img src={vehicle.imageUrl} alt={`${vehicle.make} ${vehicle.model}`} className="w-full h-48 object-cover" />
    <div className="p-4 flex flex-col flex-grow">
      <div className="flex-grow">
        <p className="text-sm text-slate-500 dark:text-slate-400">{vehicle.year}</p>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">{vehicle.make} {vehicle.model}</h3>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">VIN: {vehicle.vin}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">£{vehicle.price.toLocaleString()}</p>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${vehicle.status === 'In Stock' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {vehicle.status}
        </span>
      </div>
    </div>
    <div className="p-2 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex justify-end space-x-1">
      <button onClick={onEdit} className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"><Icon name="edit" className="w-5 h-5" /></button>
      <button onClick={onDelete} className="p-2 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"><Icon name="trash" className="w-5 h-5" /></button>
    </div>
  </div>
);


const Inventory: React.FC<InventoryProps> = ({ vehicles, onAddVehicleClick, onEditVehicleClick, onDeleteVehicle }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles.filter(vehicle =>
    `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.vin}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full max-w-xs">
          <input 
            type="text" 
            placeholder="Search inventory..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-200 dark:bg-slate-700 p-3 pl-10 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300" />
          <Icon name="search" className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <button onClick={onAddVehicleClick} className="flex items-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all w-full sm:w-auto justify-center">
          <Icon name="plus" className="w-5 h-5 mr-2" />
          Add Vehicle
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} onEdit={() => onEditVehicleClick(vehicle)} onDelete={() => onDeleteVehicle(vehicle.id)} />)}
      </div>
    </div>
  );
};

export default Inventory;