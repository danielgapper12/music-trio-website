import Image from "next/image";
import { members } from "@/data/members";
import Divider from "@/components/Divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Trio | Bai Trio",
  description: "Learn about the three musicians of the Bai Trio — Barbara Hughes, Teresa Lin, and Iliana Shoemaker.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
          Meet the Trio
        </h1>
        <Divider className="mb-6" />
        <p className="text-charcoal-light font-sans max-w-md mx-auto leading-relaxed text-sm">
          Three musicians. Three nationalities. A shared love for music.
        </p>
      </div>

      {/* Member cards */}
      <div className="flex flex-col gap-20">
        {members.map((member, i) => (
          <div
            key={member.name}
            className={`flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-12 items-center`}
          >
            {/* Photo */}
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="relative aspect-[3/4] bg-cream overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 288px"
                />
              </div>
            </div>

            {/* Bio */}
            <div className={`flex-1 ${i % 2 === 0 ? "md:text-left" : "md:text-right"} text-center`}>
              <p className="text-blush text-xs tracking-[0.25em] uppercase font-sans mb-3">
                {member.instrument} &middot; {member.nationality}
              </p>
              <h2 className="font-serif text-4xl text-charcoal mb-4 italic">
                {member.name}
              </h2>
              <div className={`w-8 h-px bg-gold mb-6 ${i % 2 === 0 ? "md:ml-0" : "md:ml-auto"} mx-auto`} />
              <p className="text-charcoal-light font-sans leading-relaxed text-sm">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
