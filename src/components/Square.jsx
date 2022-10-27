const Square = ({ square, toggleSquare }) => {
  return (
    <div className={`square ${square === 1 ? 'active' : square === 2 ? 'inactive selected' : square === 3 ? 'active selected' : 'inactive'}`} onClick={toggleSquare} ></div>
  )
}

export default Square