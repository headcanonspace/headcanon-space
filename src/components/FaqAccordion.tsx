"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What is a headcanon?",
    answer: "A headcanon is a personal interpretation, belief, or idea about a fictional character, relationship, or universe that hasn't been officially confirmed by the creator. Fans use headcanons to add depth and explore 'what if' scenarios."
  },
  {
    question: "How does the Headcanon Generator work?",
    answer: "Our tool uses advanced randomization combined with curated story tropes. You simply input a character's name, their fandom, and choose a specific vibe or 'tone' (like Angst or Fluff). The engine instantly synthesizes fully unique narrative prompts for you to use."
  },
  {
    question: "Is this tool completely free to use?",
    answer: "Yes! All of our generators, including Character, Relationship, and Scenario headcanons, are 100% free with unlimited generation and no signup required."
  },
  {
    question: "Can I use these headcanons for my fanfiction or roleplay?",
    answer: "Absolutely! The generated ideas are designed specifically for writers, roleplayers, and creators to use as writing prompts, story starters, or character development exercises."
  },
  {
    question: "Do you save my character inputs?",
    answer: "No. Our tools run completely in your browser (client-side), meaning what you type is never sent to our servers or saved anywhere. Your privacy and creative ideas are yours alone."
  }
];

export default function FaqAccordion({ items = defaultFaqs }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`group border rounded-3xl bg-white transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-indigo-200 shadow-md -translate-y-0.5 ring-4 ring-indigo-50/40"
                : "border-slate-200/70 hover:border-slate-300 hover:shadow-xs"
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <div className="flex gap-4 items-center">
                {/* Serif Q indicator */}
                <span className={`flex items-center justify-center w-8 h-8 rounded-xl font-serif text-sm font-extrabold shrink-0 select-none transition-all duration-300 ${
                  isOpen
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-500"
                }`}>
                  Q
                </span>
                <span className={`text-base sm:text-lg font-extrabold transition-colors duration-300 ${
                  isOpen ? "text-[var(--color-primary)]" : "text-[var(--color-text)] group-hover:text-slate-800"
                }`}>
                  {item.question}
                </span>
              </div>

              {/* Chevron wrapped in a gorgeous circular frame */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                isOpen
                  ? "bg-indigo-100 text-[var(--color-primary)] rotate-180"
                  : "bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600"
              }`}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] border-t border-slate-100 bg-slate-50/30" : "max-h-0"
              } overflow-hidden`}
            >
              <div className="p-6 flex gap-4">
                {/* Serif A indicator */}
                <span className="flex items-center justify-center w-8 h-8 rounded-xl font-serif text-sm font-extrabold shrink-0 select-none bg-slate-100 text-slate-400 border border-slate-200/50">
                  A
                </span>
                <div className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed pt-0.5">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
