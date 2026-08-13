export default function Contact() {
  return (
    <div className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col gap-stack-lg">
      <div className="text-center py-stack-lg">
        <h1 className="font-headline-xl text-headline-xl text-primary uppercase tracking-tighter mb-stack-sm">Technical Support &amp; Inquiries</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Our precision spare parts experts are ready to assist you. Contact us for technical specifications, bulk quotes, or compatibility inquiries.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-surface-container border border-outline p-stack-lg">
          <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tighter mb-stack-lg border-b border-outline pb-stack-sm">Submit an Inquiry</h2>
          <form className="flex flex-col gap-stack-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-base" htmlFor="first-name">First Name</label>
                <input className="bg-surface border border-primary focus:border-secondary focus:ring-1 focus:ring-secondary p-2 font-label-technical text-label-technical text-on-surface outline-none transition-colors" id="first-name" placeholder="ENTER FIRST NAME" type="text" />
              </div>
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-base" htmlFor="last-name">Last Name</label>
                <input className="bg-surface border border-primary focus:border-secondary focus:ring-1 focus:ring-secondary p-2 font-label-technical text-label-technical text-on-surface outline-none transition-colors" id="last-name" placeholder="ENTER LAST NAME" type="text" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-base" htmlFor="email">Corporate Email</label>
              <input className="bg-surface border border-primary focus:border-secondary focus:ring-1 focus:ring-secondary p-2 font-label-technical text-label-technical text-on-surface outline-none transition-colors" id="email" placeholder="email@company.com" type="email" />
            </div>
            <div className="flex flex-col">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-base" htmlFor="inquiry-type">Inquiry Type</label>
              <select className="bg-surface border border-primary focus:border-secondary focus:ring-1 focus:ring-secondary p-2 font-label-technical text-label-technical text-on-surface outline-none transition-colors appearance-none rounded-none" id="inquiry-type">
                <option>Technical Specifications</option>
                <option>Bulk Order Quote</option>
                <option>Order Status</option>
                <option>Compatibility Check</option>
              </select>
            </div>
            <div className="flex flex-col flex-grow">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-base" htmlFor="message">Message Details</label>
              <textarea className="bg-surface border border-primary focus:border-secondary focus:ring-1 focus:ring-secondary p-2 font-label-technical text-label-technical text-on-surface outline-none transition-colors resize-none" id="message" placeholder="Provide part numbers (SKU) if applicable..." rows={5}></textarea>
            </div>
            <button className="mt-stack-sm bg-primary text-on-primary border border-primary hover:bg-inverse-surface transition-colors font-label-caps text-label-caps uppercase py-3 px-6 flex justify-center items-center gap-2 w-full md:w-auto self-start" type="button">
              Submit Request
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </form>
        </div>
        {/* Contact Info & Map */}
        <div className="lg:col-span-5 flex flex-col gap-stack-lg">
          <div className="bg-primary text-on-primary border border-primary p-stack-lg flex flex-col gap-stack-md">
            <h3 className="font-headline-md text-headline-md uppercase tracking-tighter border-b border-outline-variant pb-stack-sm">Direct Contact</h3>
            <div className="flex items-start gap-stack-md">
              <span className="material-symbols-outlined text-secondary" data-icon="call">call</span>
              <div>
                <div className="font-label-caps text-label-caps text-on-primary-container uppercase mb-1">Phone Line</div>
                <div className="font-label-technical text-label-technical">+971 6 536 1234</div>
              </div>
            </div>
            <div className="flex items-start gap-stack-md">
              <span className="material-symbols-outlined text-secondary" data-icon="forum">forum</span>
              <div>
                <div className="font-label-caps text-label-caps text-on-primary-container uppercase mb-1">WhatsApp Fast Track</div>
                <div className="font-label-technical text-label-technical">+971 50 123 4567</div>
                <a className="text-secondary hover:text-secondary-fixed-dim font-label-caps text-label-caps uppercase underline mt-2 inline-block" href="#">Message Us Now</a>
              </div>
            </div>
            <div className="flex items-start gap-stack-md">
              <span className="material-symbols-outlined text-secondary" data-icon="mail">mail</span>
              <div>
                <div className="font-label-caps text-label-caps text-on-primary-container uppercase mb-1">General Inquiries</div>
                <div className="font-label-technical text-label-technical">sales@babalsajaah.com</div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container border border-outline p-stack-lg flex flex-col gap-stack-md">
            <h3 className="font-headline-md text-headline-md text-primary uppercase tracking-tighter border-b border-outline pb-stack-sm">Headquarters</h3>
            <div className="flex items-start gap-stack-md">
              <span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Location</div>
                <div className="font-label-technical text-label-technical text-on-surface">Warehouse 12, Sajaah Industrial Area<br/>Sharjah, United Arab Emirates</div>
              </div>
            </div>
            <div className="flex items-start gap-stack-md">
              <span className="material-symbols-outlined text-primary" data-icon="schedule">schedule</span>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Operating Hours</div>
                <div className="font-label-technical text-label-technical text-on-surface">Mon - Sat: 08:00 - 18:00 (GST)<br/>Sunday: Closed</div>
              </div>
            </div>
            <div className="mt-stack-sm h-48 border border-outline relative overflow-hidden bg-surface-variant group">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A highly detailed overhead map view of an industrial park in Sharjah, UAE, featuring large warehouse structures and precise road grids." data-location="Sharjah, Sajaah Industrial Area" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-iEnIy_p6cGUnNMxfn7aB4QZbiYhsZRz2DNW2prrb24jw1xxqMMyonoYp9LvN1UVg7v2dn6DpHp0PQbVVoVfbgrxHdhRopOa9cPr78IqSoZKPQD7LDcKZi8icvrSrGX4BNoDrkB0Mp0Znx0O-tOy25b5uZPae--pM7FlkHRw1jVNog5b14YiedG4JVF5ZyfQOh4lQCvM3Quu7kDXwc6f3GJMn4PmvYpO0qRY62KjXI71n4b3ZAM1" />
              <div className="absolute inset-0 border border-primary pointer-events-none"></div>
              <div className="absolute bottom-2 right-2 bg-primary text-on-primary px-2 py-1 font-label-caps text-label-caps uppercase border border-outline">Map View</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
