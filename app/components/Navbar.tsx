import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-primary border-b border-outline sticky top-0 z-50">
      <div className="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto h-full">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-22 h-22 flex-shrink-0">
            <Image src="/logo.png" alt="Bab Al Sajaah Logo" width={250} height={250} className="object-contain" />
          </div>
         
        </Link>
        <div className="hidden md:flex gap-gutter items-center">
          <Link className="font-body-md text-body-md text-on-primary hover:text-secondary transition-colors scale-95 duration-75" href="/catalog">Catalog</Link>
          <Link className="font-body-md text-body-md text-on-primary hover:text-secondary transition-colors scale-95 duration-75" href="/#brands">Brands</Link>
          <Link className="font-body-md text-body-md text-on-primary hover:text-secondary transition-colors scale-95 duration-75" href="/about">About Us</Link>
          <Link className="font-body-md text-body-md text-on-primary hover:text-secondary transition-colors scale-95 duration-75" href="/contact">Contact</Link>
        </div>
        <div className="flex items-center gap-gutter">
          <button className="text-on-primary hover:text-secondary transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <button className="text-on-primary hover:text-secondary transition-colors">
            <span className="material-symbols-outlined">person</span>
          </button>
          <button className="bg-secondary text-on-secondary px-4 py-2 font-label-caps text-label-caps border border-transparent hover:bg-secondary-container transition-colors uppercase tracking-widest flex items-center gap-2">
            Add to Quote
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
