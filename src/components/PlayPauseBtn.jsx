import { useState } from 'react'

const PlayPauseBtn = ({ squares, playSound, bpmRef }) => {
  const [id, setId] = useState(null)

  const togglePlaying = () => {
    if (id == null) {
      var col = 0
      var time = 0

      const new_id = window.setInterval(() => {
        time += 0.01

        if (time >= 60 / bpmRef.current) {
          for (var row = 0; row < squares.length; row++) {
            if (squares[row][col] === 1) {
              playSound(row)
            }
          }
  
          col++;
          if (col >= squares[0].length) {
            col = 0
          }
          time = 0
        }
      }, 10)
      setId(new_id)
    }
    else {
      window.clearInterval(id)
      setId(null)
    }
  }

  return (
    <div className='play-pause-container' onClick={togglePlaying}>
      <img src={id != null? 'pause.png' : 'play.png'} />
    </div>
  )
}

export default PlayPauseBtn