import React from 'react';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const EmergencyCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="bg-primary rounded-[60px] p-12 md:p-20 relative overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1920&auto=format&fit=crop" 
              alt="Plumbing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581244276891-8339386d3392?q=80&w=400&auto=format&fit=crop" 
                  alt="Plumber" 
                  className="w-64 h-64 object-cover rounded-[40px] border-8 border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-3xl shadow-xl">
                  <div className="bg-primary p-3 rounded-2xl text-white">
                    <PhoneCall size={24} />
                  </div>
                </div>
              </div>
              
              <div className="text-white">
                <span className="text-white/70 font-bold uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
                <h2 className="text-5xl font-black mb-8 leading-[1.1] tracking-tighter">
                  Need Help Right Now?<br />Call Our Emergency Line.
                </h2>
                
                <div className="flex flex-wrap items-center gap-8">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark text-white rounded-full px-10 h-16 font-black text-xl">
                    +5689 2589 6325
                  </Button>
                  <p className="text-sm opacity-70 max-w-[200px]">
                    Typical arrival in 30-60 minutes, depending on demand and location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
