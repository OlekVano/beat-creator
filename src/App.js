import { useEffect, useState } from 'react';
import Controls from './components/Controls';
import Grid from './components/Grid';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState(null)
  const [squares, setSquares] = useState([...new Array(5)].map(() => new Array(4).fill(0)))

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (['light', 'dark'].includes(localTheme)) {
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
      <Controls theme={theme} squares={squares} setSquares={setSquares} />
      <Grid theme={theme} squares={squares} setSquares={setSquares} />
    </div>
  );
}

export default App;
