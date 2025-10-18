
import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from './ServiceCard';
import type { Service } from '../types';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-secondary">خدماتنا المتميزة</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات العلاجية والتجميلية لتلبية كافة احتياجاتكم.
          </p>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service: Service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
