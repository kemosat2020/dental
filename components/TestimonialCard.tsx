
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col h-full">
      <div className="text-primary-dark mb-4 text-6xl opacity-20">
        ‟
      </div>
      <p className="text-gray-600 italic mb-6 flex-grow">
        {testimonial.quote}
      </p>
      <div className="flex items-center mt-auto">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-14 h-14 rounded-full object-cover border-4 border-primary/20"
        />
        <div className="mr-4">
          <p className="font-bold text-secondary">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.city}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
