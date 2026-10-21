"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/constants/siteData";

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
        {faqItems.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="overflow-hidden rounded-lg border border-slate-800 bg-bg-secondary"
          >
            <Accordion.Trigger className="group flex w-full items-center justify-between px-5 py-4 text-left font-medium text-white">
              {item.question}
              <ChevronDown
                size={18}
                className="flex-shrink-0 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
            <Accordion.Content className="overflow-hidden px-5 text-sm text-slate-400 data-[state=open]:pb-4 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              {item.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}