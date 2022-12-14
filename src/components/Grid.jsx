import SquareRow from './SquareRow'

const Grid = ({ theme, squares, toggleSquare, playSound }) => {
  return (
    <div className={`grid ${theme}`}>
      <div className={`sound-types ${theme}`}>
        <img alt='drum' src='drum.png' onClick={() => playSound(0)} draggable='false'/>
        <img alt='clapping' src='clapping.png' onClick={() => playSound(1)} draggable='false'/>
        <img alt='drum' src='snare-drum.png' onClick={() => playSound(2)} draggable='false'/>
        <img alt='soundwave' src='wave-sound.png' onClick={() => playSound(3)} draggable='false'/>
        <img alt='kick' src='taekwondo-kick.png' onClick={() => playSound(4)} draggable='false'/>
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