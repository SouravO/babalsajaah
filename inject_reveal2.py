import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# 5. Brands Section
content = content.replace(
    '<div className="max-w-container-max mx-auto text-center relative z-10">',
    '<Reveal direction="up" delay={0.2} width="100%">\n        <div className="max-w-container-max mx-auto text-center relative z-10">'
)
content = content.replace(
    '''            <div className="font-headline-md text-primary uppercase tracking-widest border border-outline px-4 py-2 bg-surface-container">Brembo</div>
          </div>
        </div>''',
    '''            <div className="font-headline-md text-primary uppercase tracking-widest border border-outline px-4 py-2 bg-surface-container">Brembo</div>
          </div>
        </div>\n        </Reveal>'''
)

# 6. About Us section
content = content.replace(
    '<div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">',
    '<Reveal direction="up" delay={0.2} width="100%">\n        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">'
)
content = content.replace(
    '''            <img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-iEnIy_p6cGUnNMxfn7aB4QZbiYhsZRz2DNW2prrb24jw1xxqMMyonoYp9LvN1UVg7v2dn6DpHp0PQbVVoVfbgrxHdhRopOa9cPr78IqSoZKPQD7LDcKZi8icvrSrGX4BNoDrkB0Mp0Znx0O-tOy25b5uZPae--pM7FlkHRw1jVNog5b14YiedG4JVF5ZyfQOh4lQCvM3Quu7kDXwc6f3GJMn4PmvYpO0qRY62KjXI71n4b3ZAM1" alt="Warehouse Overview" />
          </div>
        </div>''',
    '''            <img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG-iEnIy_p6cGUnNMxfn7aB4QZbiYhsZRz2DNW2prrb24jw1xxqMMyonoYp9LvN1UVg7v2dn6DpHp0PQbVVoVfbgrxHdhRopOa9cPr78IqSoZKPQD7LDcKZi8icvrSrGX4BNoDrkB0Mp0Znx0O-tOy25b5uZPae--pM7FlkHRw1jVNog5b14YiedG4JVF5ZyfQOh4lQCvM3Quu7kDXwc6f3GJMn4PmvYpO0qRY62KjXI71n4b3ZAM1" alt="Warehouse Overview" />
          </div>
        </div>\n        </Reveal>'''
)

# 7. Featured Products title
content = content.replace(
    '<div className="flex justify-between items-end mb-stack-lg border-b border-primary pb-stack-sm">',
    '<Reveal direction="up" delay={0.1} width="100%">\n          <div className="flex justify-between items-end mb-stack-lg border-b border-primary pb-stack-sm">'
)
content = content.replace(
    '''              View Catalog <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>''',
    '''              View Catalog <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>\n          </Reveal>'''
)

# 8. Featured Products grid
content = content.replace(
    '<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">',
    '<Reveal direction="up" delay={0.3} width="100%">\n          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">'
)
content = content.replace(
    '''                  <Link href="/catalog/1" className="bg-primary text-on-primary px-4 py-2 font-label-caps uppercase hover:bg-tertiary transition-colors flex items-center gap-2">View Details</Link>
                </div>
              </div>
            </div>
          </div>''',
    '''                  <Link href="/catalog/1" className="bg-primary text-on-primary px-4 py-2 font-label-caps uppercase hover:bg-tertiary transition-colors flex items-center gap-2">View Details</Link>
                </div>
              </div>
            </div>
          </div>\n          </Reveal>'''
)

# 9. Why Partner With Us Title & Content
content = content.replace(
    '<div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">',
    '<Reveal direction="up" delay={0.2} width="100%">\n        <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">'
)
content = content.replace(
    '''            <div className="bg-primary text-on-primary p-stack-md border border-outline text-center flex flex-col justify-center items-center">
              <span className="material-symbols-outlined text-[48px] mb-2">handshake</span>
              <div className="font-label-caps uppercase text-sm">B2B Wholesale</div>
            </div>
          </div>
        </div>''',
    '''            <div className="bg-primary text-on-primary p-stack-md border border-outline text-center flex flex-col justify-center items-center">
              <span className="material-symbols-outlined text-[48px] mb-2">handshake</span>
              <div className="font-label-caps uppercase text-sm">B2B Wholesale</div>
            </div>
          </div>
        </div>\n        </Reveal>'''
)

# 10. FAQ section
content = content.replace(
    '<div className="max-w-3xl mx-auto">',
    '<Reveal direction="up" delay={0.2} width="100%">\n        <div className="max-w-3xl mx-auto">'
)
content = content.replace(
    '''              <p className="mt-4 font-body-md text-on-surface-variant border-t border-outline pt-4">Absolutely. We offer fast shipping across all Emirates and provide export services to the wider GCC region and beyond. Shipping rates are calculated based on weight and destination.</p>
            </details>
          </div>
        </div>''',
    '''              <p className="mt-4 font-body-md text-on-surface-variant border-t border-outline pt-4">Absolutely. We offer fast shipping across all Emirates and provide export services to the wider GCC region and beyond. Shipping rates are calculated based on weight and destination.</p>
            </details>
          </div>
        </div>\n        </Reveal>'''
)

with open('app/page.tsx', 'w') as f:
    f.write(content)
