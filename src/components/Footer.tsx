import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
        <span className="text-[400px] font-black leading-none">INDIGO</span>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-full">
                <Phone className="text-primary" size={20} />
              </div>
              <span className="text-2xl font-bold tracking-tighter">INDIGO</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We are a trusted plumbing service provider committed to delivering reliable, high-quality solutions for homes and businesses.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 hover:bg-primary p-3 rounded-full transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['About', 'Services', 'Pricing', 'FAQ'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-primary flex items-center gap-2 transition-colors">
                    <ArrowRight size={12} className="text-primary" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-primary mt-1" />
                <div>
                  <p className="text-white font-bold">+5689 2589 6325</p>
                  <p className="text-xs">Emergency 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-primary mt-1" />
                <p>info@indigo.com</p>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-primary mt-1" />
                <p>551 Swanston Street, Melbourne Victoria 3053 Australia</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Open Hours</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex justify-between items-center">
                <span>Open 24/7</span>
              </li>
              <li className="text-xs leading-relaxed">
                Emergency service available nights, weekends, and holidays.
              </li>
              <li className="pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest">License:</span>
                  <span className="text-[10px] text-white">LIC# TX-PLM-48291</span>
                  <a href="#" className="text-[10px] text-primary hover:underline">Verify</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />
        
        <div className="flex flex-col md:row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 INDIGO. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
