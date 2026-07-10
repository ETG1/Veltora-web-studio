'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  fullName: string
  email: string
  service: string
  budget: string
  timeline: string
  vision: string
  file: File | null
  terms: boolean
}

interface FormErrors {
  fullName?: string
  email?: string
  service?: string
  budget?: string
  vision?: string
  file?: string
  terms?: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICES: { label: string; value: string }[] = [
  { label: 'Web App Development',    value: 'web-app'        },
  { label: 'Mobile App Development', value: 'mobile-app'    },
  { label: 'Graphic Design',         value: 'graphic-design' },
]

interface BudgetOption {
  label: string
  value: string
  tier?: string
  package?: string
  description: string
}

const BUDGET_OPTIONS: Record<string, { fieldLabel: string; options: BudgetOption[] }> = {
  'web-app': {
    fieldLabel: 'Budget Range',
    options: [
      { label: 'R5,000 – R10,000',  value: '5k-10k',  description: 'Entry-level web applications' },
      { label: 'R10,000 – R25,000', value: '10k-25k', description: 'Professional web apps' },
      { label: 'R25,000 – R50,000', value: '25k-50k', description: 'Complex, feature-rich applications' },
      { label: 'R50,000+',          value: '50k+',    description: 'Enterprise-scale solutions' },
    ],
  },
  'mobile-app': {
    fieldLabel: 'Package Tier',
    options: [
      { label: 'R4,000 – R10,000',  value: 'mvp',          tier: 'MVP',              description: '2–3 core features, single platform (iOS or Android), basic UI/UX' },
      { label: 'R10,000 – R25,000', value: 'professional',  tier: 'Professional App', description: 'Full-featured iOS + Android, backend integration, polished UX' },
      { label: 'R25,000 – R50,000', value: 'enterprise',    tier: 'Enterprise Scale', description: 'Cross-platform, advanced features, premium design, ongoing support' },
      { label: 'R50,000+',          value: 'custom-mobile', tier: 'Custom',           description: "Let's discuss your specific needs" },
    ],
  },
  'graphic-design': {
    fieldLabel: 'Package',
    options: [
      { label: 'R100+',   value: 'logo',          package: 'Logo Design',                       description: 'Custom logo design with basic revisions' },
      { label: 'R150+',   value: 'poster',        package: 'Poster Design',                     description: 'Custom poster or promotional material' },
      { label: 'R1,000+', value: 'brand',         package: 'Brand Identity System',             description: 'Complete brand system — logo, colours, typography, and guidelines' },
      { label: 'Custom',  value: 'custom-design', package: 'Multiple Items / Complex Project', description: "Let's discuss your project scope" },
    ],
  },
}

const STORAGE_KEY = 'veltora_form_draft'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.fullName || data.fullName.trim().length < 2)
    errors.fullName = 'Full name must be at least 2 characters.'
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Enter a valid email address.'
  if (!data.service) errors.service = 'Please select a service.'
  if (!data.budget) errors.budget = 'Please select a budget range.'
  if (!data.vision || data.vision.trim().length < 10)
    errors.vision = 'Vision brief must be at least 10 characters.'
  if (data.file && data.file.size > 5 * 1024 * 1024)
    errors.file = 'File must be under 5 MB.'
  if (!data.terms)
    errors.terms = 'You must agree to the Terms of Use and Privacy Policy.'
  return errors
}

function calcProgress(data: FormData): number {
  const fields: (keyof FormData)[] = [
    'fullName', 'email', 'service', 'budget', 'vision', 'terms',
  ]
  const filled = fields.filter((f) => {
    const v = data[f]
    return typeof v === 'boolean' ? v : !!String(v).trim()
  }).length
  return Math.round((filled / fields.length) * 100)
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white/30 block mb-2">
      {children}
    </label>
  )
}

function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="mt-1.5 text-[0.65rem] font-mono text-red-400/80"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  )
}

