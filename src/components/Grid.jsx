import { useEffect } from 'react'
import Square from './Square'
import SquareRow from './SquareRow'

const Grid = ({ theme, squares, setSquares }) => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  useEffect(() => {
    (async () => {
      var col = 0
      while (true) {
        console.log('hello')
        for (var row = 0; row < squares.length; row++) {
          if (squares[row][col] === 1) {
            playSound(row)
          }
        }
        col++
        if (col >= squares[0].length) {
          col = 0
        }
        await sleep(500)
      }
    })()
  }, [])

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
      'snare.wav',
      'sound.wav',
      'kick.wav'
    ]

    const audio = new Audio(sounds[i])
    audio.play()
  }

  return (
    <div className={`grid ${theme}`}>
      <div className={`sound-types ${theme}`}>
        <img src='drum.png' onClick={() => playSound(0)} draggable='false'/>
        <img src='clapping.png' onClick={() => playSound(1)} draggable='false'/>
        <img src='snare-drum.png' onClick={() => playSound(2)} draggable='false'/>
        <img src='wave-sound.png' onClick={() => playSound(3)} draggable='false'/>
        <img src='taekwondo-kick.png' onClick={() => playSound(4)} draggable='false'/>
      </div>
      <div className={`squares ${theme}`}>
        {
          squares.map((square_row, i) => { return <SquareRow key={i} i={i} squares={square_row} toggleSquare={toggleSquare} playSound={playSound} /> })
        }
      </div>
    </div>
  )
}

export default Grid