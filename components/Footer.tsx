
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} عيادة الأسنان الحديثة. جميع الحقوق محفوظة.</p>
        <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-primary transition-colors duration-300">فيسبوك</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">تويتر</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">انستغرام</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
