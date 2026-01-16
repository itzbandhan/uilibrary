import { useState } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Input,
  Textarea,
  Badge,
  Modal,
  Logo,
  CustomCursor,
  ScrollToTopButton,
  WhatsAppBubble,
  Navbar,
  Footer,
  CTA,
  ScrollReveal,
  Toaster,
  toast,
  type NavbarProps
} from 'uielemniv'
import { Link } from 'react-router-dom'

// --- Utility Components for Demo ---

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="bg-[#1e293b] rounded-lg overflow-hidden text-sm relative group my-4 shadow-lg border border-slate-700/50">
      <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-white/5">
        <span className="text-slate-400 text-xs font-mono font-medium">TSX / USAGE</span>
        <div className="flex gap-1.5 opacity-60">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="p-4 overflow-x-auto bg-[#1e293b]">
        <pre className="font-mono text-blue-100 text-[13px] leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 text-white hover:bg-white/20 h-auto py-1 px-2 text-xs"
        onClick={() => {
          navigator.clipboard.writeText(code)
          toast.success('Code copied to clipboard')
        }}
      >
        Copy
      </Button>
    </div>
  )
}

function SectionHeader({ title, description }: { title: string, description?: string }) {
  return (
    <div className="mb-8 border-b border-ink-100 pb-4">
      <h2 className="text-3xl font-black text-navy-900 tracking-tight mb-2 flex items-center gap-3">
        <span className="w-2 h-8 bg-yellow-400 rounded-full" />
        {title}
      </h2>
      {description && <p className="text-ink-500 text-lg ml-5">{description}</p>}
    </div>
  )
}

