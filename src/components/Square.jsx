const Square = ({ square, toggleSquare}) => {
  return (
    <div className={`square ${square === 1 ? 'active' : 'inactive'}`} onClick={toggleSquare} ></div>
  )
}

export default Square