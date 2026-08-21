import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

new_sections = """      {/* Global Export & Logistics Section */}
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

"""

# Insert right before FAQ section
content = content.replace("      {/* FAQ Section */}", new_sections + "      {/* FAQ Section */}")

with open('app/page.tsx', 'w') as f:
    f.write(content)
