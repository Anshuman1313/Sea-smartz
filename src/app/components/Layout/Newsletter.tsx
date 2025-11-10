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
    <section className=" rounded-2xl  flex flex-col font-sans  space-y-2">
      <h2 className="text-[15px]  text-gray-300 font-bold ">Subscribe to our Newsletter</h2>
      <p className='text-foreground text-[15px]  pr-4'>Get the latest ideas and insights driving the future of tech.</p>
      <form onSubmit={handleSubmit} className="flex w-full gap-2 pr-5">
        <div className='flex relative mt-2 justify-start gap-2 contain-content pr-4 '>

        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-foreground focus-visible:ring-0  text-background placeholder:text-background/70  rounded-full  pr-3"
        />
        <Button
          type="submit"
          disabled={loading}
          className=" hover:bg-chart-3 bg-background rounded-full text-foreground   px-4"
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
