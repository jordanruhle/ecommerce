import React from 'react'

const ProductFilterLinks = ({type, name, text, classes, selected}) => {
  return (
    <div className={`${selected(name)}`}>
     <a href={`/products/${type}/${name}`} className={`${classes}`}>{text}</a>
    </div>
  )
}

export default ProductFilterLinks