export type View = 'dashboard' | 'inventory' | 'customers' | 'sales' | 'website';

export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  vin: string;
  imageUrl: string;
  status: 'In Stock' | 'Sold';
  description: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  lastContact: string;
  status: 'Lead' | 'Active' | 'Lost';
}

export interface DealerProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  vatNumber: string;
  logoUrl: string;
}
