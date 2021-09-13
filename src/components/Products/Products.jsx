import React from "react";
import "./Products.css";
import {Link} from 'react-router-dom'


//Main map
const Products = ({ products, setproductInfo }) => {



  return (
    <div className="container-productMen" style={{ backgroundImage: `url('./assets/img/background.png')` }}>
      <div className="container-subtitle">
        <h2 className="subtitle" id="ellos">Encuentra detalles para ellos </h2>
      </div>
                      
      <div className="container-product" >
      
        {products?.slice(0, 2).map(product => (
          <div className={product.className} key={product.id}>
            <Link to={`/producto/${product.id}`}>
            <img className="product" src={product.image} alt="regalo" onClick={() => setproductInfo(product)} />
            </Link>
            <p className="price">Precio: {product.price}</p>
          </div>

        ))}

      </div>

      <div className="container-product">
        {products?.slice(2, 4).map(product => (
          <div className={product.className} key={product.id}>
            <Link to={`/producto/${product.id}`}>
            <img className="products" src={product.image} alt="regalo" onClick={() => setproductInfo(product)} />
            </Link>

            <p className="price">Precio: {product.price}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Products;



