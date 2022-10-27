const Controls = ({ theme, squares, setSquares }) => {
  const addColumn = () => {
    var newSquares = [...squares]
    newSquares.forEach((row) => {
      row.push(0)
    })
    setSquares(newSquares)
  }

  const removeColumn = () => {
    var newSquares = [...squares]
    if (newSquares[0].length === 1) return
    newSquares.forEach((row) => {
      row.pop()
    })
    setSquares(newSquares)
  }

  return (
    <div className={`controls ${theme}`}>
      <div className='plus-container' onClick={addColumn}>
        <img src='plus.png' />
      </div>
      <div className='minus-container' onClick={removeColumn}>
        <img src='minus.png' />
      </div>
    </div>
  )
}

export default Controls