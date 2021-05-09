import React, { useState, useEffect } from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'

import data from './data'
import Article from './Article'

const getThemeFromStorage = () => {
  let theme = true
  if (localStorage.getItem('theme')) {
    theme = JSON.parse(localStorage.getItem('theme'))
  }
  return theme
}

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(getThemeFromStorage())

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.className = 'light-theme'
    } else {
      document.documentElement.className = 'dark-theme'
    }
    localStorage.setItem('theme', isDarkMode)
  }, [isDarkMode])

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>dark mode toggler</h1>
          <DarkModeToggle
            className='toggler'
            size={50}
            onChange={setIsDarkMode}
            checked={isDarkMode}
          />
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  )
}

export default App
