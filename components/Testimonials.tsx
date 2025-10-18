
import React from 'react';
import { TESTIMONIALS } from '../constants';
import TestimonialCard from './TestimonialCard';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-secondary">ماذا يقول مرضانا عنا؟</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            شهادات نعتز بها من مرضانا الذين وضعوا ثقتهم فينا.
          </p>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial: Testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
