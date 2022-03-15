import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock,titulo}) => {

    //let [getter,setter] = useState(valor-inicial)
    // let [estado,setEstado] = useState(inicial)
    let [estado,setEstado] = useState(0)

    //sumo producto
    const clickMenos = () => {
        if(estado>0){
            setEstado(estado-1)
        }
    }

    //resto producto
    const clickMas = () => {
        if(estado<stock){
            setEstado(estado+1)
        }
    }

    //agrego al carrito
    const onAdd = () => {
        console.log("Agregar al carrito: " + estado + " " + titulo);
    }

    return (
        <div className='contadorProductos'>
            <div className='contSumaResta'>
                <button className='btnResta' onClick={clickMenos}>-</button>
                <input className='numero' value={estado} disabled></input>
                <button className='btnSuma' onClick={clickMas}>+</button>
            </div>
            <button className='btn btn-outline-primary mt-2 w-100 btnAgregar' onClick={onAdd}>Agregar</button>
        </div>
    )

}

export default ItemCount