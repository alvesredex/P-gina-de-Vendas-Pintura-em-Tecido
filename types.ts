import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
  imageSeed: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  CURRICULUM = 'curriculum',
  BENEFITS = 'benefits',
  PRICING = 'pricing',
  FAQ = 'faq'
}