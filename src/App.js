import { useEffect, useState } from 'react';
import Controls from './components/Controls';
import Grid from './components/Grid';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState(null)
  const [squares, setSquares] = useState([...new Array(5)].map(() => new Array(4).fill(0)))

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  const toggleSquare = (row, col) => {
    var newSquares = [...squares]

    if (newSquares[row][col] === 0) {
      playSound(row)
    }

    newSquares[row][col] = newSquares[row][col] === 0 ? 1 : 0
    setSquares(newSquares)
  }

  const playSound = (i) => {
    const sounds = [
      'snare.wav',
      'clap.wav',
      'snare2.wav',
      'sound.wav',
      'kick.wav'
    ]

    const audio = new Audio(sounds[i])
    audio.play()
  }

  const manageTheme = async () => {
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
  }

  useEffect(() => {
    manageTheme()
  }, [])

  return (
    <div className={`main ${theme}`}>
      <Header theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} />
      <Controls theme={theme} squares={squares} setSquares={setSquares} playSound={playSound} />
      <Grid theme={theme} squares={squares} toggleSquare={toggleSquare} playSound={playSound} />
    </div>
  );
}

export default App;
