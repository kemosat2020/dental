
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-secondary">تواصل معنا واحجز موعدك</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتكم. فريقنا جاهز لخدمتكم.
          </p>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">الاسم الكامل</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light" required />
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light" required />
            </div>
             <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light" />
            </div>
            <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">رسالتك</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light" required></textarea>
            </div>
            <div className="md:col-span-2 text-center">
                <button type="submit" className="bg-primary text-white font-bold py-3 px-12 rounded-full hover:bg-primary-dark transition-transform duration-300 ease-in-out transform hover:scale-105">
                    إرسال الرسالة
                </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
