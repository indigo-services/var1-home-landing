import React from 'react';
import { Phone, Clock, MapPin, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 md:px-12 flex flex-wrap justify-between items-center text-xs">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-primary" />
            <span>Open 24/7 - Emergency Service</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-primary" />
            <span>23 King Street Melbourne, Australia</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span>License: LIC# TX-PLM-48291</span>
          <a href="#" className="text-primary hover:underline">Verify</a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="py-4 px-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-full">
            <Phone className="text-white" size={20} />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-primary">INDIGO</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-primary">
          <a href="#" className="text-primary">Home</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Services</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
            <span>Pages</span>
            <ChevronDown size={14} />
          </div>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-full">
              <Phone className="text-primary" size={18} />
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase">Call Us Now</p>
              <p className="text-sm font-bold text-primary">+5689 2589 6325</p>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-6">
            Schedule Online
            <ChevronDown size={16} className="ml-2 -rotate-90" />
          </Button>
        </div>
      </div>
    </header>
  );
};
