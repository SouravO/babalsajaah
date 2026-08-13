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
    </>
  );
}
