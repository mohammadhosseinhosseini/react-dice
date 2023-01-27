import { useState } from 'react'
import './style.css'
import Dice from './components/Dice'

function App() {
    const [dice1, setDice1] = useState(2)
    const [dice2, setDice2] = useState(5)
    const [rolling, setRolling] = useState(false)

    const roll = () => {
        setDice1(Math.floor(Math.random() * 6))
        setDice2(Math.floor(Math.random() * 6))
        setRolling(true)
        setTimeout(() => {
            setRolling(false)
        }, 1000)
    }

    return (
        <div className='App'>
            <h1>Roll the dice!</h1>
            <div>
                <Dice dice={dice1} rolling={rolling} />
                <Dice dice={dice2} rolling={rolling} />
            </div>
            <button onClick={roll} disabled={rolling}>
                Roll
            </button>
        </div>
    )
}

export default App
