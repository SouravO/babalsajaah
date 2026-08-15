export default function About() {
  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
      <div className="text-center py-stack-lg">
        <h1 className="font-headline-xl text-headline-xl text-primary uppercase tracking-tighter mb-stack-sm">About Bab Al Sajaah</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Precision. Reliability. Durability. Discover the engineering principles that drive our distribution of industrial spare parts.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center mb-stack-lg">
        <div className="flex flex-col gap-stack-md">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tighter">Our Legacy</h2>
          <div className="w-16 h-1 bg-secondary"></div>
          <p className="font-body-lg text-body-lg text-on-surface">
            Founded in the heart of Sharjah&apos;s industrial sector, Bab Al Sajaah Spare Parts has grown from a specialized local vendor to a premier distributor of heavy-duty automotive and industrial components across the Middle East.
          </p>
          <p className="font-body-md text-on-surface-variant">
            We understand that in heavy industry and commercial transport, downtime is not an option. That is why we source only the most resilient, precisely engineered OEM and high-performance aftermarket parts available globally.
          </p>
        </div>
        <div className="relative aspect-video border border-outline bg-surface-container overflow-hidden">
          <img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-iEnIy_p6cGUnNMxfn7aB4QZbiYhsZRz2DNW2prrb24jw1xxqMMyonoYp9LvN1UVg7v2dn6DpHp0PQbVVoVfbgrxHdhRopOa9cPr78IqSoZKPQD7LDcKZi8icvrSrGX4BNoDrkB0Mp0Znx0O-tOy25b5uZPae--pM7FlkHRw1jVNog5b14YiedG4JVF5ZyfQOh4lQCvM3Quu7kDXwc6f3GJMn4PmvYpO0qRY62KjXI71n4b3ZAM1" alt="Bab Al Sajaah Headquarters" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-stack-lg">
        <div className="bg-surface-container-lowest p-stack-lg border border-outline flex flex-col items-center text-center">
          <span className="material-symbols-outlined text-[3rem] text-primary mb-stack-sm">engineering</span>
          <h3 className="font-headline-md text-primary uppercase mb-2">Technical Expertise</h3>
          <p className="font-body-sm text-on-surface-variant">Our team consists of veteran mechanical engineers and parts specialists who ensure every component meets rigorous tolerances.</p>
        </div>
        <div className="bg-surface-container-lowest p-stack-lg border border-outline flex flex-col items-center text-center">
          <span className="material-symbols-outlined text-[3rem] text-primary mb-stack-sm">inventory_2</span>
          <h3 className="font-headline-md text-primary uppercase mb-2">Vast Inventory</h3>
          <p className="font-body-sm text-on-surface-variant">With thousands of SKUs in stock, ranging from micro-sensors to massive engine blocks, we fulfill complex orders rapidly.</p>
        </div>
        <div className="bg-surface-container-lowest p-stack-lg border border-outline flex flex-col items-center text-center">
          <span className="material-symbols-outlined text-[3rem] text-primary mb-stack-sm">verified</span>
          <h3 className="font-headline-md text-primary uppercase mb-2">Quality Assurance</h3>
          <p className="font-body-sm text-on-surface-variant">Every part we sell is backed by rigorous QA processes and comprehensive warranties to guarantee operational safety.</p>
        </div>
      </div>
    </main>
  );
}
