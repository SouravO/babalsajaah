export default function Home() {
  return (
    <>
      <section className="relative bg-primary text-on-primary py-[80px] px-margin-mobile md:px-margin-desktop hero-diagonal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="bg-cover bg-center w-full h-full mix-blend-overlay" data-alt="A gritty, high-contrast black and white close-up of a massive industrial vehicle engine block in a professional mechanic's workshop. Heavy metal components, gears, and pistons are sharply in focus against a dark background. Red accent lighting highlights the metallic textures. Corporate brutalist aesthetic, conveying raw power and precision engineering." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBw0D-pODV2lPMTeyd_fRRI1tpKzj2ZWnxGCNgtElrD0mwlbZ9jdrpic0ZrAiN3rI2dKbxOS2I7GQI1xYhoR8daaIXM0KZvs9KV4qNDs1P2IjSTrPkbdfpvbgqpNCPeSulxkYP__7zzlTDdQ9BWrn_cQnC64pArp2d241Ecq5FkpNuOqc5njqhGp9VqYDE-ESIZi3PT4SP85jpdRFvbhlcGqm-4ILmuHJNqBsRGkJ6KqJnZC0NKj_Qf')" }}></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
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
          {/* Part Search Tool */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                <div className="flex flex-col">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">Year</label>
                  <select className="bg-surface-container border border-outline p-2 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none" disabled>
                    <option>Select Year</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">Part Number (Optional)</label>
                  <input className="bg-surface-container border border-outline p-2 font-label-technical text-label-technical focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none" placeholder="e.g. OEM-12345" type="text"/>
                </div>
              </div>
              <button className="mt-4 bg-primary text-on-primary w-full py-3 font-label-caps text-label-caps uppercase tracking-widest border border-primary hover:bg-inverse-surface transition-colors flex justify-center items-center gap-2" type="button">
                Search Inventory
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section id="brands" className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter mb-stack-md">Trusted OEM Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-stack-lg opacity-70 grayscale">
            <div className="font-headline-md text-primary uppercase tracking-widest border border-outline px-4 py-2 bg-surface-container">Bosch</div>
            <div className="font-headline-md text-primary uppercase tracking-widest border border-outline px-4 py-2 bg-surface-container">Denso</div>
            <div className="font-headline-md text-primary uppercase tracking-widest border border-outline px-4 py-2 bg-surface-container">Mahle</div>
            <div className="font-headline-md text-primary uppercase tracking-widest border border-outline px-4 py-2 bg-surface-container">NGK</div>
            <div className="font-headline-md text-primary uppercase tracking-widest border border-outline px-4 py-2 bg-surface-container">Brembo</div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-bright">
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
          <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] border-2 border-outline bg-surface-container">
            <img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-iEnIy_p6cGUnNMxfn7aB4QZbiYhsZRz2DNW2prrb24jw1xxqMMyonoYp9LvN1UVg7v2dn6DpHp0PQbVVoVfbgrxHdhRopOa9cPr78IqSoZKPQD7LDcKZi8icvrSrGX4BNoDrkB0Mp0Znx0O-tOy25b5uZPae--pM7FlkHRw1jVNog5b14YiedG4JVF5ZyfQOh4lQCvM3Quu7kDXwc6f3GJMn4PmvYpO0qRY62KjXI71n4b3ZAM1" alt="Warehouse Overview" />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline-variant">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-stack-lg border-b border-primary pb-stack-sm">
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">Featured Components</h2>
            <a href="/catalog" className="text-secondary hover:text-secondary-fixed-dim font-label-caps uppercase flex items-center gap-1">
              View Catalog <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
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
                  <a href="/catalog/1" className="bg-primary text-on-primary px-4 py-2 font-label-caps uppercase hover:bg-tertiary transition-colors flex items-center gap-2">View Details</a>
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
                  <a href="/catalog/1" className="bg-primary text-on-primary px-4 py-2 font-label-caps uppercase hover:bg-tertiary transition-colors flex items-center gap-2">View Details</a>
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
                  <a href="/catalog/1" className="bg-primary text-on-primary px-4 py-2 font-label-caps uppercase hover:bg-tertiary transition-colors flex items-center gap-2">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-primary text-on-primary text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
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
