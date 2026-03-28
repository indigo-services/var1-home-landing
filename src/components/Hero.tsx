import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, PhoneCall, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-primary overflow-hidden min-h-[600px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="#FF9900" className="text-[#FF9900]" />
                ))}
              </div>
              <span className="text-sm font-bold">4.9/5 Reviews</span>
              <div className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold">G</div>
            </div>

            <h1 className="text-7xl md:text-[120px] font-black leading-[0.85] mb-8 tracking-tighter text-white">
              EXPERT<br />PLUMBING.
            </h1>

            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-lg font-medium leading-relaxed">
              Fast, licensed, and local. From leaks to toilets to heater failures—our experts fix it today.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 font-bold h-14">
                Book Appointment
                <ArrowRight size={18} className="ml-2" />
              </Button>
              
              <div className="flex gap-8 ml-4">
                <div>
                  <p className="text-3xl font-black">15K+</p>
                  <p className="text-xs opacity-80 font-bold uppercase tracking-wider">Satisfied Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-black">250+</p>
                  <p className="text-xs opacity-80 font-bold uppercase tracking-wider">Projects Completed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581244276891-8339386d3392?q=80&w=1000&auto=format&fit=crop" 
                alt="Expert Plumber" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 z-20 bg-primary text-white p-6 rounded-3xl shadow-xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-red-500 p-2 rounded-full animate-pulse">
                  <PhoneCall size={16} />
                </div>
                <span className="text-xs font-bold uppercase tracking-tighter">Emergency</span>
              </div>
              <p className="text-sm font-medium opacity-80">Typical arrival 30-60 min</p>
              <ArrowRight size={16} className="mt-4 text-primary" />
            </div>

            <div className="absolute -bottom-10 -left-10 z-20 bg-white p-2 rounded-3xl shadow-xl border-4 border-blue-100">
               <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=300&auto=format&fit=crop" 
                alt="Plumbing Work" 
                className="w-32 h-32 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
