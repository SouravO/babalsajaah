import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

old_form = """            <form className="flex flex-col gap-stack-md">
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
            </form>"""

new_form = """            <form action="/catalog" method="GET" className="flex flex-col gap-stack-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                <div className="flex flex-col">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">Category</label>
                  <select name="category" className="bg-surface-container border border-outline p-2 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none">
                    <option value="">All Categories</option>
                    <option value="Engine">Engine Parts</option>
                    <option value="Brakes">Brake System</option>
                    <option value="Suspension">Suspension & Steering</option>
                    <option value="Electrical">Electrical Components</option>
                    <option value="Filters">Filters</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">Brand</label>
                  <select name="brand" className="bg-surface-container border border-outline p-2 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none">
                    <option value="">All Brands</option>
                    <option value="Bosch">Bosch</option>
                    <option value="Denso">Denso</option>
                    <option value="NGK">NGK</option>
                    <option value="Toyota">Toyota Genuine</option>
                    <option value="Nissan">Nissan Genuine</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">Condition</label>
                <select name="condition" className="bg-surface-container border border-outline p-2 font-body-md text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary outline-none rounded-none">
                  <option value="">Any Condition</option>
                  <option value="new_oem">New (OEM)</option>
                  <option value="new_aftermarket">New (Aftermarket)</option>
                  <option value="used_excellent">Used (Excellent)</option>
                </select>
              </div>
              <button className="mt-4 bg-primary text-on-primary w-full py-3 font-label-caps text-label-caps uppercase tracking-widest border border-primary hover:bg-inverse-surface transition-colors flex justify-center items-center gap-2" type="submit">
                Search Inventory
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>"""

content = content.replace(old_form, new_form)

with open('app/page.tsx', 'w') as f:
    f.write(content)
