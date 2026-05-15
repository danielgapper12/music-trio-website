import Image from "next/image";
import Link from "next/link";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      {/* Hero — clean typographic, no background photo */}
      <section className="min-h-[88vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
        <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-8">
          Clarinet &middot; Voice &middot; Piano
        </p>
        <h1 className="font-display text-5xl md:text-8xl text-charcoal leading-none mb-6 tracking-[0.15em]">
          BAI TRIO
        </h1>
        <Divider className="mb-12" />
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/about"
            className="border border-charcoal/20 text-charcoal px-8 py-3 text-xs tracking-[0.2em] uppercase font-sans hover:border-gold hover:text-gold transition-colors"
          >
            Meet the Trio
          </Link>
          <Link
            href="/book"
            className="bg-blush text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-sans hover:bg-blush-light transition-colors"
          >
            Book Us
          </Link>
        </div>
      </section>

      {/* Performance photo */}
      <div className="py-12 px-6 bg-ivory-dark">
        <div className="relative max-w-3xl mx-auto h-72 md:h-96 overflow-hidden">
          <Image
            src="/images/GroupPerforming.png"
            alt="The Bai Trio performing"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Upcoming Concert */}
      <section className="py-16 px-6 bg-gold-pale">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-sans mb-4">Upcoming Concert</p>
          <h2 className="font-serif text-xl text-charcoal italic mb-1">
            The B.A.I. Trio presents a
          </h2>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-4">
            Chamber Recital
          </h2>
          <p className="text-charcoal-light text-sm font-sans mb-8">
            Featuring works by Brahms, Massenet, Beach, &amp; Mozart
          </p>

          <div className="text-charcoal-light text-sm font-sans mb-8 space-y-0.5">
            <p>Barbara Hughes, clarinet</p>
            <p>Iliana Shoemaker, piano</p>
            <p>Teresa Lin, voice</p>
          </div>

          <div className="border border-gold px-12 py-10 bg-white mb-8 max-w-md mx-auto">
            <p className="font-serif text-4xl text-gold italic mb-2">Sunday, April 26, 2026</p>
            <p className="text-gold font-sans text-lg mb-5">3:00 p.m.</p>
            <p className="text-charcoal font-sans text-base tracking-wide">Bothell United Methodist Church</p>
            <p className="text-charcoal-light font-sans text-sm mt-1">18515 92nd Ave NE, Bothell, WA 98011</p>
            <p className="text-charcoal-light font-sans text-sm mt-4 tracking-[0.2em] uppercase">Free Admission</p>
          </div>

          <div>
            <Link
              href="/recital"
              className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-sans hover:bg-gold hover:text-white transition-colors"
            >
              View Program
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">About the Trio</h2>
        <Divider className="mb-7" />
        <p className="text-charcoal-light font-sans leading-relaxed">
          The Bai Trio is a chamber ensemble formed by three musicians from three corners of the
          world: Ireland, the United States, and Bulgaria. Barbara Hughes (clarinet),
          Teresa Lin (voice), and Iliana Shoemaker (piano). From family gatherings to senior living
          communities, the Bai Trio brings live music to the people who enjoy it most.
        </p>
      </section>

      {/* What they do */}
      <section className="bg-ivory-dark py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: "♩",
                title: "Live Performances",
              },
              {
                icon: "♪",
                title: "Community Events",
              },
              {
                icon: "♫",
                title: "Private Bookings",
              },
            ].map(({ icon, title }) => (
              <div key={title} className="flex flex-col items-center gap-3">
                <span className="text-gold text-3xl font-serif">{icon}</span>
                <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="font-serif text-4xl text-charcoal mb-3">
          Interested in booking the Bai Trio?
        </h2>
        <p className="text-charcoal-light font-sans text-sm mb-8">
          We&apos;d love to bring music to your next event.
        </p>
        <Link
          href="/book"
          className="inline-block bg-blush text-white px-10 py-3 text-xs tracking-[0.2em] uppercase font-sans hover:bg-blush-light transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
