import React from 'react'
import './EspecialProducts.css'
import {Link} from 'react-router-dom'



const EspecialProducts = ({ products, setproductInfo }) => {
    return (
        <>
            <div id="ocasiones" className="container-especialProducts" style={{ backgroundImage: `url('./assets/img/background-ocasiones.jpg')` }}>

                <div className="container-subtitle">
                    <h2 className="subtitle2">Ocasiones   Especiales</h2>
                </div>
                <div className="container-especial">
                    {products?.slice(12, 14).map(product => (
                        <div className={product.className} key={product.id}>
                              <Link to={`/producto/${product.id}`}>
                            <img className="product6" src={product.image} alt="regalo" onClick={() => setproductInfo(product)} />
                            </Link>
                            <p className="price-girl">Precio: {product.price}</p>

                        </div>
                    ))}
                </div>
                <div className="container-especial">
                    {products?.slice(14, 16).map(product => (
                        <div className={product.className} key={product.id}>
                             <Link to={`/producto/${product.id}`}>
                            <img className="product7" src={product.image} alt="regalo" onClick={() => setproductInfo(product)} />
                            </Link>
                            <p className="price-girl">Precio: {product.price} </p>

                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}

export default EspecialProducts;