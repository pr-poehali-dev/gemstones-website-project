export interface Gemstone {
  id: string;
  name: string;
  scientificName?: string;
  image: string;
  description: string;
  category: 'precious' | 'semiprecious' | 'organic' | 'mineral';
  color: string[];
  hardness: number;
  chakra?: string[];
  energy?: string[];
  healing?: string[];
  zodiac?: string[];
  origin?: string[];
}

export interface SearchFilters {
  category?: string;
  color?: string[];
  chakra?: string[];
  energy?: string[];
  hardness?: [number, number];
  searchQuery?: string;
}
