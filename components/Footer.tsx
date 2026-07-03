import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#131c2e] text-white font-inter">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-[60px] pt-16 pb-10">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1 - Brand */}
          <div className="space-y-4 text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/gne-logo.png"
                alt="GNE Infra logo"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <div className="text-[12px] font-semibold text-white/75 leading-none">
              Green Next Energy Infra Pvt. Ltd
            </div>
            <p className="text-[13px] text-white/55 leading-relaxed">
              Powering tomorrow with integrated Solar, BESS, and Green Hydrogen infrastructure.
            </p>
            <div className="flex flex-col gap-1 text-[13px] text-white/55">
              <a href="mailto:info@gneinfra.com" className="hover:text-white/70 transition-colors">
                info@gneinfra.com
              </a>
              <a href="tel:+918448282440" className="hover:text-white/70 transition-colors">
                +91 8448282440
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="text-left">
            <h3 className="text-[10px] font-semibold text-[#22c55e] uppercase tracking-[3px] mb-5">
              SERVICES
            </h3>
            <ul className="space-y-3 text-[13px] text-white/55">
              <li>
                <Link href="/solar-epc" className="hover:text-white/80 transition-colors">
                  Solar (EPC/IPP, I&C)
                </Link>
              </li>
              <li>
                <Link href="/bess-ems" className="hover:text-white/80 transition-colors">
                  BESS (EPC / I&C)
                </Link>
              </li>
              <li>
                <Link href="/pmc" className="hover:text-white/80 transition-colors">
                  PMC
                </Link>
              </li>
              <li>
                <Link href="/o-and-m" className="hover:text-white/80 transition-colors">
                  O&M
                </Link>
              </li>
              <li>
                <Link href="/green-hydrogen" className="hover:text-white/80 transition-colors">
                  Green Hydrogen
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="text-left">
            <h3 className="text-[10px] font-semibold text-[#22c55e] uppercase tracking-[3px] mb-5">
              COMPANY
            </h3>
            <ul className="space-y-3 text-[13px] text-white/55">
              <li>
                <Link href="/projects" className="hover:text-white/80 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white/80 transition-colors">
                  Blog / News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white/80 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="text-left space-y-4">
            <h3 className="text-[10px] font-semibold text-[#22c55e] uppercase tracking-[3px] mb-5">
              CONTACT
            </h3>
            <div className="flex flex-col gap-3 text-[13px] text-white/55">
              <a href="mailto:info@gneinfra.com" className="hover:text-white/80 transition-colors">
                info@gneinfra.com
              </a>
              <a href="tel:+918448282440" className="hover:text-white/80 transition-colors">
                +91 8448282440
              </a>
              <p className="text-white/55 pt-1">
                India · Middle East / Europe · Africa
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/[0.10] gap-4">
          <div className="text-xs text-white/40 text-center md:text-left">
            © 2026 Green Next Energy Infra Pvt. Ltd. All rights reserved.
          </div>
          <div className="text-xs text-white/40">
            India 
          </div>
        </div>

      </div>
    </footer>
  );
}
