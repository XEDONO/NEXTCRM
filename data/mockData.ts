import { Vehicle } from '../types';

export const mockVehicles: Vehicle[] = [
  // Existing
  {
    id: 1, make: 'Tesla', model: 'Model 3', year: 2022, price: 38000, vin: '5YJ3E1EA5M', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Tesla+Model+3',
    description: 'A sleek, all-electric sedan offering impressive range and cutting-edge technology. Perfect for the modern driver.'
  },
  {
    id: 2, make: 'Ford', model: 'Mustang Mach-E', year: 2023, price: 45000, vin: '1FMCU0E17P', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Ford+Mustang',
    description: 'Experience exhilarating performance with this electric SUV. A true Mustang for a new generation of drivers.'
  },
  {
    id: 3, make: 'Rivian', model: 'R1T', year: 2023, price: 73000, vin: '7FCTGDE13P', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Rivian+R1T',
    description: 'The ultimate adventure vehicle. This electric truck combines rugged capability with premium comfort and innovative features.'
  },
  {
    id: 4, make: 'Honda', model: 'Civic Type R', year: 2021, price: 35000, vin: 'JH2FK8G33M', status: 'Sold',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Honda+Civic+Type+R',
    description: 'A high-performance hatchback that delivers a thrilling driving experience, track-ready and street-smart.'
  },
  {
    id: 5, make: 'Porsche', model: '911 Carrera', year: 2024, price: 115000, vin: 'WP0AB2A94R', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Porsche+911',
    description: 'An iconic sports car with timeless design and breathtaking performance. The legend continues with this stunning model.'
  },
  // New Additions
  {
    id: 6, make: 'Audi', model: 'Q5', year: 2022, price: 42000, vin: 'WA1L2AFH3N', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Audi+Q5',
    description: 'A luxury SUV that offers a refined interior, balanced performance, and a suite of modern technology.'
  },
  {
    id: 7, make: 'BMW', model: '3 Series', year: 2023, price: 48000, vin: 'WBA330I03P', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=BMW+3+Series',
    description: 'The quintessential sports sedan, delivering an engaging driving experience and premium appointments.'
  },
  {
    id: 8, make: 'Toyota', model: 'RAV4 Hybrid', year: 2023, price: 34000, vin: '2T3H1RFV5P', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Toyota+RAV4',
    description: 'Efficient, reliable, and versatile. The RAV4 Hybrid is the perfect companion for city commutes and weekend getaways.'
  },
  {
    id: 9, make: 'Land Rover', model: 'Defender 110', year: 2022, price: 68000, vin: 'SALDH2S84N', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Land+Rover+Defender',
    description: 'An off-road icon reimagined for the 21st century. Unstoppable capability meets rugged-yet-refined design.'
  },
  {
    id: 10, make: 'Mercedes-Benz', model: 'C-Class', year: 2021, price: 39000, vin: 'WDD2050401', status: 'Sold',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Mercedes+C-Class',
    description: 'Elegance, comfort, and innovation in a compact luxury sedan. A statement of style and sophistication.'
  },
  {
    id: 11, make: 'Volkswagen', model: 'Golf GTI', year: 2023, price: 32000, vin: 'WVW25AUG9P', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=VW+Golf+GTI',
    description: 'The original hot hatch, perfected. Fun, fast, and practical, the GTI is an enthusiast\'s daily driver.'
  },
  {
    id: 12, make: 'Subaru', model: 'Outback', year: 2022, price: 31000, vin: '4S4BTBLC6N', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Subaru+Outback',
    description: 'With standard all-wheel drive and a rugged spirit, the Outback is built for adventure and everyday life.'
  },
  {
    id: 13, make: 'Kia', model: 'Telluride', year: 2023, price: 46000, vin: 'KNDP34LC4P', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Kia+Telluride',
    description: 'A bold and spacious three-row SUV packed with family-friendly features and upscale design.'
  },
  {
    id: 14, make: 'Hyundai', model: 'Ioniq 5', year: 2023, price: 44000, vin: 'KMHLC4ED0P', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Hyundai+Ioniq+5',
    description: 'Retro-futuristic design meets cutting-edge EV technology. A spacious and fast-charging electric crossover.'
  },
  {
    id: 15, make: 'Jaguar', model: 'F-PACE', year: 2022, price: 55000, vin: 'SADFE2BNXN', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Jaguar+F-PACE',
    description: 'A luxury performance SUV that combines sporty handling with everyday usability and distinctive British style.'
  },
  {
    id: 16, make: 'Lexus', model: 'RX 350', year: 2023, price: 58000, vin: '2T2B31BCXP', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Lexus+RX+350',
    description: 'Synonymous with comfort and reliability, the RX 350 offers a serene ride and a meticulously crafted interior.'
  },
  {
    id: 17, make: 'Volvo', model: 'XC90', year: 2022, price: 62000, vin: 'YV4A22PL0N', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Volvo+XC90',
    description: 'A Scandinavian sanctuary on wheels. The XC90 prioritizes safety, comfort, and elegant, minimalist design.'
  },
  {
    id: 18, make: 'Mazda', model: 'MX-5 Miata', year: 2023, price: 30000, vin: 'JM1ND2EC7P', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Mazda+MX-5',
    description: 'Pure driving joy. A lightweight, perfectly balanced roadster that connects driver and road like no other.'
  },
  {
    id: 19, make: 'Chevrolet', model: 'Corvette', year: 2023, price: 85000, vin: '1G1YF2D43P', status: 'Sold',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Chevrolet+Corvette',
    description: 'An American supercar with exotic looks and breathtaking performance that challenges the world\'s best.'
  },
  {
    id: 20, make: 'Nissan', model: 'Leaf', year: 2022, price: 28000, vin: '1N4AZ1CP2N', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Nissan+Leaf',
    description: 'An affordable and practical electric vehicle, perfect for making the switch to zero-emission driving.'
  },
  {
    id: 21, make: 'Polestar', model: '2', year: 2023, price: 51000, vin: 'YSMFD2SAXP', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Polestar+2',
    description: 'A premium electric performance fastback with avant-garde design and a focus on sustainable materials.'
  },
  {
    id: 22, make: 'Jeep', model: 'Wrangler', year: 2022, price: 41000, vin: '1C4HJXDN9N', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Jeep+Wrangler',
    description: 'The definitive go-anywhere vehicle. Iconic design and legendary 4x4 capability for ultimate freedom.'
  },
  {
    id: 23, make: 'GMC', model: 'Yukon Denali', year: 2023, price: 78000, vin: '1GKS2CKCXP', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=GMC+Yukon+Denali',
    description: 'Professional grade luxury. A commanding presence with a premium interior and powerful V8 engine.'
  },
  {
    id: 24, make: 'Acura', model: 'MDX', year: 2022, price: 52000, vin: '5J8YD4H5XN', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Acura+MDX',
    description: 'A three-row luxury SUV with precision handling and a high-tech cabin designed around the driver.'
  },
  {
    id: 25, make: 'Mini', model: 'Cooper S', year: 2023, price: 29000, vin: 'WMWXT335XP', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Mini+Cooper+S',
    description: 'Go-kart handling and iconic style in a fun-sized package. The Cooper S adds a punch of performance.'
  },
  {
    id: 26, make: 'Ford', model: 'F-150 Lightning', year: 2023, price: 75000, vin: '1FTVW1ELXP', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Ford+F-150+Lightning',
    description: 'The future of trucks is here. All-electric power, impressive towing, and innovative features like Pro Power Onboard.'
  },
  {
    id: 27, make: 'Chrysler', model: 'Pacifica Hybrid', year: 2022, price: 49000, vin: '2C4RC1EG7N', status: 'Sold',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Chrysler+Pacifica',
    description: 'The most awarded minivan for a reason. A versatile and efficient plug-in hybrid perfect for families.'
  },
  {
    id: 28, make: 'Lucid', model: 'Air', year: 2023, price: 95000, vin: '4VZSA1DAXP', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Lucid+Air',
    description: 'Setting a new standard for luxury electric vehicles with groundbreaking range, performance, and interior space.'
  },
  {
    id: 29, make: 'Genesis', model: 'GV70', year: 2023, price: 47000, vin: 'KMSG25LCXP', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Genesis+GV70',
    description: 'A bold and athletic luxury SUV that stands out with its distinctive design and driver-focused interior.'
  },
  {
    id: 30, make: 'Porsche', model: 'Taycan', year: 2022, price: 105000, vin: 'WP0AD2A2XN', status: 'In Stock',
    imageUrl: 'https://placehold.co/640x480/1e293b/ffffff?text=Porsche+Taycan',
    description: 'The soul of a Porsche, electrified. A stunning electric sports car with incredible performance and handling.'
  }
];