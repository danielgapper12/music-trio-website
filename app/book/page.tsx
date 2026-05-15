import ContactForm from "@/components/ContactForm";
import Divider from "@/components/Divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Us | Bai Trio",
  description: "Inquire about booking the Bai Trio for your event.",
};

export default function BookPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
          Book the Bai Trio
        </h1>
        <Divider className="mb-6" />
        <p className="text-charcoal-light font-sans max-w-md mx-auto leading-relaxed text-sm">
          We love performing for communities, families, and private events. Fill out the form
          below and we&apos;ll be in touch to discuss your event.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-serif text-2xl text-charcoal mb-3 italic">Contact Directly</h2>
            <div className="w-8 h-px bg-gold mb-5" />
            <p className="text-charcoal-light font-sans text-sm leading-relaxed mb-4">
              Prefer to reach out by email?
            </p>
            <a
              href="mailto:baitriobookings@gmail.com"
              className="text-gold hover:text-gold-light font-sans text-sm transition-colors"
            >
              baitriobookings@gmail.com
            </a>
          </div>

          <div className="bg-ivory-dark p-6 border-l-2 border-gold">
            <p className="font-serif text-xl text-charcoal mb-4 italic">What to include</p>
            <ul className="text-charcoal-light font-sans text-sm leading-relaxed space-y-2">
              <li className="flex gap-2"><span className="text-gold">✦</span> Event date and location</li>
              <li className="flex gap-2"><span className="text-gold">✦</span> Type of occasion (concert, reception, community event, etc.)</li>
              <li className="flex gap-2"><span className="text-gold">✦</span> Expected audience size</li>
              <li className="flex gap-2"><span className="text-gold">✦</span> Any program preferences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
