import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState(null)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (['light', 'dark'].includes(theme)) {
      setTheme(localTheme)
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
    else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }, [])

  return (
    <div className={`main ${theme}`}>
      <Header theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
