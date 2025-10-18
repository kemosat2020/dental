
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/800/600?random=10" 
              alt="داخل العيادة" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-secondary mb-4">عن عيادتنا</h2>
            <div className="mb-6 w-24 h-1 bg-primary rounded-full"></div>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              تأسست عيادتنا على مبدأ تقديم رعاية صحية فائقة لأسنانكم في بيئة مريحة وآمنة. نحن نؤمن بأن الابتسامة الجميلة هي مفتاح الثقة بالنفس، ولهذا نستخدم أحدث الأجهزة والتقنيات العالمية لضمان حصولكم على أفضل النتائج.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              فريقنا الطبي مكون من نخبة من الأطباء المتخصصين ذوي الخبرة الطويلة، والملتزمين بالتعلم المستمر لمواكبة كل ما هو جديد في عالم طب الأسنان. هدفنا ليس فقط علاج المشاكل الحالية، بل توعية مرضانا بأهمية الوقاية للحفاظ على صحة الفم والأسنان مدى الحياة.
            </p>
            <a href="#contact" className="bg-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-transform duration-300 ease-in-out transform hover:scale-105 inline-block">
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