const inputBase =
  'w-full bg-[#111111] border border-[rgba(201,162,48,0.08)] rounded-lg px-4 py-3.5 text-white text-sm font-light placeholder:text-[#555] focus:outline-none focus:border-[rgba(201,162,48,0.40)] focus:bg-[#151515] transition-all duration-200'

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProjectTransmission() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    service: '',
    budget: '',
    timeline: '',
    vision: '',
    file: null,
    terms: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [progress, setProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // ── AutoSave to localStorage ──────────────────────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setForm((prev) => ({ ...prev, ...parsed, file: null, terms: false }))
      }
    } catch {}
  }, [])

  useEffect(() => {
    try {
      const { file, terms, ...saveable } = form
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saveable))
    } catch {}
  }, [form])

  // ── Progress ──────────────────────────────────────────────────────────────
  useEffect(() => {
    setProgress(calcProgress(form))
  }, [form])

  // ── Handlers ──────────────────────────────────────────────────────────────
  const set = useCallback(
    (key: keyof FormData, value: string | boolean | File | null) =>
      setForm((prev) => ({ ...prev, [key]: value })),
    []
  )

  const touch = (key: keyof FormData) =>
    setTouched((prev) => ({ ...prev, [key]: true }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true])
    ) as Partial<Record<keyof FormData, boolean>>
    setTouched(allTouched)

    const errs = validateForm(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus('loading')
    try {
      // Simulate submission — replace with your actual API call
      await new Promise((res) => setTimeout(res, 2000))
      setStatus('success')
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      setStatus('error')
    }
  }

  // ── Live validation on touched fields ────────────────────────────────────
  useEffect(() => {
    const errs = validateForm(form)
    const filtered: FormErrors = {}
    for (const key of Object.keys(touched) as (keyof FormErrors)[]) {
      if (touched[key as keyof FormData] && errs[key]) {
        filtered[key] = errs[key]
      }
    }
    setErrors(filtered)
  }, [form, touched])

  const fileLabel = form.file ? form.file.name : 'Attach file (optional)'
  const isLoading = status === 'loading'

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <section
      id="contact"
      className="bg-transparent py-48 px-8 md:px-24 border-t border-white/5 relative"
    >
      {/* Ambient elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-gold-deep/10 via-transparent to-transparent opacity-30 z-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-deep/5 blur-[160px] rounded-full pointer-events-none opacity-40 z-2" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* ── Left: Heading + contact info ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -left-12 top-0 w-px h-full bg-linear-to-b from-gold-deep via-transparent to-transparent hidden md:block" />
          <span className="section-label block mb-6 uppercase">
            Reach out 
          </span>
          <h2 className="font-display text-[clamp(4rem,9vw,6.5rem)] font-light text-white mb-10 leading-[0.9]">
            Let&apos;s Build <br />
            <span className="italic gold-text drop-shadow-2xl">Your Competitive Advantage.</span>
          </h2>
          <p className="text-white/40 text-xl font-light leading-relaxed mb-16 max-w-md">Tell us about your project we, work with founders and ambitious brands building fast. 
Let's discuss your vision and define the next step.
          </p>
          <div className="space-y-6 border-l border-gold-deep/20 pl-8">
            {/* <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-2">
                Direct Channel
              </p>
              <a
                href="mailto:hello@veltora.studio"
                className="font-display text-3xl text-white hover:text-gold-deep transition-colors duration-500"
              >
                hello@veltora.studio
              </a>
            </div> */}
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-2">
                Availability
              </p>
              <p className="text-white/60 text-sm font-light">
                Currently accepting new projects
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Form ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card hairline-gold-border rounded-2xl p-10 md:p-14 relative overflow-hidden shadow-[0_0_30px_rgba(232,160,32,0.10)] backdrop-blur-xs bg-[rgba(11,11,11,0.20)]"
        >
          <div className="absolute inset-0 bg-linear-to-br from-white/2 to-transparent pointer-events-none" />

          {/* ── Success State ── */}
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col items-center justify-center text-center py-16 gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-4xl text-white font-light">
                  Inquiry <span className="gold-text italic">Received.</span>
                </h3>
                <p className="text-white/50 font-light max-w-xs leading-relaxed">
                  We&apos;ll review your project brief and be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative z-10 space-y-8"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* ── Progress Bar ── */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/20">
                      Form Completion
                    </span>
                    <span className="font-mono text-[0.6rem] text-gold/60">{progress}%</span>
                  </div>
                  <div className="h-px bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-linear-to-r from-gold-deep to-gold rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* ── Row 1: Name + Email ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <FieldLabel>Your Name</FieldLabel>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      className={inputBase}
                      placeholder="Joy Lerato"
                      value={form.fullName}
                      onChange={(e) => set('fullName', e.target.value)}
                      onBlur={() => touch('fullName')}
                      required
                    />
                    <FieldError message={errors.fullName} />
                  </div>
                  <div>
                    <FieldLabel>Email</FieldLabel>
                    <input
                      id="[EMAIL_ADDRESS]"
                      type="email"
                      autoComplete="email"
                      className={inputBase}
                      placeholder="youremail@gmail.com"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      onBlur={() => touch('email')}
                      required
                    />
                    <FieldError message={errors.email} />
                  </div>
                </div>

                {/* ── Row 2: Service + Budget ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <FieldLabel>Service</FieldLabel>
                    <div className="relative">
                      <select
                        id="service"
                        className={`${inputBase} appearance-none cursor-pointer ${
                          form.service ? 'text-gold' : 'text-[#555]'
                        }`}
                        value={form.service}
                        onChange={(e) => {
                          set('service', e.target.value)
                          set('budget', '') // reset when service changes
                        }}
                        onBlur={() => touch('service')}
                        required
                      >
                        <option value="" className="bg-[#111] text-[#555]">
                          Select a service...
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s.value} value={s.value} className="bg-[#111] text-white">
                            {s.label}
                          </option>
                        ))}
                      </select>
                      <ChevronIcon />
                    </div>
                    <FieldError message={errors.service} />
                  </div>
                  {/* ── Budget / Package (dynamic) ── */}
                  {(() => {
                    const serviceData = BUDGET_OPTIONS[form.service]
                    const budgetOptions = serviceData?.options ?? []
                    const fieldLabel   = serviceData?.fieldLabel ?? 'Budget / Package'
                    const isDisabled   = !form.service
                    return (
                      <div>
                        <FieldLabel>
                          {fieldLabel}
                        </FieldLabel>
                        <div className="relative">
                          <select
                            id="budget"
                            disabled={!form.service}
                            className={`${inputBase} appearance-none cursor-pointer ${
                              form.budget ? 'text-gold' : 'text-[#555]'
                            } disabled:opacity-40 disabled:cursor-not-allowed`}
                            value={form.budget}
                            onChange={(e) => set('budget', e.target.value)}
                            onBlur={() => touch('budget')}
                            required
                          >
                            <option value="" className="bg-[#111] text-[#555]">
                              {isDisabled ? 'Select a service first' : 'Select budget / package...'}
                            </option>
                            {budgetOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} className="bg-[#111] text-white">
                                {opt.label}{opt.tier ? ` — ${opt.tier}` : ''}{opt.package ? ` — ${opt.package}` : ''}
                              </option>
                            ))}
                          </select>
                          <ChevronIcon />
                        </div>
                        <FieldError message={errors.budget} />
                      </div>
                    )
                  })()}
                </div>

                {/* ── Budget description reveal ── */}
                <AnimatePresence>
                  {form.budget && form.service && (() => {
                    const opt = BUDGET_OPTIONS[form.service]?.options.find(o => o.value === form.budget)
                    return opt ? (
                      <motion.div
                        key={form.budget}
                        initial={{ opacity: 0, y: -6, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -4, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-start gap-3 px-4 py-3.5 rounded-lg bg-[rgba(201,162,48,0.06)] border border-[rgba(201,162,48,0.14)]">
                          <svg className="w-3.5 h-3.5 text-gold/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="font-light text-[0.78rem] text-white/55 leading-relaxed">
                            {opt.description}
                          </p>
                        </div>
                      </motion.div>
                    ) : null
                  })()}
                </AnimatePresence>

                {/* ── Row 3: Timeline ── */}
                <div>
                  <FieldLabel>Project Timeline (optional)</FieldLabel>
                  <input
                    id="timeline"
                    type="text"
                    className={inputBase}
                    placeholder="e.g., 4–6 weeks"
                    value={form.timeline}
                    onChange={(e) => set('timeline', e.target.value)}
                  />
                </div>

                {/* ── Row 4: Vision Brief ── */}
                <div>
                  <FieldLabel>Vision Brief</FieldLabel>
                  <textarea
                    id="vision"
                    rows={5}
                    className={`${inputBase} resize-y min-h-[120px]`}
                    placeholder="Tell us about your project, goals, and vision..."
                    value={form.vision}
                    onChange={(e) => set('vision', e.target.value)}
                    onBlur={() => touch('vision')}
                    required
                  />
                  <FieldError message={errors.vision} />
                </div>

                {/* ── Row 5: File Upload ── */}
                <div>
                  <FieldLabel>Attach File (optional)</FieldLabel>
                  <input
                    ref={fileInputRef}
                    id="fileUpload"
                    type="file"
                    accept="*/*"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0] ?? null
                      set('file', f)
                      touch('file')
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2.5 bg-gold-deep/90 hover:bg-gold text-dark text-[0.75rem] font-semibold font-mono tracking-widest uppercase px-5 py-3 rounded-lg transition-all duration-200 max-w-full"
                  >
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                      />
                    </svg>
                    <span className="truncate max-w-[220px]">{fileLabel}</span>
                  </button>
                  {form.file && (
                    <button
                      type="button"
                      onClick={() => {
                        set('file', null)
                        if (fileInputRef.current) fileInputRef.current.value = ''
                      }}
                      className="ml-3 text-[0.65rem] font-mono text-white/30 hover:text-red-400 transition-colors"
                    >
                      ✕ Remove
                    </button>
                  )}
                  <FieldError message={errors.file} />
                </div>

                {/* ── Row 6: Terms ── */}
                <div className="flex items-start gap-3">
                  <label className="relative flex cursor-pointer items-center p-0.5 shrink-0 mt-0.5" htmlFor="terms">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      checked={form.terms}
                      onChange={(e) => {
                        set('terms', e.target.checked)
                        touch('terms')
                      }}
                      className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-[rgba(201,162,48,0.3)] transition-all duration-200 checked:border-gold checked:bg-gold"
                    />
                    <span className="absolute text-dark opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </label>
                  <div>
                    <label
                      htmlFor="terms"
                      className="font-light text-[0.8rem] text-white/40 cursor-pointer leading-relaxed"
                    >
                      I have read and agree to the{' '}
                      <Link
                        href="/terms"
                        className="text-gold hover:text-gold-deep transition-colors duration-200 underline underline-offset-2"
                      >
                        Terms of Use
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="/privacy"
                        className="text-gold hover:text-gold-deep transition-colors duration-200 underline underline-offset-2"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </label>
                    <FieldError message={errors.terms} />
                  </div>
                </div>

                {/* ── Row 7: Submit ── */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative py-5 bg-gold-deep text-dark font-bold uppercase tracking-[0.3em] rounded-full text-[0.7rem] hover:bg-gold hover:shadow-[0_0_40px_rgba(232,160,32,0.25)] transition-all duration-300 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group/btn"
                >
                  <span className={`relative z-10 flex items-center justify-center gap-3 ${isLoading ? 'opacity-0' : ''}`}>
                    Send Inquiry
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                  {isLoading && (
                    <span className="absolute inset-0 flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      <span className="tracking-widest text-[0.65rem]">Transmitting…</span>
                    </span>
                  )}
                </button>

                {/* Error banner */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-center text-sm text-red-400/80 font-light"
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

// ── Shared icon ───────────────────────────────────────────────────────────────
function ChevronIcon() {
  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  )
}
