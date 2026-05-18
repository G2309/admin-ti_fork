import { useState } from 'react'
import { motion } from 'motion/react'
import { ItemShowcase } from '@/components/ItemShowcase'

const snippets = {
  fade: `import { motion } from 'motion/react'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4 }}
/>`,
  slide: `<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
/>`,
  scale: `<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ type: 'spring', stiffness: 300 }}
/>`,
  stagger: `<motion.ul transition={{ staggerChildren: 0.08 }}>
  {items.map(i => (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    />
  ))}
</motion.ul>`,
  hover: `<motion.div
  whileHover={{ y: -2, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}
  transition={{ type: 'spring', stiffness: 400 }}
/>`,
  pulse: `<motion.div
  animate={{ opacity: [0.4, 1, 0.4] }}
  transition={{ duration: 1.6, repeat: Infinity }}
/>`,
  shimmer: `<div className="relative overflow-hidden bg-muted">
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    animate={{ x: ['-100%', '100%'] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  />
</div>`,
}

function FadeDemo({ tick }: { tick: number }) {
  return (
    <motion.div
      key={tick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-32 h-20 rounded-md bg-foreground text-background flex items-center justify-center text-xs"
    >
      Fade
    </motion.div>
  )
}

function SlideDemo({ tick }: { tick: number }) {
  return (
    <motion.div
      key={tick}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="w-32 h-20 rounded-md bg-foreground text-background flex items-center justify-center text-xs"
    >
      Slide
    </motion.div>
  )
}

function ScaleDemo({ tick }: { tick: number }) {
  return (
    <motion.div
      key={tick}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="w-32 h-20 rounded-md bg-foreground text-background flex items-center justify-center text-xs"
    >
      Pop
    </motion.div>
  )
}

function StaggerDemo({ tick }: { tick: number }) {
  return (
    <motion.ul
      key={tick}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className="flex gap-2"
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.li
          key={i}
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          className="w-10 h-10 rounded-md bg-foreground text-background flex items-center justify-center text-xs"
        >
          {i}
        </motion.li>
      ))}
    </motion.ul>
  )
}

function HoverDemo() {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
      className="w-40 h-20 rounded-md border border-border bg-background flex items-center justify-center text-xs cursor-pointer"
    >
      Hover me
    </motion.div>
  )
}

function PulseDemo() {
  return (
    <div className="flex items-center gap-2">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="w-2.5 h-2.5 rounded-full bg-red-500"
      />
      <span className="text-xs font-mono">REC</span>
    </div>
  )
}

function ShimmerDemo() {
  return (
    <div className="relative w-48 h-6 rounded-md bg-muted overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, transparent, hsl(var(--foreground)/0.15), transparent)',
        }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

/** Scene de animaciones con motion. Click en "Replay" reinicia las animaciones de entrada. */
export function AnimationsScene() {
  const [tick, setTick] = useState(0)

  return (
    <section id="animations" className="space-y-8">
      <header className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl font-semibold">Animations</h2>
          <p className="text-sm text-muted-foreground">
            Patrones en `visual-animations`. Stack: motion (framer-motion v12).
          </p>
        </div>
        <button
          type="button"
          onClick={() => setTick((t) => t + 1)}
          className="px-3 py-1.5 rounded-md text-xs border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Replay entrance animations
        </button>
      </header>

      <div className="space-y-4">
        <ItemShowcase name="Fade in" description="Opacity 0 a 1. Entrance basico." snippet={snippets.fade}>
          <FadeDemo tick={tick} />
        </ItemShowcase>
        <ItemShowcase name="Slide up" description="Translate Y + opacity." snippet={snippets.slide}>
          <SlideDemo tick={tick} />
        </ItemShowcase>
        <ItemShowcase name="Scale pop" description="Scale con spring para CTAs y modales." snippet={snippets.scale}>
          <ScaleDemo tick={tick} />
        </ItemShowcase>
        <ItemShowcase name="Stagger list" description="Entrada secuencial de items." snippet={snippets.stagger}>
          <StaggerDemo tick={tick} />
        </ItemShowcase>
        <ItemShowcase name="Hover lift" description="Eleva la card al hover (mueve el cursor sobre el preview)." snippet={snippets.hover}>
          <HoverDemo />
        </ItemShowcase>
        <ItemShowcase name="Pulse" description="Loop de opacity. Indicadores live." snippet={snippets.pulse}>
          <PulseDemo />
        </ItemShowcase>
        <ItemShowcase name="Shimmer" description="Gradient en movimiento. Skeleton loaders." snippet={snippets.shimmer}>
          <ShimmerDemo />
        </ItemShowcase>
      </div>
    </section>
  )
}
