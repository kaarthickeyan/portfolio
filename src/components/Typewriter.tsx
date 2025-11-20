import React, { useEffect, useState } from 'react'

type Props = { words: string[]; speed?: number; pause?: number }

export default function Typewriter({ words, speed = 80, pause = 1200 }: Props) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    const i = setInterval(() => setBlink(b => !b), 500)
    return () => clearInterval(i)
  }, [])

  useEffect(() => {
    if (index >= words.length) return
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), pause)
      return () => clearTimeout(timeout)
    }

    const interval = setInterval(() => {
      setSubIndex(s => s + (reverse ? -1 : 1))
    }, speed)

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex(i => (i + 1) % words.length)
    }

    return () => clearInterval(interval)
  }, [subIndex, index, reverse, words, speed, pause])

  return (
    <span>
      {words[index].substring(0, Math.max(0, subIndex))}
      <span className={`typewriter-caret ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  )
}
