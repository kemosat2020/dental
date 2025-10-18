// Fix: Import React to define components and use JSX.
import React from 'react';
import type { NavLink, Service, Testimonial } from './types';

const TeethIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WhiteningIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-10.41L13 13.17V7h-2v6.17l-3.59-3.58L6 11l6 6 6-6-1.41-1.41z" />
    </svg>
  );
  
  const ImplantIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H9v-4H7v4H5v-6h6v6zm6-2h-2v2h-2v-4h4v2zm0-4h-4v-2h4v2z" />
    </svg>
  );

  const OrthodonticsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#about', label: 'عن العيادة' },
  { href: '#testimonials', label: 'آراء المرضى' },
  { href: '#contact', label: 'اتصل بنا' },
];

export const SERVICES: Service[] = [
  {
    icon: WhiteningIcon,
    title: 'تبييض الأسنان',
    description: 'نقدم أحدث تقنيات تبييض الأسنان للحصول على ابتسامة مشرقة وجذابة في جلسة واحدة.',
  },
  {
    icon: ImplantIcon,
    title: 'زراعة الأسنان',
    description: 'حلول دائمة وموثوقة لتعويض الأسنان المفقودة باستخدام أفضل المواد والتصاميم العالمية.',
  },
  {
    icon: OrthodonticsIcon,
    title: 'تقويم الأسنان',
    description: 'علاجات تقويمية متكاملة للأطفال والبالغين، باستخدام التقويم الشفاف والمعدني.',
  },
  {
    icon: TeethIcon,
    title: 'تنظيف الأسنان',
    description: 'جلسات تنظيف احترافية لإزالة الجير والتصبغات للحفاظ على صحة اللثة وجمال الأسنان.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'تجربة رائعة وفاقت توقعاتي! الفريق الطبي محترف جداً والعيادة نظيفة ومجهزة بأحدث التقنيات. حصلت على ابتسامة أحلامي.',
    name: 'أحمد الغامدي',
    city: 'الرياض',
    avatar: 'https://picsum.photos/100/100?random=1',
  },
  {
    quote: 'كنت أعاني من خوف شديد من طبيب الأسنان، لكن دكتور خالد وفريقه كانوا في قمة اللطف والتفهم. العلاج كان بدون أي ألم.',
    name: 'فاطمة الزهراني',
    city: 'جدة',
    avatar: 'https://picsum.photos/100/100?random=2',
  },
  {
    quote: 'النتائج كانت مذهلة بعد تقويم الأسنان. شكراً جزيلاً للعيادة على الاهتمام والمتابعة المستمرة طوال فترة العلاج.',
    name: 'سارة العتيبي',
    city: 'الدمام',
    avatar: 'https://picsum.photos/100/100?random=3',
  },
];