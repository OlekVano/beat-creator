import Square from './Square'

const SquareRow = ({ squares, i, toggleSquare, playSound }) => {
  return (
    <div className='square-row'>
      {
        squares.map((square, j) => {return <Square square={square} toggleSquare={() => toggleSquare(i, j)} key={j} playSound={playSound} />})
      }
    </div>
  )
}

export default SquareRow