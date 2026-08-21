import Link from "next/link";
import { Reveal } from "./components/Reveal";
import { Parallax } from "./components/Parallax";

export default function Home() {
  return (
    <>
      <section className="relative bg-primary text-on-primary py-[80px] px-margin-mobile md:px-margin-desktop hero-diagonal overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="bg-cover bg-fixed bg-center w-full h-full mix-blend-overlay" data-alt="A modern auto spare parts shop in Dubai, showcasing well-organized shelves with automotive components in a professional, well-lit environment." style={{ backgroundImage: "url('/dubai-shop-banner.jpg')" }}></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <Parallax offset={50} zIndex={10}>
          <Reveal direction="left" delay={0.2}>
          <div className="flex flex-col gap-stack-lg">
            <div className="inline-block bg-secondary text-on-secondary font-label-caps text-label-caps px-2 py-1 uppercase tracking-widest border border-secondary self-start">
              Precision Automotive Components
            </div>
            <h1 className="font-headline-xl text-headline-xl uppercase tracking-tighter leading-tight">
              Engineered for <br/> <span className="text-secondary">Maximum Uptime</span>
            </h1>
            <p className="font-body-lg text-body-lg text-outline-variant max-w-lg">
              Source genuine OEM and high-performance aftermarket parts for industrial, commercial, and passenger vehicles. Guaranteed reliability.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">verified</span>
                <span className="font-label-technical text-label-technical">Genuine Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">local_shipping</span>
                <span className="font-label-technical text-label-technical">Fast Delivery</span>
              </div>
            </div>
          </div>
          </Reveal>
          </Parallax>
          {/* Part Search Tool */}
          <Parallax offset={-30} zIndex={20}>
          <Reveal direction="right" delay={0.4}>
          <div className="bg-surface text-on-surface p-gutter border-2 border-primary shadow-[8px_8px_0px_0px_#bb0016] mt-8 lg:mt-0 relative">
            <div className="absolute -top-4 -left-4 bg-primary text-on-primary px-3 py-1 font-label-caps text-label-caps border border-outline">
              SYS: PART_LOCATOR_V1
            </div>
            <h2 className="font-headline-md text-headline-md mb-stack-lg uppercase border-b-2 border-primary pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined">manage_search</span>
              Find Your Part
            </h2>
            <form className="flex flex-col gap-stack-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                <div className="flex flex-col">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">Make</label>
                  <select className="bg-surface-container border border-outline p-2 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none">
                    <option>Select Make</option>
                    <option>Toyota</option>
                    <option>Nissan</option>
                    <option>Ford</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">Model</label>
                  <select className="bg-surface-container border border-outline p-2 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none" disabled>
                    <option>Select Model</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">Year</label>
                <select className="bg-surface-container border border-outline p-2 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none" disabled>
                  <option>Select Year</option>
                </select>
              </div>
              <button className="mt-4 bg-primary text-on-primary w-full py-3 font-label-caps text-label-caps uppercase tracking-widest border border-primary hover:bg-inverse-surface transition-colors flex justify-center items-center gap-2" type="button">
                Search Inventory
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
          </Reveal>
          </Parallax>
        </div>
      </section>

      {/* Core Categories Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-bright border-b border-outline">
        <div className="max-w-container-max mx-auto">
          <Reveal direction="up" delay={0.1} width="100%">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-2">Our Inventory Categories</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          </Reveal>
          <Reveal direction="up" delay={0.3} width="100%">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            <Link href="/catalog?category=Engine" className="bg-surface-container border border-outline hover:border-secondary hover:border-2 transition-all p-stack-md flex flex-col items-center justify-center gap-4 text-center group h-48">
              <span className="material-symbols-outlined text-[48px] text-primary group-hover:text-secondary transition-colors">settings</span>
              <span className="font-label-caps uppercase tracking-widest text-primary">Engine Parts</span>
            </Link>
            <Link href="/catalog?category=Suspension" className="bg-surface-container border border-outline hover:border-secondary hover:border-2 transition-all p-stack-md flex flex-col items-center justify-center gap-4 text-center group h-48">
              <span className="material-symbols-outlined text-[48px] text-primary group-hover:text-secondary transition-colors">directions_car</span>
              <span className="font-label-caps uppercase tracking-widest text-primary">Suspension</span>
            </Link>
            <Link href="/catalog?category=Electrical" className="bg-surface-container border border-outline hover:border-secondary hover:border-2 transition-all p-stack-md flex flex-col items-center justify-center gap-4 text-center group h-48">
              <span className="material-symbols-outlined text-[48px] text-primary group-hover:text-secondary transition-colors">electrical_services</span>
              <span className="font-label-caps uppercase tracking-widest text-primary">Electrical</span>
            </Link>
            <Link href="/catalog?category=Brakes" className="bg-surface-container border border-outline hover:border-secondary hover:border-2 transition-all p-stack-md flex flex-col items-center justify-center gap-4 text-center group h-48">
              <span className="material-symbols-outlined text-[48px] text-primary group-hover:text-secondary transition-colors">tire_repair</span>
              <span className="font-label-caps uppercase tracking-widest text-primary">Braking</span>
            </Link>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section id="brands" className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="bg-cover bg-fixed bg-center w-full h-full mix-blend-darken grayscale" style={{ backgroundImage: "url('/dubai-shop-banner.jpg')" }}></div>
        </div>
        <Reveal direction="up" delay={0.2} width="100%">
        <div className="max-w-container-max mx-auto text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-stack-md">Trusted OEM Partners</h2>
          <div className="overflow-hidden w-full relative mt-stack-lg before:absolute before:left-0 before:top-0 before:w-16 before:h-full before:bg-gradient-to-r before:from-surface-container-lowest before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-16 after:h-full after:bg-gradient-to-l after:from-surface-container-lowest after:to-transparent after:z-10">
            <div className="animate-marquee flex gap-16 items-center w-max">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16 items-center shrink-0">
                  <img src="https://cdn.worldvectorlogo.com/logos/bosch.svg" alt="Bosch Logo" className="h-12 w-auto object-contain hover:scale-110 transition-transform" />
                  <img src="https://cdn.worldvectorlogo.com/logos/denso.svg" alt="Denso Logo" className="h-12 w-auto object-contain hover:scale-110 transition-transform" />
                  <img src="https://cdn.worldvectorlogo.com/logos/mahle.svg" alt="Mahle Logo" className="h-12 w-auto object-contain hover:scale-110 transition-transform" />
                  <img src="https://cdn.worldvectorlogo.com/logos/ngk-1.svg" alt="NGK Logo" className="h-12 w-auto object-contain hover:scale-110 transition-transform" />
                  <img src="https://cdn.worldvectorlogo.com/logos/continental-1.svg" alt="Continental Logo" className="h-12 w-auto object-contain hover:scale-110 transition-transform" />
                  <img src="https://cdn.worldvectorlogo.com/logos/valeo.svg" alt="Valeo Logo" className="h-12 w-auto object-contain hover:scale-110 transition-transform" />
                  <img src="https://cdn.worldvectorlogo.com/logos/hella.svg" alt="Hella Logo" className="h-12 w-auto object-contain hover:scale-110 transition-transform" />
                  <img src="https://cdn.worldvectorlogo.com/logos/delphi-1.svg" alt="Delphi Logo" className="h-12 w-auto object-contain hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
        </Reveal>
      </section>

      {/* Shop Gallery Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <Reveal direction="up" delay={0.1} width="100%">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-2">Visit Our Store in Dubai</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Explore our extensive inventory of genuine and aftermarket spare parts directly at our physical location.</p>
          </div>
          </Reveal>
          <Reveal direction="up" delay={0.3} width="100%">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="md:col-span-2 h-64 md:h-96 relative border-2 border-outline bg-surface-container overflow-hidden group">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="/dubai-shop-banner.jpg" alt="Shop Exterior" />
              <div className="absolute bottom-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-caps uppercase text-sm border border-outline">Main Storefront</div>
            </div>
            <div className="flex flex-col gap-gutter">
              <div className="flex-1 min-h-[200px] relative border-2 border-outline bg-surface-container overflow-hidden group">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="/dubai-shop-banner.jpg" alt="Shop Interior" style={{ objectPosition: 'left center' }} />
                <div className="absolute bottom-4 left-4 bg-surface text-on-surface px-3 py-1 font-label-caps uppercase text-sm border border-outline">Parts Counter</div>
              </div>
              <div className="flex-1 min-h-[200px] relative border-2 border-outline bg-surface-container overflow-hidden group">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="/dubai-shop-banner.jpg" alt="Warehouse Aisles" style={{ objectPosition: 'right center' }} />
                <div className="absolute bottom-4 left-4 bg-surface text-on-surface px-3 py-1 font-label-caps uppercase text-sm border border-outline">Inventory Aisles</div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-bright">
        <Reveal direction="up" delay={0.2} width="100%">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-stack-sm">Built on Precision</h2>
            <div className="w-16 h-1 bg-secondary mb-stack-md"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
              Bab Al Sajaah Spare Parts is the leading distributor of industrial and automotive components in the UAE. With over two decades of experience, we provide an unparalleled selection of high-grade, certified parts engineered to withstand the toughest environments.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
              Our commitment to quality means minimal downtime for your operations and maximum reliability for your fleet.
            </p>
            <a href="/about" className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 font-label-caps uppercase border border-primary hover:bg-inverse-surface transition-colors">
              Read Our Story
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <Parallax offset={-40} className="h-full">
          <div className="relative h-64 md:h-full min-h-[300px] border-2 border-outline bg-surface-container overflow-hidden group">
            <img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-iEnIy_p6cGUnNMxfn7aB4QZbiYhsZRz2DNW2prrb24jw1xxqMMyonoYp9LvN1UVg7v2dn6DpHp0PQbVVoVfbgrxHdhRopOa9cPr78IqSoZKPQD7LDcKZi8icvrSrGX4BNoDrkB0Mp0Znx0O-tOy25b5uZPae--pM7FlkHRw1jVNog5b14YiedG4JVF5ZyfQOh4lQCvM3Quu7kDXwc6f3GJMn4PmvYpO0qRY62KjXI71n4b3ZAM1" alt="Warehouse Overview" />
          </div>
          </Parallax>
        </div>
        </Reveal>
      </section>

      {/* Featured Products Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant">
        <div className="max-w-container-max mx-auto">
          <Reveal direction="up" delay={0.1} width="100%">
          <div className="flex justify-between items-end mb-stack-lg border-b border-primary pb-stack-sm">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">Featured Components</h2>
            <Link href="/catalog" className="text-secondary hover:text-secondary-fixed-dim font-label-caps uppercase flex items-center gap-1">
              View Catalog <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          </Reveal>
          <Reveal direction="up" delay={0.3} width="100%">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Reusing Product Card style from Catalog */}
            <div className="bg-surface border border-[#8E9196] hover:border-secondary hover:border-2 transition-all group flex flex-col">
              <div className="h-48 relative border-b border-outline overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuVyIM1dc8QpyMDmlpxntM_DkI76nqIPwdErvsd_QXZ26CRW4bQ-iRtbT11C-Fb-h2W8ZTjzJ8OpYerZnpHJJt8_GmR0V2QlnT2LonxKzv2xZfvMod4F05fWL-hP6ZD2bYI1NwLpCahSR06QYIuysupg75M0aTTXNjsQc9gPkszmU8piM8sjGzq3AyEYzgJmPQWI4nbZW4leKk2ez5zYxqMCjl48pek8pDf8YcZSgcf4j45bRP5bdn" alt="Piston Kit" />
              </div>
              <div className="p-stack-md flex-grow flex flex-col">
                <h3 className="font-headline-md text-headline-md text-primary uppercase tracking-tight mb-1">Forged Piston Kit</h3>
                <p className="font-body-md text-on-surface-variant mb-stack-md">High-compression assembly.</p>
                <div className="mt-auto flex items-center justify-between border-t border-outline pt-stack-md">
                  <Link href="/catalog/1" className="bg-primary text-on-primary px-4 py-2 font-label-caps uppercase hover:bg-tertiary transition-colors flex items-center gap-2">View Details</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-surface border border-[#8E9196] hover:border-secondary hover:border-2 transition-all group flex flex-col">
              <div className="h-48 relative border-b border-outline overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCFr9zFLe5BDYQVscv3xYdGH0YnPoBEXVJ4JTwaZf5vKymTQ2Ymbg_u64C9Gq_1yhn5lNl3x7sSqmaZFO5SvUQujb4ENRetcKI_WylYGYQJsYgsHidIMymsYeDIMF0zY75iW8ZGR9jNFkhc0_4RxpUshA1G6sEGkazEcMqlb2-eZbzePA4xTQDxuqyUoMhuqwGfd7qYTmQt7S2nkCDwvFgAqL3rdY9lVZ4w3z4eC5Op_Rdr4E3d8rH" alt="Brake Pads" />
              </div>
              <div className="p-stack-md flex-grow flex flex-col">
                <h3 className="font-headline-md text-headline-md text-primary uppercase tracking-tight mb-1">Ceramic Brake Pads</h3>
                <p className="font-body-md text-on-surface-variant mb-stack-md">Premium stopping power.</p>
                <div className="mt-auto flex items-center justify-between border-t border-outline pt-stack-md">
                  <Link href="/catalog/1" className="bg-primary text-on-primary px-4 py-2 font-label-caps uppercase hover:bg-tertiary transition-colors flex items-center gap-2">View Details</Link>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-[#8E9196] hover:border-secondary hover:border-2 transition-all group flex flex-col">
              <div className="h-48 relative border-b border-outline overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfIKUEad7dxGLQiDazB-bq8xHwr35ETIHQmK5nTlgWHGW0OsXz6bmDdvNn4nW5x8s0Eni2RQAd4WK2gD5zpGzmba7_lAWz7za9KMfrim8wcs1rpRsX9YsTMJvmXPdefg7tNxfEOt1MfIXZNDiHtHE9xNQF7xuPcZqE6hKGtQbd4uhwWqLVuNY15E-_Ymss4FmRK2GrWBwxUegaJOa_MZy6QO5PVflJ13gpQrfmv0zILLN_86a_1cGA" alt="Timing Belt" />
              </div>
              <div className="p-stack-md flex-grow flex flex-col">
                <h3 className="font-headline-md text-headline-md text-primary uppercase tracking-tight mb-1">Timing Belt Kit Pro</h3>
                <p className="font-body-md text-on-surface-variant mb-stack-md">Complete overhaul kit.</p>
                <div className="mt-auto flex items-center justify-between border-t border-outline pt-stack-md">
                  <Link href="/catalog/1" className="bg-primary text-on-primary px-4 py-2 font-label-caps uppercase hover:bg-tertiary transition-colors flex items-center gap-2">View Details</Link>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container border-y border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="bg-cover bg-fixed bg-center w-full h-full mix-blend-multiply grayscale" style={{ backgroundImage: "url('/dubai-shop-banner.jpg')" }}></div>
        </div>
        <Reveal direction="up" delay={0.2} width="100%">
        <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-stack-sm">Why Partner With Us?</h2>
            <div className="w-16 h-1 bg-secondary mb-stack-lg"></div>
            <div className="flex flex-col gap-stack-md">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary text-[32px]">verified</span>
                <div>
                  <h3 className="font-headline-md text-primary uppercase tracking-tight">100% Genuine & Certified</h3>
                  <p className="font-body-md text-on-surface-variant">We source directly from OEMs to ensure zero compromises on safety and performance.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary text-[32px]">inventory_2</span>
                <div>
                  <h3 className="font-headline-md text-primary uppercase tracking-tight">Massive Inventory</h3>
                  <p className="font-body-md text-on-surface-variant">Over 50,000 unique SKUs ready for immediate dispatch from our Sajaah warehouse.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-secondary text-[32px]">support_agent</span>
                <div>
                  <h3 className="font-headline-md text-primary uppercase tracking-tight">Expert Technical Support</h3>
                  <p className="font-body-md text-on-surface-variant">Our team of mechanics and parts specialists help you find the exact match for your vehicle.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 md:mt-0">
            <div className="bg-surface p-stack-md border border-outline text-center">
              <div className="font-headline-xl text-primary mb-2">20+</div>
              <div className="font-label-caps uppercase text-on-surface-variant text-sm">Years Experience</div>
            </div>
            <div className="bg-surface p-stack-md border border-outline text-center">
              <div className="font-headline-xl text-primary mb-2">50k</div>
              <div className="font-label-caps uppercase text-on-surface-variant text-sm">Parts in Stock</div>
            </div>
            <div className="bg-surface p-stack-md border border-outline text-center">
              <div className="font-headline-xl text-primary mb-2">GCC</div>
              <div className="font-label-caps uppercase text-on-surface-variant text-sm">Wide Shipping</div>
            </div>
            <div className="bg-primary text-on-primary p-stack-md border border-outline text-center flex flex-col justify-center items-center">
              <span className="material-symbols-outlined text-[48px] mb-2">handshake</span>
              <div className="font-label-caps uppercase text-sm">B2B Wholesale</div>
            </div>
          </div>
        </div>
        </Reveal>
      </section>

      {/* Global Export & Logistics Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface border-y border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="bg-cover bg-fixed bg-center w-full h-full mix-blend-screen grayscale" style={{ backgroundImage: "url('/dubai-shop-banner.jpg')" }}></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <Parallax offset={30} className="w-full">
            <Reveal direction="left" delay={0.1}>
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-stack-sm">Global Export Hub</h2>
              <div className="w-16 h-1 bg-secondary mb-stack-md"></div>
              <p className="font-body-lg text-on-surface-variant mb-stack-md">
                Located strategically in the Sajaah Industrial Area, our logistics network spans the entire GCC and beyond. We offer seamless container loading, custom crating, and rapid air-freight dispatch.
              </p>
              <ul className="flex flex-col gap-3 font-label-caps uppercase tracking-widest text-on-surface-variant text-sm border-l-2 border-secondary pl-4">
                <li><span className="text-primary mr-2">✓</span> FCL & LCL Shipping</li>
                <li><span className="text-primary mr-2">✓</span> Customs Clearance Support</li>
                <li><span className="text-primary mr-2">✓</span> Same-Day Local Dispatch</li>
              </ul>
            </Reveal>
          </Parallax>
          <div className="relative h-64 md:h-[400px] border-2 border-outline bg-surface-container overflow-hidden group">
            <Parallax offset={-50} className="w-full h-full">
              <img className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover grayscale mix-blend-multiply group-hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-iEnIy_p6cGUnNMxfn7aB4QZbiYhsZRz2DNW2prrb24jw1xxqMMyonoYp9LvN1UVg7v2dn6DpHp0PQbVVoVfbgrxHdhRopOa9cPr78IqSoZKPQD7LDcKZi8icvrSrGX4BNoDrkB0Mp0Znx0O-tOy25b5uZPae--pM7FlkHRw1jVNog5b14YiedG4JVF5ZyfQOh4lQCvM3Quu7kDXwc6f3GJMn4PmvYpO0qRY62KjXI71n4b3ZAM1" alt="Logistics Container" />
            </Parallax>
            <div className="absolute bottom-0 right-0 bg-secondary text-on-secondary px-4 py-2 font-headline-md uppercase">Ship Worldwide</div>
          </div>
        </div>
      </section>

      {/* Trusted By Mechanics - Staggered Parallax Cards */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <Reveal direction="up" delay={0.1} width="100%">
            <div className="text-center mb-stack-lg relative z-20">
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-2">Industry Vetted</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">What top-tier garages and fleet operators say about our parts.</p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-12 pb-12">
            {/* Card 1 - Parallax Up */}
            <Parallax offset={40} className="w-full h-full z-10">
              <div className="bg-surface border-2 border-outline p-6 h-full flex flex-col justify-between hover:border-secondary transition-colors relative">
                <div className="absolute -top-6 -right-6 text-primary opacity-10">
                  <span className="material-symbols-outlined text-[100px]">format_quote</span>
                </div>
                <p className="font-body-lg text-on-surface-variant mb-6 italic relative z-10">"The fastest turnaround for bulk orders in Sharjah. Their Bosch inventory is always fully stocked."</p>
                <div>
                  <div className="font-headline-md text-primary uppercase">Al Futtaim Garage</div>
                  <div className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">Dubai, UAE</div>
                </div>
              </div>
            </Parallax>

            {/* Card 2 - Parallax Down (Negative) */}
            <Parallax offset={-30} className="w-full h-full z-20 md:mt-12">
              <div className="bg-primary text-on-primary border-2 border-outline-variant p-6 h-full flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_#bb0016] transition-all relative">
                <div className="absolute -top-6 -right-6 text-surface opacity-20">
                  <span className="material-symbols-outlined text-[100px]">format_quote</span>
                </div>
                <p className="font-body-lg text-on-primary-fixed-variant mb-6 italic relative z-10">"We switched our entire fleet supply to Bab Al Sajaah. Zero counterfeit issues and perfect compatibility."</p>
                <div>
                  <div className="font-headline-md uppercase">Desert Transport LLC</div>
                  <div className="font-label-caps text-xs text-on-primary-fixed-variant uppercase tracking-widest">Sharjah, UAE</div>
                </div>
              </div>
            </Parallax>

            {/* Card 3 - Parallax Up Faster */}
            <Parallax offset={60} className="w-full h-full z-10">
              <div className="bg-surface border-2 border-outline p-6 h-full flex flex-col justify-between hover:border-secondary transition-colors relative">
                <div className="absolute -top-6 -right-6 text-primary opacity-10">
                  <span className="material-symbols-outlined text-[100px]">format_quote</span>
                </div>
                <p className="font-body-lg text-on-surface-variant mb-6 italic relative z-10">"Incredible technical support. They don't just sell parts; they understand exactly what the engine needs."</p>
                <div>
                  <div className="font-headline-md text-primary uppercase">Elite Motorsports</div>
                  <div className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">Abu Dhabi, UAE</div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* How to Order Process */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface border-t border-outline">
        <div className="max-w-container-max mx-auto">
          <Reveal direction="up" delay={0.1} width="100%">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-2">Streamlined Procurement</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">How to source your industrial and automotive parts with zero friction.</p>
          </div>
          </Reveal>
          
          <Reveal direction="up" delay={0.3} width="100%">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
            <div className="hidden md:block absolute top-[40px] left-[12%] right-[12%] h-[2px] bg-outline-variant z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-surface-container border-2 border-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[32px]">manage_search</span>
              </div>
              <h3 className="font-headline-md text-primary uppercase tracking-tight mb-2">1. Find Part</h3>
              <p className="font-body-md text-on-surface-variant">Search our catalog using part numbers or chassis numbers.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-surface-container border-2 border-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[32px]">request_quote</span>
              </div>
              <h3 className="font-headline-md text-primary uppercase tracking-tight mb-2">2. Get Quote</h3>
              <p className="font-body-md text-on-surface-variant">Submit your RFQ for instant pricing on wholesale or single items.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-surface-container border-2 border-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[32px]">inventory</span>
              </div>
              <h3 className="font-headline-md text-primary uppercase tracking-tight mb-2">3. Confirm Order</h3>
              <p className="font-body-md text-on-surface-variant">Our team verifies the fitment and secures your inventory.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-surface-container border-2 border-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[32px]">local_shipping</span>
              </div>
              <h3 className="font-headline-md text-primary uppercase tracking-tight mb-2">4. Dispatch</h3>
              <p className="font-body-md text-on-surface-variant">Fast, secure shipping across Dubai and the broader GCC.</p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="bg-cover bg-fixed bg-center w-full h-full mix-blend-darken grayscale" style={{ backgroundImage: "url('/dubai-shop-banner.jpg')" }}></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10">
          <Reveal direction="up" delay={0.1} width="100%">
          <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-2">Trusted by the Trade</h2>
              <div className="w-16 h-1 bg-secondary"></div>
            </div>
          </div>
          </Reveal>
          
          <Reveal direction="up" delay={0.3} width="100%">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface p-stack-md border border-outline relative">
              <span className="material-symbols-outlined absolute top-4 right-4 text-[48px] text-outline-variant opacity-30">format_quote</span>
              <div className="flex gap-1 text-secondary mb-4">
                <span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span>
              </div>
              <p className="font-body-lg text-on-surface mb-stack-md italic">"Babal Sajaah is our primary vendor for commercial fleet parts. Their ability to source rare OEM heavy-duty components quickly has saved us weeks of downtime."</p>
              <div>
                <h4 className="font-headline-sm text-primary uppercase tracking-tight">Tariq M.</h4>
                <p className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">Fleet Operations Manager</p>
              </div>
            </div>
            
            <div className="bg-surface p-stack-md border border-outline relative">
              <span className="material-symbols-outlined absolute top-4 right-4 text-[48px] text-outline-variant opacity-30">format_quote</span>
              <div className="flex gap-1 text-secondary mb-4">
                <span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span>
              </div>
              <p className="font-body-lg text-on-surface mb-stack-md italic">"The B2B pricing is unbeatable. We run a large garage in Al Quoz, and knowing I can just WhatsApp a chassis number and get exact matching parts delivered the same day is incredible."</p>
              <div>
                <h4 className="font-headline-sm text-primary uppercase tracking-tight">Ahmed R.</h4>
                <p className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">Garage Owner</p>
              </div>
            </div>
            
            <div className="bg-surface p-stack-md border border-outline relative">
              <span className="material-symbols-outlined absolute top-4 right-4 text-[48px] text-outline-variant opacity-30">format_quote</span>
              <div className="flex gap-1 text-secondary mb-4">
                <span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span><span className="material-symbols-outlined text-[18px]">star</span>
              </div>
              <p className="font-body-lg text-on-surface mb-stack-md italic">"Extremely professional technical support. When we had issues identifying a replacement alternator for an imported truck, their team cross-referenced the specs and found a perfect aftermarket match."</p>
              <div>
                <h4 className="font-headline-sm text-primary uppercase tracking-tight">Vikram S.</h4>
                <p className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">Lead Technician</p>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-bright">
        <Reveal direction="up" delay={0.2} width="100%">
        <div className="max-w-3xl mx-auto">
          <Reveal direction="up" delay={0.1} width="100%">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-2">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          </Reveal>
          <div className="flex flex-col gap-4">
            <details className="group bg-surface-container border border-outline p-4 cursor-pointer">
              <summary className="font-headline-md text-primary uppercase tracking-tight flex justify-between items-center outline-none">
                Do you offer wholesale pricing for bulk orders?
                <span className="material-symbols-outlined group-open:-rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 font-body-md text-on-surface-variant border-t border-outline pt-4">Yes, we provide highly competitive B2B wholesale pricing for garages, fleet operators, and regional distributors. Contact our sales team via WhatsApp or email to set up a corporate account.</p>
            </details>
            <details className="group bg-surface-container border border-outline p-4 cursor-pointer">
              <summary className="font-headline-md text-primary uppercase tracking-tight flex justify-between items-center outline-none">
                Are your parts genuine OEM or aftermarket?
                <span className="material-symbols-outlined group-open:-rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 font-body-md text-on-surface-variant border-t border-outline pt-4">We stock both. Our catalog clearly indicates whether a part is Genuine OEM or a high-quality certified aftermarket alternative, giving you the choice based on your budget and requirements.</p>
            </details>
            <details className="group bg-surface-container border border-outline p-4 cursor-pointer">
              <summary className="font-headline-md text-primary uppercase tracking-tight flex justify-between items-center outline-none">
                Do you ship outside of Dubai?
                <span className="material-symbols-outlined group-open:-rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 font-body-md text-on-surface-variant border-t border-outline pt-4">Absolutely. We offer fast shipping across all Emirates and provide export services to the wider GCC region and beyond. Shipping rates are calculated based on weight and destination.</p>
            </details>
          </div>
        </div>
        </Reveal>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-primary text-on-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="bg-cover bg-fixed bg-center w-full h-full mix-blend-overlay" style={{ backgroundImage: "url('/dubai-shop-banner.jpg')" }}></div>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg uppercase tracking-tighter mb-stack-sm">Need a Custom Quote?</h2>
          <p className="font-body-lg text-on-primary-fixed-variant mb-stack-lg">Our technical team is ready to assist with bulk orders and specialized part requests.</p>
          <a href="/contact" className="bg-secondary text-on-secondary px-8 py-4 font-label-caps uppercase tracking-widest hover:bg-secondary-container transition-colors flex items-center gap-2">
            Contact Support
            <span className="material-symbols-outlined">support_agent</span>
          </a>
        </div>
      </section>
    </>
  );
}
