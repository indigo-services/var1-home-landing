import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const ServiceArea = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581244276891-8339386d3392?q=80&w=1920&auto=format&fit=crop" 
          alt="Map background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 text-center text-white">
        <span className="text-white/70 font-bold uppercase tracking-widest text-xs mb-4 block">Service Area</span>
        <h2 className="text-5xl font-black mb-6 tracking-tighter">Check Service Availability<br />in Your Area</h2>
        <p className="opacity-70 mb-12 max-w-lg mx-auto text-sm">
          Enter your ZIP to check availability and earliest arrival.
        </p>

        <div className="max-w-xl mx-auto bg-white p-2 rounded-full flex items-center shadow-2xl">
          <Input 
            placeholder="Enter Code (e.g., 78701)" 
            className="border-none bg-transparent h-14 px-8 text-primary font-bold focus-visible:ring-0 placeholder:text-gray-300"
          />
          <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-8 h-14 font-bold">
            Check Now
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>

        <p className="mt-8 text-[10px] font-bold text-white/60 uppercase tracking-widest">
          Proudly serving Austin, Round Rock, Cedar Park, Pflugerville, and Georgetown.
        </p>

        {/* Floating Images */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden xl:block">
           <img 
            src="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=300&auto=format&fit=crop" 
            alt="Plumbing" 
            className="w-48 h-48 object-cover rounded-[40px] border-8 border-white/10"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:block">
           <img 
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=300&auto=format&fit=crop" 
            alt="Plumbing" 
            className="w-48 h-48 object-cover rounded-[40px] border-8 border-white/10"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
