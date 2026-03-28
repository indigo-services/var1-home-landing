import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Truck, Search, Wrench, Wallet } from 'lucide-react';

const steps = [
  {
    title: "Schedule",
    desc: "Book online or call (512) 555-0199.",
    icon: Calendar,
    number: "01"
  },
  {
    title: "Arrival",
    desc: "A licensed plumber arrives on time.",
    icon: Truck,
    number: "02"
  },
  {
    title: "Diagnosis",
    desc: "Clear explanation of the issue and options.",
    icon: Search,
    number: "03"
  },
  {
    title: "Repair",
    desc: "Fast, Reliable, Real clean, professional work.",
    icon: Wrench,
    number: "04"
  },
  {
    title: "Pay After Job",
    desc: "Payment collected only after completion.",
    icon: Wallet,
    number: "05"
  }
];

export const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">How It Works</span>
        <h2 className="text-5xl font-black text-primary mb-20 leading-[1.1] tracking-tighter max-w-2xl mx-auto">
          How Our Simple & Reliable Plumbing Process Works
        </h2>

        <div className="relative flex flex-wrap justify-center gap-12 lg:gap-0 lg:justify-between items-start">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-12 left-20 right-20 h-0.5 border-t-2 border-dashed border-primary/20 hidden lg:block z-0"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center max-w-[200px]"
            >
              <div className="relative mb-8">
                <div className="bg-primary w-24 h-24 rounded-full flex items-center justify-center text-white shadow-xl">
                  <step.icon size={32} />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border-4 border-white">
                  {step.number}
                </div>
              </div>
              <h4 className="text-xl font-black text-primary mb-3">{step.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
