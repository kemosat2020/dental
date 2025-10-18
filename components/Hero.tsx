
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg animate-fade-in-down">
          ابتسامة صحية، حياة سعيدة
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 drop-shadow-md animate-fade-in-up">
          في عيادتنا، نجمع بين الخبرة وأحدث التقنيات لنقدم لك أفضل رعاية لأسنانك.
        </p>
        <a 
          href="#services" 
          className="bg-primary text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-primary-dark transition-transform duration-300 ease-in-out transform hover:scale-110 inline-block animate-bounce"
        >
          اكتشف خدماتنا
        </a>
      </div>
    </section>
  );
};

export default Hero;
