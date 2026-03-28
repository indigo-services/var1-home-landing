import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const PriceEstimator = () => {
  const [estimate, setEstimate] = useState(128);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1920&auto=format&fit=crop" 
          alt="Plumbing background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 text-center text-white">
        <span className="text-white/70 font-bold uppercase tracking-widest text-xs mb-4 block">Price Estimation</span>
        <h2 className="text-5xl font-black mb-6 tracking-tighter">Instant Price Estimate</h2>
        <p className="opacity-70 mb-16 max-w-2xl mx-auto text-sm">
          Get a ballpark price in 30 seconds. No signup required. Estimates vary by complexity, parts, and after-hours service.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] p-8 md:p-12 max-w-5xl mx-auto text-primary shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-3 text-left">
              <Label className="font-bold text-xs uppercase tracking-wider">Service Type:</Label>
              <Select defaultValue="drain">
                <SelectTrigger className="rounded-xl h-12 border-gray-100 bg-gray-50">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="drain">Drain Cleaning</SelectItem>
                  <SelectItem value="heater">Water Heater</SelectItem>
                  <SelectItem value="leak">Leak Repair</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 text-left">
              <Label className="font-bold text-xs uppercase tracking-wider">Urgency:</Label>
              <Select defaultValue="standard">
                <SelectTrigger className="rounded-xl h-12 border-gray-100 bg-gray-50">
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (Next Day)</SelectItem>
                  <SelectItem value="emergency">Emergency (1-2 Hours)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 text-left">
              <Label className="font-bold text-xs uppercase tracking-wider">Property Type:</Label>
              <Select defaultValue="residential">
                <SelectTrigger className="rounded-xl h-12 border-gray-100 bg-gray-50">
                  <SelectValue placeholder="Select property" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-8 border-t border-gray-100 pt-12">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white rounded-full px-10 font-bold h-16 text-lg">
              See Estimated Price Range
              <ArrowRight size={20} className="ml-2 -rotate-45" />
            </Button>

            <div className="flex items-center gap-6">
              <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Your Estimated Price Is:</span>
              <div className="text-6xl font-black text-primary flex items-center">
                <span className="text-3xl mr-1">$</span>
                {estimate}
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-left border-t border-gray-50 pt-12">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase text-gray-400">Typical Service Ranges:</p>
              <p className="text-xs font-bold">Drain cleaning: <span className="text-gray-500">$99-$250</span></p>
              <p className="text-xs font-bold">Water heater repair: <span className="text-gray-500">$220-$750</span></p>
              <p className="text-xs font-bold">Leak detection & repair: <span className="text-gray-500">$180-$650</span></p>
            </div>
             <div className="space-y-2 pt-6">
              <p className="text-xs font-bold">Water heater install (tank): <span className="text-gray-500">$1,200-$2,800</span></p>
              <p className="text-xs font-bold">Sewer camera inspection: <span className="text-gray-500">$150-$400</span></p>
              <p className="text-xs font-bold">Fixture installation (labor): <span className="text-gray-500">$120-$450 + parts</span></p>
            </div>
             <div className="space-y-2 pt-6">
              <p className="text-xs font-bold">Water heater install (tankless): <span className="text-gray-500">$2,400-$5,500</span></p>
              <p className="text-xs font-bold">Gas line services: <span className="text-gray-500">$250-$1,200+</span></p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-[10px] text-gray-400 font-medium">
            <Info size={12} />
            <p>Disclaimer: Estimates are not final quotes. Final pricing provided after on-site inspection. After-hours, specialty parts, and complexity may increase total.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
