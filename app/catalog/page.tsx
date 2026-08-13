export default function Catalog() {
  return (
    <div className="flex-grow flex w-full max-w-container-max mx-auto">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-[calc(100vh-80px)] w-64 sticky top-20 bg-surface-container dark:bg-primary-container text-on-surface dark:text-on-primary-container font-label-caps text-label-caps border-r border-outline dark:border-outline-variant flat no shadows py-stack-lg shrink-0 overflow-y-auto">
        <div className="px-gutter mb-stack-lg">
          <div className="font-headline-lg text-headline-lg text-primary dark:text-on-primary-container mb-1 tracking-tighter">Bab Al Sajaah</div>
          <div className="text-on-surface-variant dark:text-on-tertiary-container tech-font text-label-technical">Precision Spare Parts</div>
        </div>
        <nav className="flex flex-col gap-1 w-full flex-grow">
          <a className="flex items-center gap-3 px-gutter py-3 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-inverse-surface transition-all duration-200" href="/">
            <span className="material-symbols-outlined">home</span>
            <span className="uppercase tracking-widest">Home</span>
          </a>
          <a className="flex items-center gap-3 px-gutter py-3 bg-secondary dark:bg-secondary-container text-on-secondary dark:text-on-secondary-container rounded-none border-l-4 border-primary transition-all duration-200" href="/catalog">
            <span className="material-symbols-outlined icon-fill">settings_input_component</span>
            <span className="uppercase tracking-widest">Catalog</span>
          </a>
          <a className="flex items-center gap-3 px-gutter py-3 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-inverse-surface transition-all duration-200" href="#">
            <span className="material-symbols-outlined">directions_car</span>
            <span className="uppercase tracking-widest">Compatibility</span>
          </a>
          <a className="flex items-center gap-3 px-gutter py-3 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-inverse-surface transition-all duration-200" href="#">
            <span className="material-symbols-outlined">description</span>
            <span className="uppercase tracking-widest">My Quotes</span>
          </a>
          <a className="flex items-center gap-3 px-gutter py-3 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-inverse-surface transition-all duration-200" href="/contact">
            <span className="material-symbols-outlined">support_agent</span>
            <span className="uppercase tracking-widest">Support</span>
          </a>
        </nav>
        <div className="px-gutter mt-auto pt-stack-lg border-t border-outline">
          <h3 className="font-label-caps text-label-caps uppercase text-on-surface-variant mb-stack-md tracking-widest">Filters</h3>
          <div className="space-y-stack-md mb-stack-lg">
            <details className="group" open>
              <summary className="flex justify-between items-center cursor-pointer font-body-md text-body-md font-bold text-primary mb-2">
                Category
                <span className="material-symbols-outlined group-open:-rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="flex flex-col gap-2 pl-2 tech-font text-label-technical">
                <label className="flex items-center gap-2 cursor-pointer"><input defaultChecked className="text-secondary border-outline focus:ring-secondary rounded-none bg-surface" type="checkbox"/> Engine</label>
                <label className="flex items-center gap-2 cursor-pointer"><input className="text-secondary border-outline focus:ring-secondary rounded-none bg-surface" type="checkbox"/> Transmission</label>
                <label className="flex items-center gap-2 cursor-pointer"><input className="text-secondary border-outline focus:ring-secondary rounded-none bg-surface" type="checkbox"/> Braking</label>
              </div>
            </details>
            <details className="group" open>
              <summary className="flex justify-between items-center cursor-pointer font-body-md text-body-md font-bold text-primary mb-2">
                Brand
                <span className="material-symbols-outlined group-open:-rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="flex flex-col gap-2 pl-2 tech-font text-label-technical">
                <label className="flex items-center gap-2 cursor-pointer"><input className="text-secondary border-outline focus:ring-secondary rounded-none bg-surface" type="checkbox"/> Bosch</label>
                <label className="flex items-center gap-2 cursor-pointer"><input defaultChecked className="text-secondary border-outline focus:ring-secondary rounded-none bg-surface" type="checkbox"/> Denso</label>
                <label className="flex items-center gap-2 cursor-pointer"><input className="text-secondary border-outline focus:ring-secondary rounded-none bg-surface" type="checkbox"/> Mahle</label>
              </div>
            </details>
          </div>
          <button className="w-full bg-primary text-on-primary py-3 font-label-caps text-label-caps uppercase hover:bg-tertiary transition-colors border border-primary flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">search</span>
            Part Search
          </button>
        </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="flex-grow p-gutter md:p-margin-desktop bg-surface-bright">
        <div className="flex justify-between items-end mb-stack-lg border-b-2 border-primary pb-stack-sm">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tighter uppercase">Product Catalog</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Displaying 142 Engine Components</p>
          </div>
          <div className="flex gap-2 text-on-surface-variant">
            <button className="p-2 border border-outline hover:border-primary hover:text-primary transition-colors bg-surface-lowest"><span className="material-symbols-outlined">grid_view</span></button>
            <button className="p-2 border border-outline hover:border-primary hover:text-primary transition-colors bg-surface-container"><span className="material-symbols-outlined">view_list</span></button>
          </div>
        </div>
        {/* Bento Grid / Catalog Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Product Card 1 */}
          <div className="bg-surface-container-lowest border border-[#8E9196] hover:border-secondary hover:border-2 transition-all group flex flex-col">
            <div className="h-48 relative border-b border-outline overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" data-alt="A high-quality, perfectly lit studio photograph of a polished metal engine piston assembly on a pristine white background. Industrial, mechanical aesthetic. Sharp focus, deep contrasts, neutral color palette with metallic sheen." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuVyIM1dc8QpyMDmlpxntM_DkI76nqIPwdErvsd_QXZ26CRW4bQ-iRtbT11C-Fb-h2W8ZTjzJ8OpYerZnpHJJt8_GmR0V2QlnT2LonxKzv2xZfvMod4F05fWL-hP6ZD2bYI1NwLpCahSR06QYIuysupg75M0aTTXNjsQc9gPkszmU8piM8sjGzq3AyEYzgJmPQWI4nbZW4leKk2ez5zYxqMCjl48pek8pDf8YcZSgcf4j45bRP5bdn" />
              <div className="absolute top-2 left-2 bg-surface-lowest border border-outline px-2 py-1 font-label-caps text-label-caps text-primary uppercase flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> In Stock
              </div>
            </div>
            <div className="p-stack-md flex-grow flex flex-col">
              <h3 className="font-headline-md text-headline-md text-primary leading-tight mb-1 uppercase tracking-tight">Forged Piston Kit</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">High-compression assembly for severe duty applications.</p>
              <div className="mt-auto grid grid-cols-2 gap-px bg-outline border border-outline tech-font text-label-technical mb-stack-lg">
                <div className="bg-surface-container-lowest p-2">
                  <span className="block text-on-surface-variant text-[10px] uppercase">SKU</span>
                  <span className="text-primary font-bold">PT-8942-F</span>
                </div>
                <div className="bg-surface-container-lowest p-2">
                  <span className="block text-on-surface-variant text-[10px] uppercase">Weight</span>
                  <span className="text-primary font-bold">1.2 kg</span>
                </div>
                <div className="bg-surface-container-lowest p-2 col-span-2">
                  <span className="block text-on-surface-variant text-[10px] uppercase">Compatibility</span>
                  <span className="text-primary truncate block">V8 Industrial Series 4.0L+</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto border-t border-outline pt-stack-md">
                <span className="font-headline-md text-headline-md text-primary">$345.00</span>
                <button className="bg-secondary text-on-secondary px-4 py-2 font-label-caps text-label-caps uppercase hover:bg-secondary-container transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">add</span> Quote
                </button>
              </div>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="bg-surface-container-lowest border border-[#8E9196] hover:border-secondary hover:border-2 transition-all group flex flex-col">
            <div className="h-48 relative border-b border-outline overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" data-alt="A high-contrast macro studio photograph of an industrial fuel injector nozzle. The part is metallic and dark grey, resting on a flat neutral background. Lighting is harsh and precise, highlighting the machined details and structural robustness of the part." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlAkr2-d8IAzI_quDV6aF-pxwLbjSV9Qdg0q5Z56ILmc9pd0yzkJj9Ypxbp3JPI0-u_cuhGy9_95HmxO7g8XaFk7us4VxvO2Ap_no2JPgzgSs-vDoyRIzgQeWnGOphQYnVAKiorncinaXa3mOt1-0t3QVjITzmBt9G8nezCz5WI2kC0E1S7lPxaZmAX6y9EhIXblO-AGX6RQ46G1ZEeqXlsZHivMMZtKIO1VeIhIUMA0_H_JNuyxwp" />
              <div className="absolute top-2 left-2 bg-surface-lowest border border-orange-500 border-dashed px-2 py-1 font-label-caps text-label-caps text-orange-600 uppercase flex items-center gap-1 bg-white">
                Backorder
              </div>
            </div>
            <div className="p-stack-md flex-grow flex flex-col">
              <h3 className="font-headline-md text-headline-md text-primary leading-tight mb-1 uppercase tracking-tight">Fuel Injector Nozzle</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">Direct injection multi-port valve mechanism.</p>
              <div className="mt-auto grid grid-cols-2 gap-px bg-outline border border-outline tech-font text-label-technical mb-stack-lg">
                <div className="bg-surface-container-lowest p-2">
                  <span className="block text-on-surface-variant text-[10px] uppercase">SKU</span>
                  <span className="text-primary font-bold">FI-2210-X</span>
                </div>
                <div className="bg-surface-container-lowest p-2">
                  <span className="block text-on-surface-variant text-[10px] uppercase">Pressure</span>
                  <span className="text-primary font-bold">2500 Bar</span>
                </div>
                <div className="bg-surface-container-lowest p-2 col-span-2">
                  <span className="block text-on-surface-variant text-[10px] uppercase">Compatibility</span>
                  <span className="text-primary truncate block">Diesel Gen-III Platforms</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto border-t border-outline pt-stack-md">
                <span className="font-headline-md text-headline-md text-primary">$189.50</span>
                <button className="bg-primary text-on-primary px-4 py-2 font-label-caps text-label-caps uppercase hover:bg-tertiary transition-colors flex items-center gap-2 border border-primary">
                  <span className="material-symbols-outlined text-[18px]">add</span> Quote
                </button>
              </div>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="bg-surface-container-lowest border border-[#8E9196] hover:border-secondary hover:border-2 transition-all group flex flex-col">
            <div className="h-48 relative border-b border-outline overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" data-alt="A clean, clinical studio shot of a complex automotive timing belt kit, including pulleys and tensioners. Laid out flat against a stark white background. Focus on the raw mechanical components, highlighting teeth patterns and metallic textures. Industrial, robust aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfIKUEad7dxGLQiDazB-bq8xHwr35ETIHQmK5nTlgWHGW0OsXz6bmDdvNn4nW5x8s0Eni2RQAd4WK2gD5zpGzmba7_lAWz7za9KMfrim8wcs1rpRsX9YsTMJvmXPdefg7tNxfEOt1MfIXZNDiHtHE9xNQF7xuPcZqE6hKGtQbd4uhwWqLVuNY15E-_Ymss4FmRK2GrWBwxUegaJOa_MZy6QO5PVflJ13gpQrfmv0zILLN_86a_1cGA" />
              <div className="absolute top-2 left-2 bg-surface-lowest border border-outline px-2 py-1 font-label-caps text-label-caps text-primary uppercase flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> In Stock
              </div>
            </div>
            <div className="p-stack-md flex-grow flex flex-col">
              <h3 className="font-headline-md text-headline-md text-primary leading-tight mb-1 uppercase tracking-tight">Timing Belt Kit Pro</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">Complete overhaul kit with heavy-duty tensioners.</p>
              <div className="mt-auto grid grid-cols-2 gap-px bg-outline border border-outline tech-font text-label-technical mb-stack-lg">
                <div className="bg-surface-container-lowest p-2">
                  <span className="block text-on-surface-variant text-[10px] uppercase">SKU</span>
                  <span className="text-primary font-bold">TBK-990-HD</span>
                </div>
                <div className="bg-surface-container-lowest p-2">
                  <span className="block text-on-surface-variant text-[10px] uppercase">Teeth</span>
                  <span className="text-primary font-bold">148T</span>
                </div>
                <div className="bg-surface-container-lowest p-2 col-span-2">
                  <span className="block text-on-surface-variant text-[10px] uppercase">Compatibility</span>
                  <span className="text-primary truncate block">Universal Inline-4 2.0L-2.4L</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto border-t border-outline pt-stack-md">
                <span className="font-headline-md text-headline-md text-primary">$215.00</span>
                <button className="bg-secondary text-on-secondary px-4 py-2 font-label-caps text-label-caps uppercase hover:bg-secondary-container transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">add</span> Quote
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="mt-stack-lg flex justify-center items-center gap-2 font-label-caps text-label-caps">
          <button className="p-2 border border-outline text-on-surface-variant hover:border-primary hover:text-primary transition-colors bg-surface-container-lowest disabled:opacity-50"><span className="material-symbols-outlined">chevron_left</span></button>
          <button className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary">1</button>
          <button className="w-8 h-8 flex items-center justify-center border border-outline text-on-surface hover:border-primary transition-colors bg-surface-container-lowest">2</button>
          <button className="w-8 h-8 flex items-center justify-center border border-outline text-on-surface hover:border-primary transition-colors bg-surface-container-lowest">3</button>
          <span className="text-on-surface-variant mx-2">...</span>
          <button className="p-2 border border-outline text-on-surface hover:border-primary hover:text-primary transition-colors bg-surface-container-lowest"><span className="material-symbols-outlined">chevron_right</span></button>
        </div>
      </main>
    </div>
  );
}
