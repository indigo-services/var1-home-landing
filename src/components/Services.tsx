import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Flame, Pipette as Pipe, Fuel, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    title: "Drain Cleaning",
    desc: "Fast, no-mess clog removal.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Water Heater Repair",
    desc: "Hot water restored same day.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Pipe Leak Repair",
    desc: "Stop damage before it spreads.",
    icon: Pipe,
    image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Gas Line Services",
    desc: "Certified techs. Safety first.",
    icon: Fuel,
    image: "https://images.unsplash.com/photo-1517646288024-aaeeefef9260?q=80&w=400&auto=format&fit=crop"
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Our Services</span>
        <h2 className="text-5xl font-black text-primary mb-16 leading-[1.1] tracking-tighter max-w-2xl mx-auto">
          Provides Professional Plumbing Services for Every Need
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="relative overflow-hidden rounded-[32px] border-none shadow-xl h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-primary p-3 rounded-2xl text-white shadow-lg">
                    <service.icon size={24} />
                  </div>
                </div>
                
                <div className="p-8 text-left flex-grow">
                  <h3 className="text-xl font-black text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{service.desc}</p>
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer group-hover:bg-accent transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
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
