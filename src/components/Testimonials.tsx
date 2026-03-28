import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const reviews = [
  {
    name: "Amanda R.",
    location: "South Lamar",
    text: "Tech arrived in 25 minutes at 9pm and stopped the leak. Fair pricing.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Derrick M.",
    location: "Mueller",
    text: "Water heater replaced same day. Clean, professional, and friendly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Lisa P.",
    location: "Hyde Park",
    text: "Finally a plumber who shows up on time and charges what they quote.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Client Reviews</span>
        <h2 className="text-5xl font-black text-primary mb-12 leading-[1.1] tracking-tighter max-w-2xl mx-auto">
          Trusted Reviews from Homeowners & Businesses
        </h2>

        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 bg-gray-50 px-8 py-4 rounded-3xl">
            <div className="bg-white p-2 rounded-xl shadow-sm">
              <span className="text-2xl font-black text-primary">G</span>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black">4.9</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="#FF9900" className="text-[#FF9900]" />
                  ))}
                </div>
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Based on 327 Google Reviews</p>
            </div>
            <a href="#" className="text-xs font-bold text-primary hover:underline ml-4">Read All 327 Reviews</a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div key={i} whileHover={{ y: -10 }}>
              <Card className="p-10 rounded-[40px] border-none shadow-xl text-left relative overflow-hidden">
                <Quote className="absolute top-8 right-8 text-blue-50" size={80} />
                <div className="relative z-10">
                  <div className="flex mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} fill="#FF9900" className="text-[#FF9900]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-8 font-medium leading-relaxed italic">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h5 className="font-black text-primary">{review.name}</h5>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.location}</p>
                    </div>
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
