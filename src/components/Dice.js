import './Dice.css'

const dices = ['one', 'two', 'three', 'four', 'five', 'six']

function Dice(props) {
    return (
        <i
            className={`Die fa-solid fa-dice-${dices[props.dice]} ${
                props.rolling && 'shaking'
            }`}
        ></i>
    )
}

export default Dice
