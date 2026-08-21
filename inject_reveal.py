import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport { Reveal } from "./components/Reveal";')

# 1. Hero text
content = content.replace(
    '<div className="flex flex-col gap-stack-lg">',
    '<Reveal direction="left" delay={0.2}>\n          <div className="flex flex-col gap-stack-lg">'
)
content = content.replace(
    '''              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">local_shipping</span>
                <span className="font-label-technical text-label-technical">Fast Delivery</span>
              </div>
            </div>
          </div>''',
    '''              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">local_shipping</span>
                <span className="font-label-technical text-label-technical">Fast Delivery</span>
              </div>
            </div>
          </div>\n          </Reveal>'''
)

# 2. Hero search widget
content = content.replace(
    '<div className="bg-surface text-on-surface p-gutter border-2 border-primary shadow-[8px_8px_0px_0px_#bb0016] mt-8 lg:mt-0 relative">',
    '<Reveal direction="right" delay={0.4}>\n          <div className="bg-surface text-on-surface p-gutter border-2 border-primary shadow-[8px_8px_0px_0px_#bb0016] mt-8 lg:mt-0 relative">'
)
content = content.replace(
    '''              </button>
            </form>
          </div>''',
    '''              </button>
            </form>
          </div>\n          </Reveal>'''
)

# 3. Categories title
content = content.replace(
    '<div className="text-center mb-stack-lg">',
    '<Reveal direction="up" delay={0.1} width="100%">\n          <div className="text-center mb-stack-lg">'
)
content = content.replace(
    '''            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>''',
    '''            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>\n          </Reveal>'''
)

# 4. Categories grid
content = content.replace(
    '<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">',
    '<Reveal direction="up" delay={0.3} width="100%">\n          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">'
)
content = content.replace(
    '''              <span className="font-label-caps uppercase tracking-widest text-primary">Braking</span>
            </Link>
          </div>''',
    '''              <span className="font-label-caps uppercase tracking-widest text-primary">Braking</span>
            </Link>
          </div>\n          </Reveal>'''
)

with open('app/page.tsx', 'w') as f:
    f.write(content)
