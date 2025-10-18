
import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-light p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out text-center">
      <div className="flex justify-center items-center mb-6">
        <div className="bg-primary/10 p-4 rounded-full">
            <Icon />
        </div>
      </div>
      <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
