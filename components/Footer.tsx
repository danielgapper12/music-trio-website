export default function Footer() {
  return (
    <footer className="bg-charcoal text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-xl text-white tracking-widest">BAI TRIO</p>
          <p className="text-xs text-white/50 mt-1 tracking-[0.2em] uppercase">Clarinet · Voice · Piano</p>
        </div>

        <div className="text-sm text-white/50">
          <a
            href="mailto:baitriobookings@gmail.com"
            className="hover:text-gold transition-colors tracking-wide"
          >
            baitriobookings@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4">
        <p className="text-xs text-white/20 tracking-wide">
          © {new Date().getFullYear()} Bai Trio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
