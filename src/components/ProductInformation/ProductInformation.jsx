import React from 'react'
import './ProductInformation.css'



                              //Props
function ProductInformation({ productInfo, productsCart, setProductsCart }) {

    const addToCart = (product) => {
        //Logic the idea it is to find if exist product,
        //if product exists, they add 1 to the quantity
        const existProduct = productsCart.find(item => item.id === product.id);
        if (existProduct !== undefined) {
            const products = productsCart.map(item => ({
                ...item, quantity: item.id === product.id ? item.quantity
                    + 1 : Number(item.quantity)
            }));
            setProductsCart(products)
            localStorage.setItem("cart", JSON.stringify(products));

        } else {
            //If products exits, create a replica of the product and just add 1 to the quantity
            const products = [...productsCart, { ...product, quantity: 1 }];
            setProductsCart(products);
            localStorage.setItem("cart", JSON.stringify(products));

        }
    }

    return (
        //Create a map of my array 
        <div className="container-product-information" >
            <div className="containeeer" key={productInfo.id}>
                <img className="unique-product" src={productInfo.image} alt="regalo" />
                <p className="info">{productInfo.info}</p>
                <p className="price-info">Precio: {productInfo.price}</p>
                <img className="car-image" src={productInfo.car} alt="car" onClick={() => addToCart(productInfo)} />
            </div>
        </div>
    )
}

export default ProductInformation
