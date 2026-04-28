"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
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
    answer: "Yes! All of our generators—including Character, Relationship, and Scenario headcanons—are 100% free with unlimited generation and no signup required."
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

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-3">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white border border-[var(--color-border)] rounded-xl overflow-hidden transition-all duration-200 shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-5 flex justify-between items-center hover:bg-[var(--color-surface-hover)] transition-colors text-left"
          >
            <span className="text-[16px] font-bold pr-8 leading-snug" style={{ color: "var(--color-text)" }}>
              {faq.question}
            </span>
            <span className="shrink-0 transition-transform duration-300" style={{ color: "var(--color-primary)", transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}>
              <ChevronDown className="size-5" strokeWidth={2} aria-hidden />
            </span>
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden`}
            style={{ 
              maxHeight: openIndex === index ? '500px' : '0px',
              opacity: openIndex === index ? 1 : 0
            }}
          >
            <div className="px-6 pb-5 leading-relaxed text-[15px]" style={{ color: "var(--color-ink-3)" }}>
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
