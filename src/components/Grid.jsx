import Square from "./Square"
import SquareRow from "./SquareRow"

const Grid = ({ theme, squares, setSquares }) => {
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

  return (
    <div className={`grid ${theme}`}>
      <div className={`sound-types ${theme}`}>
        <img src='drum.png' />
        <img src='clapping.png' />
        <img src='snare-drum.png' />
        <img src='wave-sound.png' />
        <img src='taekwondo-kick.png' />
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