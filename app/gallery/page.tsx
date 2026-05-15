import Image from "next/image";
import { galleryPhotos } from "@/data/gallery";
import Divider from "@/components/Divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Bai Trio",
  description: "Photos of the Bai Trio — performances, rehearsals, and portraits.",
};

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">Gallery</h1>
        <Divider />
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryPhotos.map((photo, i) => (
          <div
            key={i}
            className={`relative bg-cream overflow-hidden ${
              i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {galleryPhotos.length === 0 && (
        <p className="text-center text-charcoal-light font-sans py-20">Photos coming soon.</p>
      )}
    </div>
  );
}
