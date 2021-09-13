import React from 'react'
import './GirlsProducts.css'
import {Link} from 'react-router-dom'



const GirlsProducts = ({ products, setproductInfo }) => {
  return (


    <div className="container-productGirl" style={{ backgroundImage: `url('./assets/img/background.jpg')` }} id="ellas">
      <div className="container-subtitle">
        <h2 className="subtitle2">Encuentra detalles para ellas</h2>
      </div>
      <div className="container-product" >
        {products?.slice(4, 6).map(product => (
          <div className={product.className} key={product.id}>
            <Link to={`/producto/${product.id}`}>
            <img className="product2" src={product.image} alt="regalo" onClick={() => setproductInfo(product)} />
            </Link>
            <p className="price-girl">Precio: {product.price}</p>
          </div>

        ))}

      </div>
      <div className="container-product">
        {products?.slice(6, 8).map(product => (
          <div className={product.className} key={product.id}>
             <Link to={`/producto/${product.id}`}>
            <img className="product3" src={product.image} alt="regalo" onClick={() => setproductInfo(product)}/>
            </Link>
            <p className="price-girl">Precio: {product.price}</p>
          </div>
        ))}
      </div>

    </div>




  );
}

export default GirlsProducts;
