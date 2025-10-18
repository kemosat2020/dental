// Fix: Import React namespace for type usage.
import type * as React from 'react';

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
  avatar: string;
}

export interface NavLink {
  href: string;
  label: string;
}