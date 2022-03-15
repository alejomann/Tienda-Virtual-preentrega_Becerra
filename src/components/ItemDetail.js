import React from 'react'
import ItemCount from "./ItemCount.js"

const ItemDetail = ({item}) => {
    return (
        <div className='contDetalle'>
            <div className='contFoto'>
                <img src={item.image} alt="" className="card-img-top w-100" />
            </div>
            <div className="contData">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p className='price'>{"$"}{item.price}</p>
                <p className="descripcion">{item.description}</p>
                <ItemCount titulo={item.title} stock={10}/>
            </div>
        </div>
    )
}

export default ItemDetail