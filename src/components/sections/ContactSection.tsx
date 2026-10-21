"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

// Step A: Define our validation rulebook using Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Step B: Create a TypeScript type directly FROM our Zod schema
type ContactFormData = z.infer<typeof contactSchema>;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaeqgljz";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-3 text-slate-400">
          Tell us about your infrastructure needs — we&apos;ll respond within
          24 hours
        </p>
      </div>

      {isSubmitted ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-status-green/30 bg-status-green/10 p-10 text-center">
          <CheckCircle2 size={40} className="text-status-green" />
          <h3 className="text-lg font-semibold text-white">
            Message Sent Successfully
          </h3>
          <p className="text-sm text-slate-400">
            Thank you for reaching out. Our team will contact you shortly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 rounded-xl border border-slate-800 bg-bg-secondary p-8"
        >
          {/* Name Field */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">
              Full Name
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="John Doe"
              className="w-full rounded-md border border-slate-700 bg-bg-primary px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-accent-blue focus:outline-none"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="john@company.com"
              className="w-full rounded-md border border-slate-700 bg-bg-primary px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-accent-blue focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Company Field (Optional) */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">
              Company <span className="text-slate-600">(optional)</span>
            </label>
            <input
              {...register("company")}
              type="text"
              placeholder="Acme Corp"
              className="w-full rounded-md border border-slate-700 bg-bg-primary px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-accent-blue focus:outline-none"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Tell us about your colocation or connectivity needs..."
              className="w-full rounded-md border border-slate-700 bg-bg-primary px-4 py-2.5 text-white placeholder:text-slate-600 focus:border-accent-blue focus:outline-none"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>

          {submitError && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-accent-blue py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting && <Loader2 size={16} className="animate-spin" />}
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}