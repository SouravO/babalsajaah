import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

testimonials_html = """      {/* How to Order Process */}
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

      {/* FAQ Section */}"""

content = content.replace('      {/* FAQ Section */}', testimonials_html)

with open('app/page.tsx', 'w') as f:
    f.write(content)
