import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-stack-lg bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container border-t-2 border-outline dark:border-outline-variant mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col gap-4">
          <div className="font-headline-md text-headline-md text-on-primary uppercase tracking-tighter">Bab Al Sajaah</div>
          <div className="font-label-technical text-label-technical text-on-primary-fixed-variant">
            Precision spare parts for industrial and automotive applications.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-on-primary-fixed-variant uppercase tracking-widest mb-2">Legal</span>
          <Link className="font-label-technical text-label-technical text-on-primary-fixed-variant hover:text-secondary-fixed-dim underline transition-all" href="#">Privacy Policy</Link>
          <Link className="font-label-technical text-label-technical text-on-primary-fixed-variant hover:text-secondary-fixed-dim underline transition-all" href="#">Terms of Service</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-label-caps text-on-primary-fixed-variant uppercase tracking-widest mb-2">Customer Care</span>
          <Link className="font-label-technical text-label-technical text-on-primary-fixed-variant hover:text-secondary-fixed-dim underline transition-all" href="#">Shipping Info</Link>
          <Link className="font-label-technical text-label-technical text-on-primary-fixed-variant hover:text-secondary-fixed-dim underline transition-all" href="#">Returns</Link>
          <Link className="font-label-technical text-label-technical text-on-primary-fixed-variant hover:text-secondary-fixed-dim underline transition-all" href="/contact">Technical Support</Link>
        </div>
        <div className="flex flex-col justify-end items-start md:items-end font-label-technical text-label-technical text-on-primary-fixed-variant">
          © 2024 Bab Al Sajaah Industrial. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
