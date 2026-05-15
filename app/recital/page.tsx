import AudioPlayer from "@/components/AudioPlayer";
import Divider from "@/components/Divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recital | Bai Trio",
  description: "Listen to a Bai Trio recital recording and view the program.",
};

export default function RecitalPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
          Chamber Recital
        </h1>
        <Divider className="mb-6" />
        <p className="text-charcoal-light font-sans text-sm max-w-md mx-auto leading-relaxed">
          A recording and program from a recent Bai Trio recital.
        </p>
      </div>

      {/* Audio player */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl text-charcoal mb-2 italic">Recording</h2>
        <div className="w-8 h-px bg-gold mb-6" />
        <AudioPlayer
          src="/audio/Trio%20Concert%20Aegis.m4a"
          title="Bai Trio — Chamber Recital"
        />
      </div>

      {/* Program */}
      <div>
        <h2 className="font-serif text-2xl text-charcoal mb-2 italic">Program</h2>
        <div className="w-8 h-px bg-gold mb-10" />

        {/* Program card */}
        <div className="border border-cream bg-white px-8 md:px-14 py-12 text-center shadow-sm">

          <h3 className="font-serif text-3xl tracking-[0.2em] text-charcoal mb-2 uppercase">
            Program
          </h3>
          <Divider className="mb-10" />

          {/* Works */}
          <div className="flex flex-col gap-9 mb-12">

            <div>
              <p className="font-serif text-xl text-charcoal italic leading-snug">
                Zwei Gesänge, Op. 91
              </p>
              <p className="text-charcoal-light font-sans text-sm mt-1">
                1. Gestillte Sehnsucht
              </p>
              <p className="text-charcoal-light font-sans text-sm">
                2. Geistliches Wiegenlied
              </p>
              <p className="text-charcoal/40 font-sans text-xs tracking-widest uppercase mt-2">
                Johannes Brahms (1833–1897)
              </p>
            </div>

            <div>
              <p className="font-serif text-xl text-charcoal italic">Élégie</p>
              <p className="text-charcoal/40 font-sans text-xs tracking-widest uppercase mt-2">
                Jules Massenet (1842–1912)
              </p>
            </div>

            <div>
              <p className="font-serif text-xl text-charcoal italic">Chanson d&apos; Amour</p>
              <p className="text-charcoal/40 font-sans text-xs tracking-widest uppercase mt-2">
                Amy Beach (1867–1944)
              </p>
            </div>

            <div>
              <p className="font-serif text-xl text-charcoal italic leading-snug">
                Parto! ma tu ben mio
              </p>
              <p className="text-charcoal-light font-sans text-sm mt-1">
                from &ldquo;La Clemenza di Tito&rdquo;
              </p>
              <p className="text-charcoal/40 font-sans text-xs tracking-widest uppercase mt-2">
                Wolfgang Amadeus Mozart (1756–1791)
              </p>
            </div>

          </div>

          {/* Divider */}
          <p className="text-gold text-2xl mb-10 font-serif">~</p>

          {/* Trio info */}
          <div className="font-sans text-sm text-charcoal-light leading-relaxed mb-10">
            <p className="mb-3">
              The B.A.I. Trio represents the countries
              <br />
              Bulgaria, America, and Ireland:
            </p>
            <p>Iliana Shoemaker, Piano</p>
            <p>Teresa Lin, Mezzo-soprano</p>
            <p>
              Barbara Hughes, A Clarinet, B&flat; Clarinet,
              <br />
              Bass Clarinet
            </p>
          </div>

          {/* Cover art note */}
          <div className="border-t border-cream pt-8 font-sans text-xs text-charcoal/40 leading-relaxed">
            <p>Read More About the Cover Art:</p>
            <p className="font-serif text-sm text-charcoal/55 mt-1 italic">
              Soap Bubbles, 1733/34
            </p>
            <p>by French painter</p>
            <p>Jean Siméon Chardin (1699–1779)</p>
          </div>

        </div>
      </div>
    </div>
  );
}
