import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Tag, Users, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    title: "Licensed & Insured",
    desc: "Every technician is certified and background-checked.",
    icon: ShieldCheck
  },
  {
    title: "Same-Day Service",
    desc: "We show up when it matters to get the job done fast.",
    icon: Zap
  },
  {
    title: "Fixed Upfront Pricing",
    desc: "No hidden fees. No surprises. You approve the price.",
    icon: Tag
  },
  {
    title: "5,000+ Repairs",
    desc: "Trusted across Austin, Round Rock, Cedar Park, and more.",
    icon: Users
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Why Choose Us</span>
            <h2 className="text-5xl font-black text-primary mb-8 leading-[1.1] tracking-tighter">
              Committed to Your<br />Comfort & Safety.
            </h2>
            <p className="text-gray-500 mb-12 max-w-lg">
              We prioritize your comfort and safety by delivering dependable plumbing services you can trust our professionals follow quality standards.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center text-primary">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-primary mb-2">{feature.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?q=80&w=1000&auto=format&fit=crop" 
                alt="Plumber smiling" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              
              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="bg-white w-20 h-20 rounded-full flex items-center justify-center text-primary shadow-2xl cursor-pointer"
                >
                  <Play fill="currentColor" size={24} className="ml-1" />
                </motion.div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-10 right-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-2 rounded-xl text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-gray-500">Certified</p>
                    <p className="text-sm font-black text-primary">Top Rated Pro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
