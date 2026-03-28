import React from 'react';
import { motion } from 'motion/react';

const logos = [
  "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"
];

export const Logos = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-50">
      <div className="container mx-auto px-4 md:px-12">
        <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Trusted By Leading Brands</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-primary rounded-lg"></div>
              <span className="font-black text-xl tracking-tighter text-primary">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
