import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 font-sans border-t border-zinc-800 selection:bg-zinc-800 selection:text-white">
      {/* Bottom Section: Navigation & Legal */}
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          
          <div className="flex items-center gap-4">
            <Logo className="h-6 w-auto text-zinc-50" />
            <span className="text-xs tracking-wider uppercase text-zinc-600">
              © {new Date().getFullYear()} NCI. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs tracking-widest uppercase">
            <Link href="/work" className="hover:text-zinc-50 transition-colors">Work</Link>
            <Link href="/services" className="hover:text-zinc-50 transition-colors">Services</Link>
            <Link href="/process" className="hover:text-zinc-50 transition-colors">Process</Link>
            <Link href="/about" className="hover:text-zinc-50 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-zinc-50 transition-colors">Contact</Link>
          </div>

          <div className="flex gap-6 text-xs tracking-widest uppercase">
            <a href="#" className="hover:text-zinc-50 transition-colors">IG</a>
            <a href="#" className="hover:text-zinc-50 transition-colors">IN</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
