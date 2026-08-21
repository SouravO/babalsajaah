import re

# 1. Update Footer.tsx
with open('app/components/Footer.tsx', 'r') as f:
    footer = f.read()

footer = footer.replace(
    '<div className="font-headline-md text-headline-md text-on-primary uppercase tracking-tighter">Bab Al Sajaah</div>',
    '<div className="font-headline-md text-headline-md text-on-primary uppercase tracking-tighter">BAB AL SAJAAH AUTO SPARE PARTS TR. L.L.C</div>'
)

new_info = """          <div className="font-label-technical text-label-technical text-on-primary-fixed-variant flex flex-col gap-1 mt-2">
            <span>Sharjah, United Arab Emirates</span>
            <span>Tel: 06-5360431 | Mob: 056-4997292</span>
            <span>P.O.Box: 79608 | Email: sajaauto@gmail.com</span>
          </div>"""

footer = footer.replace(
    '<div className="font-label-technical text-label-technical text-on-primary-fixed-variant">\n            Precision spare parts for industrial and automotive applications.\n          </div>',
    '<div className="font-label-technical text-label-technical text-on-primary-fixed-variant">\n            Precision spare parts for industrial and automotive applications.\n          </div>\n' + new_info
)

with open('app/components/Footer.tsx', 'w') as f:
    f.write(footer)

# 2. Update Navbar.tsx to add contact info if needed, but it doesn't have it natively. Let's leave it.

# 3. Update app/catalog/page.tsx
with open('app/catalog/page.tsx', 'r') as f:
    catalog = f.read()

# Remove the price rendering logic and replace with "Price on Inquiry"
price_str = """                      <span className="font-headline-md text-headline-md text-primary">
                        {part.price != null
                          ? `AED ${Number(part.price).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                            })}`
                          : "POA"}
                      </span>"""
catalog = catalog.replace(
    price_str,
    """                      <span className="font-label-caps text-label-caps text-primary uppercase">
                        Price on Inquiry
                      </span>"""
)

# Update whatsapp number
catalog = catalog.replace('https://wa.me/971501234567', 'https://wa.me/971564997292')

with open('app/catalog/page.tsx', 'w') as f:
    f.write(catalog)

# 4. Update app/catalog/[id]/page.tsx
with open('app/catalog/[id]/page.tsx', 'r') as f:
    product = f.read()

# Replace the "Add to Quote" button with "Inquire on WhatsApp"
quote_btn = """              <button className="w-full bg-secondary text-on-secondary py-stack-md font-label-caps text-label-caps border border-secondary hover:bg-secondary-container transition-colors flex items-center justify-center gap-stack-sm mt-stack-sm" type="button">
                <span className="material-symbols-outlined">add_shopping_cart</span> Add to Quote
              </button>"""
wa_btn = """              <a href="https://wa.me/971564997292?text=Hi,%20I'm%20interested%20in%20the%20Pro-Stop%20Ceramic%20Brake%20Pads%20(SKU:%20BRK-CER-992-A).%20Can%20you%20please%20share%20the%20price?" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-stack-md font-label-caps text-label-caps hover:bg-green-600 transition-colors flex items-center justify-center gap-stack-sm mt-stack-sm">
                <span className="material-symbols-outlined">chat</span> Inquire on WhatsApp for Price
              </a>"""

product = product.replace(quote_btn, wa_btn)

with open('app/catalog/[id]/page.tsx', 'w') as f:
    f.write(product)

print("Done")
