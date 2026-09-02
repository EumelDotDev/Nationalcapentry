import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 font-sans border-t border-zinc-800 selection:bg-zinc-800 selection:text-white">
      
      {/* Main Grid Section */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
        
        {/* Column 1: Brand / Legacy */}
        <div className="flex flex-col md:border-r border-zinc-800 md:pr-12">
          <div className="mb-10 text-white">
            <Logo className="h-16 md:h-20 w-auto max-w-[200px]" />
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xs mb-10">
            National Carpentry & Installation delivers high-end millwork, custom cabinetry, and premium finishing for commercial and residential projects across Canada since 1978.
          </p>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4">Certifications</span>
            <ul className="text-xs text-zinc-400 space-y-2">
              <li>WHMIS Certified</li>
              <li>COR Certified</li>
              <li>LEED Participating</li>
            </ul>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col md:border-r border-zinc-800 md:px-12">
          <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-10">Navigation</span>
          <ul className="flex flex-col gap-4">
            <li><Link href="/" className="text-sm text-zinc-300 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/services" className="text-sm text-zinc-300 hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/projects" className="text-sm text-zinc-300 hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="text-sm text-zinc-300 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Location */}
        <div className="flex flex-col md:border-r border-zinc-800 md:px-12">
          <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-10">Contact & Location</span>
          
          <div className="mb-8">
            <span className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Email</span>
            <a href="mailto:nationalcarpentry@nationalcarpentry.ca" className="text-sm text-zinc-300 hover:text-white transition-colors">
              nationalcarpentry@nationalcarpentry.ca
            </a>
          </div>
          
          <div className="mb-8">
            <span className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Phone</span>
            <a href="tel:+12046542981" className="text-sm text-zinc-300 hover:text-white transition-colors">
              +1 (204) 654-2981
            </a>
          </div>

          <div className="mb-8">
            <span className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Headquarters</span>
            <address className="text-sm text-zinc-300 not-italic leading-relaxed">
              981 Main St<br />
              Winnipeg, MB R2W 3P6
            </address>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Hours</span>
            <p className="text-sm text-zinc-300">Mon - Fri: 7:00 AM - 3:30 PM</p>
          </div>
        </div>

        {/* Column 4: Socials */}
        <div className="flex flex-col md:pl-12">
          <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-10">Connect</span>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:scale-110 transition-transform">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:scale-110 transition-transform">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:scale-110 transition-transform">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Legal */}
      <div className="w-full border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} National Carpentry & Installation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
