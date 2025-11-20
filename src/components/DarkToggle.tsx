import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function DarkToggle(): JSX.Element {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const val = localStorage.getItem('theme')
      return val === 'dark' || (!val && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setIsDark(v => !v)}
      className="p-2 rounded-full bg-slate-800/60 text-slate-100 hover:scale-105 transition-transform"
    >
      {isDark ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
    </button>
  )
}
