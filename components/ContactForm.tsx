"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeenyllq");

  if (state.succeeded) {
    return (
      <div className="border-l-2 border-gold pl-4 py-2">
        <p className="font-serif text-xl text-charcoal italic mb-1">Thank you!</p>
        <p className="text-charcoal-light font-sans text-sm">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-lg">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs tracking-[0.15em] text-charcoal-light uppercase font-sans">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border border-cream bg-white px-4 py-3 text-charcoal font-sans placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs tracking-[0.15em] text-charcoal-light uppercase font-sans">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-cream bg-white px-4 py-3 text-charcoal font-sans placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors"
          placeholder="your@email.com"
        />
        <ValidationError field="email" errors={state.errors} className="text-red-500 text-xs font-sans" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="organization" className="text-xs tracking-[0.15em] text-charcoal-light uppercase font-sans">
          Organization / Venue <span className="normal-case text-charcoal/30">(optional)</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="border border-cream bg-white px-4 py-3 text-charcoal font-sans placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors"
          placeholder="e.g. Sunrise Senior Living"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs tracking-[0.15em] text-charcoal-light uppercase font-sans">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border border-cream bg-white px-4 py-3 text-charcoal font-sans placeholder:text-charcoal/30 focus:outline-none focus:border-gold transition-colors resize-none"
          placeholder="Tell us about your event — date, location, and any other details..."
        />
        <ValidationError field="message" errors={state.errors} className="text-red-500 text-xs font-sans" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blush text-white py-3 px-8 text-xs tracking-[0.2em] uppercase font-sans hover:bg-blush-light transition-colors disabled:opacity-60 self-start"
      >
        {state.submitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
