import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { Vehicle } from '../types';

interface EditVehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateVehicle: (vehicle: Vehicle) => void;
  vehicle: Vehicle | null;
}

const EditVehicleModal: React.FC<EditVehicleModalProps> = ({ isOpen, onClose, onUpdateVehicle, vehicle }) => {
  const [formData, setFormData] = useState<Vehicle | null>(null);

  useEffect(() => {
    setFormData(vehicle);
  }, [vehicle]);

  if (!isOpen || !formData) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => prev ? { ...prev, [name]: name === 'price' || name === 'year' ? Number(value) : value } : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      onUpdateVehicle(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 animate-fade-in">
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg shadow-2xl p-8 w-full max-w-2xl border border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Edit Vehicle</h2>
          <button onClick={onClose} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Icon name="x" className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="make" placeholder="Make" value={formData.make} onChange={handleChange} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white" required />
            <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white" required />
            <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white" required />
            <input type="number" name="price" placeholder="Price (£)" value={formData.price} onChange={handleChange} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white" required />
            <input type="text" name="vin" placeholder="VIN" value={formData.vin} onChange={handleChange} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white col-span-2" required />
            <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Status</label>
                <select 
                    name="status" 
                    value={formData.status} 
                    onChange={(e) => setFormData(prev => prev ? { ...prev, status: e.target.value as 'In Stock' | 'Sold' } : null)}
                    className="w-full bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white"
                >
                    <option value="In Stock">In Stock</option>
                    <option value="Sold">Sold</option>
                </select>
            </div>
            <input type="url" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white col-span-2" />
          </div>
          <div className="col-span-2">
            <textarea
              name="description"
              placeholder="Vehicle Description..."
              value={formData.description}
              onChange={handleChange}
              className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white w-full min-h-[100px]"
              rows={4}
            />
          </div>
          <div className="mt-8 flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="py-2 px-4 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500 rounded text-slate-800 dark:text-white font-semibold">Cancel</button>
            <button type="submit" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVehicleModal;