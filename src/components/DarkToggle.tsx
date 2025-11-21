import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function DarkToggle(): JSX.Element {
  const [isDark, setIsDark] = useState<boolean>(false)

  // On mount, determine preferred/previous theme and sync state
  useEffect(() => {
    try {
      const fromHtml = document.documentElement.classList.contains('dark')
      const fromStorage = localStorage.getItem('theme')
      const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

      const initial = fromStorage === 'dark' || (!fromStorage && (fromHtml || prefers))
      setIsDark(initial)
    } catch (e) {
      // ignore; keep default
      // eslint-disable-next-line no-console
      console.debug('DarkToggle: unable to read theme preference', e)
    }
  }, [])

  // Apply theme when `isDark` changes
  useEffect(() => {
    const root = document.documentElement
    try {
      if (isDark) {
        root.classList.add('dark')
        root.style.colorScheme = 'dark'
        localStorage.setItem('theme', 'dark')
      } else {
        root.classList.remove('dark')
        root.style.colorScheme = 'light'
        localStorage.setItem('theme', 'light')
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.debug('DarkToggle: failed to apply theme', e)
    }
  }, [isDark])

  return (
    <button
      aria-label="Toggle dark mode"
      aria-pressed={isDark ? 'true' : 'false'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setIsDark(v => { const next = !v; console.debug('DarkToggle clicked ->', next); return next })}
      className="p-2 rounded-full hover:scale-105 transition-transform"
      style={{ background: 'var(--card)', color: 'var(--text)' }}
    >
      {isDark ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
    </button>
  )
}
