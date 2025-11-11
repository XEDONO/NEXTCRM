import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { DealerProfile } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: DealerProfile;
  onSave: (profile: DealerProfile) => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, profile, onSave }) => {
  const [formData, setFormData] = useState<DealerProfile>(profile);

  useEffect(() => {
    setFormData(profile);
  }, [profile, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 animate-fade-in">
      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg shadow-2xl p-8 w-full max-w-3xl border border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Dealer Profile</h2>
          <button onClick={onClose} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
            <Icon name="x" className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-6">
              <img src={formData.logoUrl} alt="Dealer Logo" className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-700 object-cover border-4 border-slate-200 dark:border-slate-600" />
              <div className="flex-1">
                 <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Logo URL</label>
                 <input type="url" name="logoUrl" value={formData.logoUrl} onChange={handleChange} className="w-full bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" />
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Dealership Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Contact Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" />
            </div>
             <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Contact Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">VAT Number</label>
              <input type="text" name="vatNumber" value={formData.vatNumber} onChange={handleChange} className="w-full bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full bg-slate-200 dark:bg-slate-700 p-3 rounded text-slate-900 dark:text-white placeholder-slate-400" />
            </div>
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

export default ProfileModal;
