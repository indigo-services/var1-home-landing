import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -10 }}
                className="rounded-[32px] overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&auto=format&fit=crop" 
                  alt="Plumber working" 
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="rounded-[32px] overflow-hidden shadow-xl mt-12"
              >
                <img 
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=600&auto=format&fit=crop" 
                  alt="Plumbing tools" 
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center border-8 border-white shadow-2xl">
              <span className="text-4xl font-black">15+</span>
              <span className="text-[10px] font-bold uppercase text-center leading-tight">Years of<br />Experience</span>
            </div>
          </div>

          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">About Us</span>
            <h2 className="text-5xl font-black text-primary mb-8 leading-[1.1] tracking-tighter">
              Delivering Quality<br />Plumbing Solutions
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              We are dedicated to delivering high-quality plumbing services built on expertise, reliability, and attention to detail. From routine maintenance to complex repairs, our skilled plumbers use modern tools to ensure lasting results.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                "Licensed & Insured",
                "Upfront, Flat pricing",
                "Same-day service",
                "Plumbing Experts"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-blue-50 p-1 rounded-full">
                    <CheckCircle2 size={18} className="text-primary" />
                  </div>
                  <span className="font-bold text-primary text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 font-bold h-14">
              Read More
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
