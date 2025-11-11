import React, { useState } from 'react';
import Icon from './Icon';
import { Vehicle } from '../types';
import { generateVehicleDescription } from '../services/geminiService';


interface AddVehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddVehicle: (vehicle: Omit<Vehicle, 'id' | 'status'>) => void;
}

const AddVehicleModal: React.FC<AddVehicleModalProps> = ({ isOpen, onClose, onAddVehicle }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(new Date().getFullYear());
  const [price, setPrice] = useState(0);
  const [vin, setVin] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleGenerateDescription = async () => {
    if (!make || !model) {
      alert('Please provide a Make and Model before generating a description.');
      return;
    }
    setIsGenerating(true);
    try {
      const generatedDesc = await generateVehicleDescription(make, model, year);
      setDescription(generatedDesc);
    } catch (error) {
      console.error(error);
      alert('There was an error generating the description. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalImageUrl = imageUrl || 'images/placeholder-vehicle.jpg';
    onAddVehicle({ make, model, year, price, vin, imageUrl: finalImageUrl, description });
    onClose(); // Close modal after submission
    // Reset form
    setMake('');
    setModel('');
    setYear(new Date().getFullYear());
    setPrice(0);
    setVin('');
    setImageUrl('');
    setDescription('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 animate-fade-in">
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg shadow-2xl p-8 w-full max-w-2xl border border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Add New Vehicle</h2>
          <button onClick={onClose} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Icon name="x" className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Make (e.g., Ford)" value={make} onChange={e => setMake(e.target.value)} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" required />
            <input type="text" placeholder="Model (e.g., Mustang)" value={model} onChange={e => setModel(e.target.value)} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" required />
            <input type="number" placeholder="Year" value={year} onChange={e => setYear(Number(e.target.value))} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" required />
            <input type="number" placeholder="Price (£)" value={price} onChange={e => setPrice(Number(e.target.value))} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" required />
            <input type="text" placeholder="VIN" value={vin} onChange={e => setVin(e.target.value)} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400 col-span-2" required />
            <input type="url" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400 col-span-2" />
          </div>
          <div className="col-span-2">
            <textarea
              placeholder="Vehicle Description..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400 w-full min-h-[100px]"
              rows={4}
            />
             <button
              type="button"
              onClick={handleGenerateDescription}
              disabled={isGenerating}
              className="flex items-center justify-center mt-2 px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed rounded text-white font-semibold transition-colors"
            >
              <Icon name="sparkles" className="w-4 h-4 mr-2" />
              {isGenerating ? 'Generating...' : 'Generate with AI'}
            </button>
          </div>
          <div className="mt-8 flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="py-2 px-4 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500 rounded text-slate-800 dark:text-white font-semibold">Cancel</button>
            <button type="submit" className="py-2 px-4 bg-green-600 hover:bg-green-500 rounded text-white font-semibold flex items-center">
              <Icon name="plus" className="w-5 h-5 mr-2" /> Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicleModal;
