import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Newsletter2() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMsg('')
    setErr(false)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '6798b9ae-9172-4ddd-b239-e872aba7050a',
          email,
          subject: 'Newsletter Subscription',
          from_name: 'SEASmartz Website',
          message: `New subscriber: ${email}`
        }),
      })
      const result = await res.json()
      if (res.ok && result.success) {
        setMsg('Thanks for subscribing! ')
        setEmail('')
      } else {
        setMsg('Try again ❌')
        setErr(true)
      }
    } catch {
      setMsg('Network error ⚠️')
      setErr(true)
    } finally {
      setLoading(false)
      setTimeout(() => setMsg(''), 3000)
    }
  }

  return (
    <section className=" rounded-2xl px-6 flex flex-col font-sans  space-y-4">
      <h2 className="text-2xl font-semibold">Subscribe to our Newsletter</h2>
      <p className='text-foreground/80'>Join our growing community of innovators and get exclusive updates, stories, and ideas that shape the future of technology.</p>
      <form onSubmit={handleSubmit} className="flex w-full gap-2">
        <div className='flex h-10 bg-foreground/90 rounded-xl contain-content '>

        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-foreground/90  text-background placeholder:text-background/70   h-10 rounded-xl pr-3"
        />
        <Button
          type="submit"
          disabled={loading}
          className=" h-10 bg-accent hover:bg-background text-foreground  rounded-xl px-4"
        >
          {loading ? '...' : '→'}
        </Button>
        </div>
      </form>
      {msg && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${err ? 'text-red-300' : 'text-white'} text-sm`}
        >
          {msg}
        </motion.p>
      )}
    </section>
  )
}
