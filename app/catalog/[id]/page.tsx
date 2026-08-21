import Link from "next/link";

export default function ProductDetails() {
  return (
    <div className="flex-1 p-margin-mobile md:p-margin-desktop md:ml-64 w-full">
      {/* Breadcrumb */}
      <div className="mb-stack-lg text-on-surface-variant font-label-technical text-label-technical flex items-center gap-stack-sm">
        <Link className="hover:text-secondary" href="/catalog">Catalog</Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <a className="hover:text-secondary" href="#">Braking System</a>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-on-surface">Pro-Stop Ceramic Brake Pads</span>
      </div>
      {/* Product Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-stack-lg">
        {/* Image Gallery */}
        <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant p-stack-sm">
          <div className="aspect-video w-full relative bg-surface-container mb-stack-sm">
            <img className="w-full h-full object-cover border border-outline-variant" data-alt="A high-resolution, industrial-style product photograph of premium ceramic brake pads." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCFr9zFLe5BDYQVscv3xYdGH0YnPoBEXVJ4JTwaZf5vKymTQ2Ymbg_u64C9Gq_1yhn5lNl3x7sSqmaZFO5SvUQujb4ENRetcKI_WylYGYQJsYgsHidIMymsYeDIMF0zY75iW8ZGR9jNFkhc0_4RxpUshA1G6sEGkazEcMqlb2-eZbzePA4xTQDxuqyUoMhuqwGfd7qYTmQt7S2nkCDwvFgAqL3rdY9lVZ4w3z4eC5Op_Rdr4E3d8rH" />
            <div className="absolute top-stack-sm right-stack-sm bg-surface-container-lowest border border-outline-variant px-stack-sm py-1 flex items-center gap-stack-sm">
              <span className="text-[#008000] font-label-caps text-label-caps">In Stock</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-stack-sm">
            <div className="aspect-square bg-surface-container border border-secondary">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsUQoomWaMvSp14n4CdUJqv_Lz78y1sJ6PNDs0kX5r9okJEmGUMYXeABRyFIn6pZqWuCgYY_HWlXhAI_ljqxv1pgWufKz8xDRTC8aNN8pzPsXF_ZgRiAQ6J_rJmlB-xNKbcZl7lbEByRpMgPtyO9xITIBz7LWKZHRVQGKL4EsCu66WTx7zJomgGHA6z9umnoOWY8bOMWCoQp1NqeZTxcBHWHTK5-QWTTm9fubFNXjbxsynZn5zTVlk" />
            </div>
            <div className="aspect-square bg-surface-container border border-outline-variant">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-yrEtM8lPQnozPIB4f3aeXzqslay4L7yFyheyfIbw_RFi-c5aJvaAvXH7gIaqzWG_Jz3BpyXdsP3V2mCvo5PyJ1VW6SXBCTaXB_xTkV5eT0_yd-LkgBe8VKCZpjJAbw_eVvpU4LrpcO7FTIN_iyc0Z3ZWntu3IPAD6veL1YzkV46G3jjO1_P37OjZqtXDp9v0h8w9UgNcL1W8H9E_8xXPXNHQhWFIEE0qJdmLGNdL8Qt0o417XeB3" />
            </div>
            <div className="aspect-square bg-surface-container border border-outline-variant">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI9H8wOk9mFQcf39s01vU8o7xMp4IaeXjYoMZsJwLVUy-yLzsQiD1--VcYOZWhB17jwafA3BT1W4kzBupcv06xHw83qtjvo_W-Nz8mdxZ7JOT9Uqzsy-AJ3fHgPB8bdJVEw8H_HFyNmNXezkpFV6nsZctRytnAke02LwkxYQdz_vI-2P7EWtMPYG0oT_Yp8LSLq2lWxk6mQvuQE8_ABUOPN4_xbP7-hSx1PvXnSMpSgplPQckOScK7" />
            </div>
            <div className="aspect-square bg-surface-container border border-outline-variant flex items-center justify-center cursor-pointer hover:bg-surface-container-high">
              <span className="material-symbols-outlined text-outline" style={{ fontSize: "2rem" }}>play_circle</span>
            </div>
          </div>
        </div>
        {/* Product Info & Actions */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="mb-stack-lg border-b border-outline-variant pb-stack-lg">
            <h1 className="font-headline-xl text-headline-xl text-primary mb-stack-sm">Pro-Stop Ceramic Brake Pads</h1>
            <p className="font-label-technical text-label-technical text-on-surface-variant mb-stack-md">SKU: BRK-CER-992-A</p>
            <p className="font-body-lg text-body-lg text-on-surface">High-performance ceramic compound engineered for minimal dust, low noise, and superior stopping power under extreme thermal loads. Ideal for heavy-duty and performance applications.</p>
          </div>
          {/* Technical Highlights Grid */}
          <div className="grid grid-cols-2 gap-stack-sm mb-stack-lg">
            <div className="bg-surface-container p-stack-md border border-outline-variant">
              <span className="material-symbols-outlined text-outline mb-stack-sm block">thermostat</span>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Thermal Rating</div>
              <div className="font-label-technical text-label-technical text-primary">650°C Max</div>
            </div>
            <div className="bg-surface-container p-stack-md border border-outline-variant">
              <span className="material-symbols-outlined text-outline mb-stack-sm block">speed</span>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Friction Coeff.</div>
              <div className="font-label-technical text-label-technical text-primary">0.42 μ</div>
            </div>
            <div className="bg-surface-container p-stack-md border border-outline-variant">
              <span className="material-symbols-outlined text-outline mb-stack-sm block">noise_control_off</span>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Noise Level</div>
              <div className="font-label-technical text-label-technical text-primary">Ultra-Low</div>
            </div>
            <div className="bg-surface-container p-stack-md border border-outline-variant">
              <span className="material-symbols-outlined text-outline mb-stack-sm block">weight</span>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Weight</div>
              <div className="font-label-technical text-label-technical text-primary">1.8 kg / Set</div>
            </div>
          </div>
          {/* Request Quote Form Area */}
          <div className="bg-surface-container-lowest p-stack-lg border border-outline-variant mt-auto">
            <h2 className="font-headline-md text-headline-md text-primary mb-stack-md">Request Quote</h2>
            <form className="flex flex-col gap-stack-md">
              <div className="grid grid-cols-2 gap-stack-sm">
                <div>
                  <label className="font-label-caps text-label-caps text-on-surface block mb-stack-sm">Quantity (Sets)</label>
                  <input className="w-full bg-surface-container-lowest border border-primary p-stack-sm font-label-technical text-label-technical text-primary focus:border-secondary focus:ring-0 shadow-inner" type="number" defaultValue="1" />
                </div>
                <div>
                  <label className="font-label-caps text-label-caps text-on-surface block mb-stack-sm">Required By</label>
                  <input className="w-full bg-surface-container-lowest border border-primary p-stack-sm font-label-technical text-label-technical text-primary focus:border-secondary focus:ring-0 shadow-inner" type="date" />
                </div>
              </div>
              <a href="https://wa.me/971564997292?text=Hi,%20I'm%20interested%20in%20the%20Pro-Stop%20Ceramic%20Brake%20Pads%20(SKU:%20BRK-CER-992-A).%20Can%20you%20please%20share%20the%20price?" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-stack-md font-label-caps text-label-caps hover:bg-green-600 transition-colors flex items-center justify-center gap-stack-sm mt-stack-sm">
                <span className="material-symbols-outlined">chat</span> Inquire on WhatsApp for Price
              </a>
            </form>
          </div>
        </div>
      </div>
      {/* Specs & Compatibility Tabs */}
      <div className="mt-stack-lg pt-stack-lg border-t-2 border-outline-variant">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Technical Specifications Table */}
          <div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-stack-md flex items-center gap-stack-sm border-b border-primary pb-stack-sm">
              <span className="material-symbols-outlined">handyman</span> Technical Specifications
            </h3>
            <div className="border border-outline-variant">
              <table className="w-full text-left font-label-technical text-label-technical">
                <tbody className="divide-y divide-outline-variant">
                  <tr className="bg-surface-container-lowest">
                    <th className="p-stack-sm text-on-surface-variant font-medium w-1/3 border-r border-outline-variant">Material Compound</th>
                    <td className="p-stack-sm text-primary">Advanced Ceramic Blend (Non-Asbestos)</td>
                  </tr>
                  <tr className="bg-surface-container">
                    <th className="p-stack-sm text-on-surface-variant font-medium w-1/3 border-r border-outline-variant">Dimensions (L x W x T)</th>
                    <td className="p-stack-sm text-primary">155.2mm x 64.5mm x 18.5mm</td>
                  </tr>
                  <tr className="bg-surface-container-lowest">
                    <th className="p-stack-sm text-on-surface-variant font-medium w-1/3 border-r border-outline-variant">Position</th>
                    <td className="p-stack-sm text-primary">Front Axle</td>
                  </tr>
                  <tr className="bg-surface-container">
                    <th className="p-stack-sm text-on-surface-variant font-medium w-1/3 border-r border-outline-variant">Wear Indicator</th>
                    <td className="p-stack-sm text-primary">Included (Acoustic)</td>
                  </tr>
                  <tr className="bg-surface-container-lowest">
                    <th className="p-stack-sm text-on-surface-variant font-medium w-1/3 border-r border-outline-variant">Hardware Included</th>
                    <td className="p-stack-sm text-primary">Shims, Abutment Clips</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Vehicle Compatibility */}
          <div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-stack-md flex items-center gap-stack-sm border-b border-primary pb-stack-sm">
              <span className="material-symbols-outlined">directions_car</span> Vehicle Compatibility
            </h3>
            <div className="border border-outline-variant bg-surface-container-lowest h-64 overflow-y-auto">
              <table className="w-full text-left font-label-technical text-label-technical">
                <thead className="bg-primary text-on-primary font-label-caps text-label-caps sticky top-0">
                  <tr>
                    <th className="p-stack-sm">Make</th>
                    <th className="p-stack-sm">Model</th>
                    <th className="p-stack-sm">Year</th>
                    <th className="p-stack-sm">Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="hover:bg-surface-container cursor-default">
                    <td className="p-stack-sm">Toyota</td>
                    <td className="p-stack-sm">Land Cruiser</td>
                    <td className="p-stack-sm">2018-2023</td>
                    <td className="p-stack-sm">5.7L V8</td>
                  </tr>
                  <tr className="hover:bg-surface-container cursor-default bg-surface-container">
                    <td className="p-stack-sm">Lexus</td>
                    <td className="p-stack-sm">LX570</td>
                    <td className="p-stack-sm">2018-2023</td>
                    <td className="p-stack-sm">5.7L V8</td>
                  </tr>
                  <tr className="hover:bg-surface-container cursor-default">
                    <td className="p-stack-sm">Nissan</td>
                    <td className="p-stack-sm">Patrol</td>
                    <td className="p-stack-sm">2020-2023</td>
                    <td className="p-stack-sm">5.6L V8</td>
                  </tr>
                  <tr className="hover:bg-surface-container cursor-default bg-surface-container">
                    <td className="p-stack-sm">Toyota</td>
                    <td className="p-stack-sm">Sequoia</td>
                    <td className="p-stack-sm">2019-2022</td>
                    <td className="p-stack-sm">5.7L V8</td>
                  </tr>
                  <tr className="hover:bg-surface-container cursor-default">
                    <td className="p-stack-sm">Toyota</td>
                    <td className="p-stack-sm">Tundra</td>
                    <td className="p-stack-sm">2019-2021</td>
                    <td className="p-stack-sm">5.7L V8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Related Parts Section */}
      <div className="mt-stack-lg pt-stack-lg border-t-2 border-outline-variant mb-margin-desktop">
        <h3 className="font-headline-lg text-headline-lg text-primary mb-stack-md">Frequently Bought Together</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Related Product Card 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant flex flex-col group hover:border-secondary transition-colors">
            <div className="aspect-video bg-surface-container border-b border-outline-variant">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcEkCgXDvMDBA6sINajrsPgPl-k4IIsHK1tR1M1UjWici0mFgog2EnRnDlV39v8iT2ar2MLHume3vyRQyOTbr6xUkYVAAiewmX-iyf4Jo27ChCCo_ygQL4gcvEiaCGxx7RqMsO-hH3fnMjCBYLD9ElGO8HoiDwYViKkQ6uglA4ZXoV7jRkdT2rSPq7oQds7QlfnQH7siW2IX092UPsbrQLeUUxN_22UKjj--yTlW8glLKwwhfbjlL5" />
            </div>
            <div className="p-stack-md flex flex-col flex-1">
              <h4 className="font-headline-md text-headline-md text-primary mb-stack-sm group-hover:text-secondary transition-colors">Slotted Brake Rotor</h4>
              <div className="font-label-technical text-label-technical text-on-surface-variant mb-stack-md">SKU: ROT-SLT-455</div>
              <div className="mt-auto grid grid-cols-2 gap-stack-sm font-label-technical text-label-technical border-t border-outline-variant pt-stack-sm">
                <div className="text-on-surface-variant">Pos:</div><div className="text-primary text-right">Front</div>
                <div className="text-on-surface-variant">Dia:</div><div className="text-primary text-right">354mm</div>
              </div>
            </div>
          </div>
          {/* Related Product Card 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant flex flex-col group hover:border-secondary transition-colors">
            <div className="aspect-video bg-surface-container border-b border-outline-variant">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH9JHp_Z8rre-Utel7CI72rNxMfnjyvDajgi3xAJslshpb3Epsi4IxLM4AnUS34tlb-VLAnnvJi_-VxpMQ45g9DWCst_vmAMCvNSWJQtQz3Zh9v8qaAL_niM57Ux27Flg-dAJ1x91jpQsA-PRA-v1ufLtJh9-Nlh-PUl45-fGkyTQxcG7x3LR-LvhmFGQVONzF8Cmv0gXJAdEnU_3-qHDC835PnjHF9o0NfPBoe1j_Tn5hbOIaTOF8" />
            </div>
            <div className="p-stack-md flex flex-col flex-1">
              <h4 className="font-headline-md text-headline-md text-primary mb-stack-sm group-hover:text-secondary transition-colors">Synthetic Brake Fluid DOT 4</h4>
              <div className="font-label-technical text-label-technical text-on-surface-variant mb-stack-md">SKU: FLD-DOT4-1L</div>
              <div className="mt-auto grid grid-cols-2 gap-stack-sm font-label-technical text-label-technical border-t border-outline-variant pt-stack-sm">
                <div className="text-on-surface-variant">Vol:</div><div className="text-primary text-right">1 Liter</div>
                <div className="text-on-surface-variant">Type:</div><div className="text-primary text-right">Synthetic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
