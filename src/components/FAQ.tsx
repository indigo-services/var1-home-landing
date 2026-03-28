import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are your plumbers licensed and insured?",
    a: "Yes, all our technicians are fully licensed, insured, and background-checked for your peace of mind."
  },
  {
    q: "What types of plumbing services do you offer?",
    a: "We offer a full range of services including drain cleaning, water heater repair, leak detection, gas line services, and more."
  },
  {
    q: "How can I prevent plumbing problems in the future?",
    a: "Regular maintenance, avoiding pouring grease down drains, and being mindful of what you flush can prevent most issues."
  },
  {
    q: "Can you help with water heater issues?",
    a: "Absolutely. We repair and install both traditional tank and modern tankless water heaters."
  },
  {
    q: "How quickly can you respond to an emergency?",
    a: "We typically arrive within 30-60 minutes for emergency calls in our primary service areas."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-blue-50/30">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Faq's</span>
        <h2 className="text-5xl font-black text-primary mb-16 leading-[1.1] tracking-tighter max-w-2xl mx-auto">
          Answers to Your<br />Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto text-left">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {faqs.map((faq, i) => (
              <Accordion key={i} type="single" collapsible className="w-full">
                <AccordionItem value={`item-${i}`} className="border-none bg-white rounded-2xl px-6 mb-4 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-6 text-sm font-black text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-xs leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
