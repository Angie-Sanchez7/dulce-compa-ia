import React from 'react'
import './CandiesProducts.css'
import {Link} from 'react-router-dom'


const CandiesProducts = ({ products , setproductInfo}) => {
    return (
        <div id="engomate" className="container-candiesProducts" style={{ backgroundImage: `url('./assets/img/dulces.jpg')` }}>
            <div className="container-subtitle">
                <h2 className="subtitle2">Engomate</h2>
            </div>
            <div className="container-candies">
                {products?.slice(8, 10).map(product => (
                    
                    <div className={product.className} key={product.id}>
                          <Link to={`/producto/${product.id}`}>
                        <img className="product4" src={product.image} alt="regalo" onClick={() => setproductInfo(product)}  />
                        </Link>
                        <p className="price-girl">Precio: {product.price}</p>

                    </div>
                ))}
            </div>
            <div className="container-candies">
                {products?.slice(10, 12).map(product => (
                    <div className={product.className} key={product.id}>
                         <Link to={`/producto/${product.id}`}>
                        <img className="product5" src={product.image} alt="regalo" onClick={() => setproductInfo(product)}  />
                        </Link>
                        <p className="price-girl">Precio: {product.price}</p>

                    </div>

                ))}
            </div>

        </div>
    );
}

export default CandiesProducts;
