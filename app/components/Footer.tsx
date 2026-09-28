import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full py-stack-lg bg-primary text-on-primary border-t-2 border-outline mt-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col gap-4 lg:col-span-5">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">  
              <Image src="/logo.png" alt="Bab Al Sajaah Logo" width={250} height={250} className="object-contain" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-headline-sm text-lg text-secondary-fixed-dim" dir="rtl" lang="ar" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
                باب الصجعة
              </span>
              <div className="font-headline-md text-headline-md text-on-primary uppercase tracking-tighter">BAB AL SAJAAH AUTO SPARE PARTS TR. L.L.C</div>
            </div>
          </div>
          <div className="font-label-technical text-label-technical text-on-primary-fixed-variant">
            Precision spare parts for industrial and automotive applications.
          </div>
          <div className="font-label-technical text-label-technical text-on-primary-fixed-variant flex flex-col gap-1 mt-2">
            <span>Sharjah, United Arab Emirates</span>
            <span>Tel: 06-5360431 | Mob: 056-4997292</span>
            <span>P.O.Box: 79608 | Email: sajaauto@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:col-span-2 lg:ml-auto mt-8 lg:mt-0">
          <span className="font-label-caps text-label-caps text-on-primary-fixed-variant uppercase tracking-widest mb-2">Legal</span>
          <Link className="font-label-technical text-label-technical text-on-primary-fixed-variant hover:text-secondary-fixed-dim underline transition-all" href="#">Privacy Policy</Link>
          <Link className="font-label-technical text-label-technical text-on-primary-fixed-variant hover:text-secondary-fixed-dim underline transition-all" href="#">Terms of Service</Link>
        </div>
        <div className="flex flex-col gap-2 lg:col-span-2 lg:ml-auto mt-8 lg:mt-0">
          <span className="font-label-caps text-label-caps text-on-primary-fixed-variant uppercase tracking-widest mb-2">Customer Care</span>
          <Link className="font-label-technical text-label-technical text-on-primary-fixed-variant hover:text-secondary-fixed-dim underline transition-all" href="#">Shipping Info</Link>
          <Link className="font-label-technical text-label-technical text-on-primary-fixed-variant hover:text-secondary-fixed-dim underline transition-all" href="#">Returns</Link>
          <Link className="font-label-technical text-label-technical text-on-primary-fixed-variant hover:text-secondary-fixed-dim underline transition-all" href="/contact">Technical Support</Link>
        </div>
        <div className="flex flex-col justify-end items-start lg:items-end lg:col-span-3 mt-8 lg:mt-0 font-label-technical text-label-technical text-on-primary-fixed-variant">
          © 2024 Bab Al Sajaah Industrial.<br className="hidden lg:block"/> All rights reserved.
        </div>
      </div>
    </footer>
  );
}
