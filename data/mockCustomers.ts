import { Customer } from '../types';

export const mockCustomers: Customer[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    phone: '555-0101',
    lastContact: '2024-05-20',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob.w@example.com',
    phone: '555-0102',
    lastContact: '2024-05-18',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.b@example.com',
    phone: '555-0103',
    lastContact: '2024-05-22',
    status: 'Lead',
  },
  {
    id: 4,
    name: 'Diana Miller',
    email: 'diana.m@example.com',
    phone: '555-0104',
    lastContact: '2024-04-15',
    status: 'Lost',
  },
    {
    id: 5,
    name: 'Ethan Davis',
    email: 'ethan.d@example.com',
    phone: '555-0105',
    lastContact: '2024-05-21',
    status: 'Lead',
  },
];
