// Add your photo filenames here after dropping them into /public/images/
// Each entry needs a src path and an alt description.
export type GalleryPhoto = {
  src: string;
  alt: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/GroupPhoto.png", alt: "The Bai Trio" },
  { src: "/images/GroupPerforming.png", alt: "The Bai Trio performing for an audience" },
  { src: "/images/IlianaPianoSolo.png", alt: "Iliana Shoemaker at the piano" },
  { src: "/images/BarbaraClarinetSolo.png", alt: "Barbara Hughes playing clarinet" },
  { src: "/images/TeresaSolo.png", alt: "Teresa Lin performing" },
];
