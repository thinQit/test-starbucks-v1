export interface NavItem {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  badges?: string[];
}

export interface MenuCategory {
  category?: string;
  name?: string;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  location?: string;
  quote: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string[];
  amenities: string[];
  coords: {
    lat: number;
    lng: number;
  };
}
