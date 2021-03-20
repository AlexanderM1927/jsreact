import react, { useState } from 'react'
import PropTypes from 'prop-types'

const Contador = ({propNum}) => {
    const [cuenta, setCuenta] = useState(propNum);

    return (
        <>
        <p>HOLA SOY CONTADOR Fredy</p>
        <h1>HOLA SOY FREDY</h1>
        <h2>{cuenta}</h2>
        <button onClick={( () => setCuenta(cuenta + 1))} > ¡Más!</button>
        <button onClick={( () => setCuenta(cuenta - 1))} > ¡Menos!</button>
        <br/>
        <br/>
        <button onClick={( () => setCuenta(propNum))} > ¡Reset!</button>
       
        </>
    )
}

Contador.propTypes = {
    propNum: PropTypes.number.isRequired
}

export default Contador;