import { useState, useEffect, useRef } from 'react'

import PlayPauseBtn from './PlayPauseBtn'

const Controls = ({ theme, squares, setSquares, playSound }) => {
  const [bpm, _setBpm] = useState(60)
  const bpmRef = useRef(bpm)

  const setBpm = (n) => {
    bpmRef.current = n;
    _setBpm(n)
  }

  useEffect(() => {
    const bpmSlider = document.getElementById('bpmSlider')

    bpmSlider.oninput = () => {
      setBpm(bpmSlider.value)
    }
  }, [])

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
      <PlayPauseBtn squares={squares} playSound={playSound} bpmRef={bpmRef}/>
      <div className='plus-container' onClick={addColumn}>
        <img src='plus.png' />
      </div>
      <div className='minus-container' onClick={removeColumn}>
        <img src='minus.png' />
      </div>
      <div>
        <input type='range' step='5' min='30' max='360' defaultValue='60' id='bpmSlider' />
        <div id='bpmText' style={{color: 'white', textAlign: 'center'}}>BPM: {bpm}</div>
      </div>
    </div>
  )
}

export default Controls