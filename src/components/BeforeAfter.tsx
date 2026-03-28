import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';

export const BeforeAfter = () => {
  return (
    <section className="py-24 bg-blue-50/30">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Before & After</span>
        <h2 className="text-5xl font-black text-primary mb-20 leading-[1.1] tracking-tighter max-w-2xl mx-auto">
          Real Repairs. Real Results. Done Right.
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl group"
          >
            <img 
              src="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=1000&auto=format&fit=crop" 
              alt="Leaking sink" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <Badge className="absolute top-6 left-6 bg-white/20 backdrop-blur text-white border-none px-4 py-1 uppercase font-bold text-[10px]">Before</Badge>
            <div className="absolute bottom-10 left-10 text-white text-left">
              <h4 className="text-2xl font-black mb-2">Leaking Sink Pipe Causing Damage</h4>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl group"
          >
            <img 
              src="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?q=80&w=1000&auto=format&fit=crop" 
              alt="Repaired sink" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <Badge className="absolute top-6 left-6 bg-primary text-white border-none px-4 py-1 uppercase font-bold text-[10px]">After</Badge>
            <div className="absolute bottom-10 left-10 text-white text-left">
              <h4 className="text-2xl font-black mb-2">Damage Prevented, Pipe Restored</h4>
            </div>
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-primary/20"></div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-primary/20"></div>
        </div>
      </div>
    </section>
  );
};