function ComponentDoc({ title, description, children, code, notes }: { title: string, description?: string, children: React.ReactNode, code: string, notes?: string }) {
  return (
    <div className="mb-16 scroll-mt-24" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="text-xl font-bold text-navy-800 flex items-center gap-2">
          {title}
          <Badge variant="default" className="text-xs py-0 h-5">Component</Badge>
        </h3>
      </div>

      {description && <p className="text-ink-600 mb-6 max-w-3xl">{description}</p>}

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Preview */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-ink-400 ml-1">Preview</div>
          <Card className="h-full bg-white shadow-sm border border-ink-200 overflow-hidden">
            <div className="bg-dots-pattern min-h-[300px] p-8 flex flex-col items-center justify-center gap-6 relative">
              {children}
            </div>
          </Card>
        </div>

        {/* Code */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-ink-400 ml-1">Code</div>
          <CodeBlock code={code} />
          {notes && (
            <div className="bg-blue-50 border border-blue-100 text-blue-800 p-3 rounded text-sm flex gap-2">
              <span className="text-blue-500 shrink-0">ℹ️</span>
              {notes}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// --- Main App ---

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  // Navbar Logic
  const navLinks = [
    { name: 'Components', path: '#components' },
    { name: 'Layout', path: '#layout' },
    { name: 'Overlays', path: '#overlays' },
    { name: 'Utilities', path: '#utilities' }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-ink-900 selection:bg-yellow-400/30">
      <CustomCursor />
      <ScrollToTopButton />
      <WhatsAppBubble />
      <Toaster />

      {/* Navbar Demo (Live) */}
      <Navbar
        logo={<Logo type="devx" className="h-8 md:h-10" />}
        links={navLinks}
        actions={
          <div className="flex gap-2">
            <a href="https://github.com/itzbandhan/DevX" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="sm">GitHub</Button>
            </a>
            <Button variant="primary" size="sm" onClick={() => toast.success('Demo action triggered')}>
              Get Started
            </Button>
          </div>
        }
      />

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="success" className="mb-6 animate-pulse">Updated to v0.0.3</Badge>
          <h1 className="text-5xl md:text-7xl font-black text-navy-900 tracking-tight mb-6">
            The Complete <span className="text-yellow-500">uielemniv</span> Guide
          </h1>
          <ScrollReveal
            text="Every component, every state, every prop. Explore the building blocks of your next premium application below."
            className="text-xl md:text-2xl text-ink-500 justify-center mb-10"
          />
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg" onClick={() => document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Components
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('https://www.npmjs.com/package/uielemniv', '_blank')}>
              NPM Package
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-32 space-y-24">

        {/* --- SECTION: CORE COMPONENTS --- */}
        <section id="components">
          <SectionHeader title="Core Components" description="Essential building blocks for UI construction." />

          <ComponentDoc
            title="Button"
            description="Versatile button component with multiple variants, sizes, and loading states. Supports Framer Motion tap animations."
            code={`import { Button } from 'uielemniv'

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>`}
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
              <div className="flex flex-wrap gap-4 items-center justify-center border-t border-dashed border-ink-200 pt-6">
                <Button size="sm" variant="primary">Small</Button>
                <Button size="md" variant="primary">Medium</Button>
                <Button size="lg" variant="primary">Large</Button>
                <Button variant="primary" loading>Loading...</Button>
              </div>
            </div>
          </ComponentDoc>

          <ComponentDoc
            title="Badge"
            description="Status indicators for labeling items with defined semantic colors."
            code={`import { Badge } from 'uielemniv'

<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`}
          >
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </ComponentDoc>

          <ComponentDoc
            title="Inputs & Textareas"
            description="Form fields with built-in label support and error state handling."
            code={`import { Input, Textarea } from 'uielemniv'

<Input 
  label="Username" 
  placeholder="jdoe" 
/>

<Input 
  label="Email" 
  type="email" 
  error="Invalid email address" 
/>

<Textarea 
  label="Message" 
  rows={4} 
  placeholder="Type your message..." 
/>`}
          >
            <div className="w-full max-w-sm space-y-4">
              <Input label="Username" placeholder="jdoe" />
              <Input label="Email" type="email" defaultValue="invalid@" error="Invalid email address" />
              <Textarea label="Message" rows={3} placeholder="Type your message..." />
            </div>
          </ComponentDoc>

          <ComponentDoc
            title="Card"
            description="Container component for grouping related content."
            code={`import { Card, CardHeader, CardContent } from 'uielemniv'

<Card>
  <CardHeader>
    <h3 className="font-bold">Card Title</h3>
  </CardHeader>
  <CardContent>
    <p>This is the card content body.</p>
  </CardContent>
</Card>`}
          >
            <Card className="w-full max-w-sm">
              <CardHeader>
                <h3 className="font-bold text-lg">Project Alpha</h3>
                <p className="text-sm text-ink-400">Last updated 2 days ago</p>
              </CardHeader>
              <CardContent>
                <p className="text-ink-600">A high-priority initiative to redesign the core infrastructure components.</p>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          </ComponentDoc>

          <ComponentDoc
            title="Logo"
            description="Pre-configured brand assets."
            code={`import { Logo } from 'uielemniv'

<Logo type="devx" className="h-12" />
<Logo type="devx" className="h-12 brightness-0" /> // Monochrome`}
          >
            <div className="flex gap-8 items-center">
              <Logo type="devx" className="h-12" />
              <Logo type="devx" className="h-8 opacity-50" />
            </div>
          </ComponentDoc>

        </section>


        {/* --- SECTION: LAYOUT COMPONENTS --- */}
        <section id="layout">
          <SectionHeader title="Layout & Structure" description="Major building blocks for page composition." />

          <ComponentDoc
            title="Navbar"
            description="Responsive top navigation bar with mobile menu support. Handles sticky positioning and backdrop blur on scroll automatically."
            code={`import { Navbar } from 'uielemniv'

<Navbar 
  logo={<Logo type="devx" />}
  links={[
    { name: 'Home', path: '#', active: true },
    { name: 'About', path: '#' }
  ]}
  actions={<Button>Login</Button>}
/>`}
            notes="Resize your browser to see the mobile menu toggle appear."
          >
            <div className="w-full h-48 bg-slate-100 rounded border border-slate-200 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 right-0 bg-yellow-100 text-yellow-800 text-xs text-center py-1">Simulated View</div>
              {/* We use absolute to simulate fixed behavior within the container */}
              <Navbar
                className="absolute top-6 left-0 right-0"
                logo={<Logo type="devx" className="h-6" />}
                links={[{ name: 'Home', path: '#', active: true }, { name: 'Docs', path: '#' }]}
                actions={<Button size="sm">Sign In</Button>}
              />
            </div>
          </ComponentDoc>

          <ComponentDoc
            title="Footer"
            description="Multi-column footer layout with branding and social links."
            code={`import { Footer } from 'uielemniv'

<Footer 
  brand={{
    logo: <Logo type="devx" className="h-6 brightness-0 invert" />,
    tagline: "Building the future."
  }}
  columns={[
    { title: "Company", links: [{ name: "About", path: "#" }] }
  ]}
  copyright="Acme Inc"
/>`}
          >
            <div className="w-full bg-slate-100 rounded border border-slate-200 overflow-hidden transform scale-90 origin-center">
              <Footer
                className="py-8"
                brand={{
                  logo: <Logo type="devx" className="h-6 brightness-0 invert" />,
                  tagline: "Premium UI Components."
                }}
                columns={[
                  { title: "Product", links: [{ name: "Features", path: "#" }, { name: "Pricing", path: "#" }] },
                  { title: "Legal", links: [{ name: "Privacy", path: "#" }, { name: "Terms", path: "#" }] }
                ]}
                copyright="DevX"
                social={<span className="text-slate-500 text-sm">Social Icons Here</span>}
              />
            </div>
          </ComponentDoc>

          <ComponentDoc
            title="CTA (Call to Action)"
            description="High-impact bottom section to drive conversion."
            code={`import { CTA } from 'uielemniv'

<CTA 
  title="Ready to Launch?"
  description="Get started today."
  actions={
    <Button variant="primary">Sign Up</Button>
  }
/>`}
          >
            <div className="w-full transform scale-95 origin-center">
              <CTA
                title="Start your journey"
                description="Join thousands of developers building fast."
                actions={
                  <div className="flex gap-4">
                    <Button variant="primary">Get Started</Button>
                    <Button variant="secondary">Learn More</Button>
                  </div>
                }
              />
            </div>
          </ComponentDoc>
        </section>

        {/* --- SECTION: OVERLAYS & FEEDBACK --- */}
        <section id="overlays">
          <SectionHeader title="Overlays & Feedback" description="Managing user attention and system status." />

          <ComponentDoc
            title="Modal"
            description="A fully accessible dialog component built on Radix UI primitives. Handles focus trapping, screen reading, and escape key behaviors."
            code={`import { Modal } from 'uielemniv'

const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal 
  open={open} 
  onOpenChange={setOpen}
  title="Delete Item?"
  description="This action cannot be undone."
>
  <div className="flex justify-end gap-2 mt-4">
    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
  </div>
</Modal>`}
          >
            <Button onClick={() => setModalOpen(true)}>Open Demo Modal</Button>
            <Modal
              open={modalOpen}
              onOpenChange={setModalOpen}
              title="Confirmation"
              description="This is a demonstration of the Modal component. It overlays content and disables background interaction."
            >
              <div className="py-4 text-ink-600">
                <p>You can put any content here, including forms.</p>
                <Input className="mt-4" label="Type confirm" placeholder="confirm" />
              </div>
              <div className="flex justify-end gap-3 border-t border-ink-100 pt-4">
                <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setModalOpen(false)}>Understand</Button>
              </div>
            </Modal>
          </ComponentDoc>

          <ComponentDoc
            title="Toast"
            description="Stacked notifications suitable for success, error, and info messages. Wrapper around Sonner."
            code={`import { Toaster, toast } from 'uielemniv'

// Place <Toaster /> at app root
<Toaster />

// Call anywhere
toast.success('Saved successfully')
toast.error('Failed to save')
toast.message('New notification')`}
          >
            <div className="flex gap-3 flex-wrap justify-center">
              <Button variant="primary" onClick={() => toast.success('Operation successful!')}>Success</Button>
              <Button variant="secondary" onClick={() => toast.error('Something went wrong.')}>Error</Button>
              <Button variant="outline" onClick={() => toast.info('Here is some information.')}>Info</Button>
              <Button variant="ghost" onClick={() => toast('Simple message')}>Default</Button>
            </div>
          </ComponentDoc>
        </section>

        {/* --- SECTION: UTILITIES --- */}
        <section id="utilities">
          <SectionHeader title="Utilities & Effects" description="Subtle enhancements for polish and navigational aid." />

          <ComponentDoc
            title="ScrollReveal"
            description="Text effect that highlights words as they enter the viewport."
            code={`import { ScrollReveal } from 'uielemniv'

<ScrollReveal 
  text="This text will light up as you scroll."
  className="text-2xl font-bold"
/>`}
          >
            <div className="h-32 overflow-y-auto border border-ink-200 p-4 bg-slate-900 rounded text-center flex items-center justify-center">
              <p className="text-slate-500 text-sm">
                (Scroll the main page up to see the effect in the Hero section)
              </p>
            </div>
          </ComponentDoc>

          <ComponentDoc
            title="CustomCursor"
            description="Replaces the default cursor with a GSAP-animated follower. Auto-hides on touch devices."
            code={`import { CustomCursor } from 'uielemniv'

// Add once to your main App component
<CustomCursor />`}
          >
            <div className="p-4 bg-ink-50 rounded text-center text-sm text-ink-500">
              Active on this page. Move mouse to see the ring follower.
            </div>
          </ComponentDoc>

          <ComponentDoc
            title="ScrollToTopButton"
            description="Floating button that appears when scrolling down, allowing quick return to header."
            code={`import { ScrollToTopButton } from 'uielemniv'

// Add to your main layout
<ScrollToTopButton />`}
          >
            <div className="p-4 bg-ink-50 rounded text-center text-sm text-ink-500">
              Scroll down this page to see it appear in bottom right.
            </div>
          </ComponentDoc>

          <ComponentDoc
            title="WhatsAppBubble"
            description="Floating contact button for WhatsApp integration."
            code={`import { WhatsAppBubble } from 'uielemniv'

<WhatsAppBubble phoneNumber="1234567890" />`}
          >
            <div className="p-4 bg-ink-50 rounded text-center text-sm text-ink-500">
              Active on this page (bottom right).
            </div>
          </ComponentDoc>
        </section>

        {/* --- SECTION: HELPERS --- */}
        <section>
          <SectionHeader title="Helper Functions" />
          <div className="bg-slate-900 text-slate-300 p-8 rounded-lg font-mono text-sm leading-relaxed">
            <h3 className="text-yellow-400 font-bold mb-4 text-lg">utils.ts</h3>
            <p className="mb-4 text-slate-400">// Utility functions exported by the library</p>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <strong className="text-white block mb-2">cn(...classes)</strong>
                <p className="mb-2">Merges Tailwind classes using clsx and tailwind-merge.</p>
                <code className="bg-black/30 p-2 rounded block">cn('px-2 py-1', isActive && 'bg-blue-500')</code>
              </div>

              <div>
                <strong className="text-white block mb-2">formatDate(date)</strong>
                <p className="mb-2">Formats dates consistently.</p>
                <code className="bg-black/30 p-2 rounded block">formatDate(new Date())</code>
              </div>

              <div>
                <strong className="text-white block mb-2">truncate(str, length)</strong>
                <p className="mb-2">Truncates text with ellipsis.</p>
                <code className="bg-black/30 p-2 rounded block">truncate('Long description...', 10)</code>
              </div>

              <div>
                <strong className="text-white block mb-2">slugify(str)</strong>
                <p className="mb-2">Converts string to URL-friendly slug.</p>
                <code className="bg-black/30 p-2 rounded block">slugify('Hello World') // hello-world</code>
              </div>
            </div>
          </div>
        </section>

      </main>

      <CTA
        title="Ready for the next level?"
        description="Download uielemniv and start building premium interfaces today."
        actions={
          <Button variant="primary" size="lg" onClick={() => toast.success('Package is available on NPM')}>
            Install Now
          </Button>
        }
      />

      <Footer
        brand={{
          logo: <Logo type="devx" className="h-8 brightness-0 invert" />,
          tagline: "Building the future of digital experiences."
        }}
        columns={[
          { title: "Library", links: [{ name: "Components", path: "#components" }, { name: "GitHub", path: "https://github.com/itzbandhan/DevX" }] },
          { title: "Legal", links: [{ name: "MIT License", path: "#" }, { name: "Privacy", path: "#" }] }
        ]}
        copyright="uielemniv contributors"
        social={
          <div className="flex gap-4 opacity-50">
            <span>Twitter</span>
            <span>GitHub</span>
          </div>
        }
      />
    </div>
  )
}

export default App
