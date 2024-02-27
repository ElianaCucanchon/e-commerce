import React from 'react';
import { Link } from 'react-router-dom'

export const Item = ({ product }) => {
  return (

    <div className="container" style={{ width: '18rem' }} >
      <div className="col-md-6">
        <div className="card" style={{ width: '18rem' }}>
          <img src={`../img/${product.img}`} className="card-img-top" alt={`Imagen de ${product.name}`} />
          <h2 className="card-title my-3">{product.name}</h2>
          <p className="card-text"> Size {product.size}</p>
          <div className="d-flex justify-content-between">
            <span className="fs-2"> Precio ${product.price}</span>
          </div>

          <Link to={`/product/${product.id}`}>
            <button> Ver Producto </button>
          </Link>

        </div>
      </div>
    </div>

  );

}


