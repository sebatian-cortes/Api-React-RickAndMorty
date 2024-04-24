import React from 'react'

export const Card = ({nombre, img}) => {
  return (
    <div>
            <img src={img} alt="" />
            <h1>{nombre}</h1>
        

    </div>
  )
}
