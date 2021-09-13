
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';



const Header = ({ productsCart, setProductsCart }) => {
    //Click to the showCart
    const [cart, setCart] = useState(false);
    //Function to remove the product
    const removeProduct = (id) => {
        const products = productsCart.filter(product => product.id !== id);
        setProductsCart(products);
        localStorage.setItem("cart", JSON.stringify(products))
    }
    //Click to the showCart
    const showCart = cart === true && 'show-cart';
    //Function in which you can manipulate the value of the button
    const handleChange = (e, id) => {
        const products = productsCart.map((product) => {
            return { ...product, quantity: product.id === id ? e.target.value : product.quantity }
        });
        localStorage.setItem('cart', JSON.stringify(products))
        setProductsCart(products);
    };
    //Function to get the total price
    const totalCart = productsCart.reduce((total, item) => total += (item.price * item.quantity), 0);
    //SendOrder in whatsApp
    const sendOrder = (productsCart) => {
        const productos = productsCart.map((product, index) => `Combo ${index + 1}  Cantidad:${product.quantity}%0A`).join('')
        const totalCart = productsCart.reduce((total, item) => total += (item.price * item.quantity), 0);

        const phoneWa = '573142856337'
        const url = `https://api.whatsapp.com/send?phone=${phoneWa}&text=Hola, Bienvenido a Dulce Compañía! 🍬🎉🎈%0ATus productos son:%0A══════════════════%0A${productos}══════════════════%0AIngresa tu dirección: %0A*TOTAL:* $${totalCart}`;

        window.open(url);
       
    }

    return (
        <>
            <header className="header" >

                <i className="fas fa-bars"
                    onClick={(showMenu) => {
                        const menu = document.querySelector("#menu");
                        menu.classList.toggle("show-menu");
                    }}> </i>
                <Link to="/">
                    <img className="logotipo" src="../assets/img/logotipo.jpg" alt="logotipo" />
                </Link>
                <nav className="menu" id="menu">
                    <a className="link" href="#ellos">Ellos</a>
                    <a className="link" href="#ellas">Ellas</a>
                    <a className="link" href="#engomate">Engomate</a>
                    <a className="link" href="#ocasiones">Ocasiones</a>
                </nav>

                <div className="count-cart">
                    <span>{productsCart.length}</span>
                    <i className="fas fa-shopping-cart cart-icon" onClick={() => setCart(!cart)} />
                </div>
            </header>
            <div className={`view-cart ${showCart}`}>
                <h2 className="title-car">Tu carrito de compras</h2>
                <div className="container-products-car">
                    {productsCart?.map(product =>
                        <div className="content-car" key={product.id}>
                            <img className="view-product" src={product.image} alt="regalo" />
                            <span className="car-price">${product.price}</span>
                            <div className="container-icons">
                                <input className="button-add" type="number" value={product.quantity} onChange={(e) => handleChange(e, product.id)} />
                                <i className="far fa-trash-alt" onClick={() => removeProduct(product.id)} />
                            </div>

                        </div>
                    )}
                </div>
                <p className="car-total">   TOTAL:  $ {totalCart} </p>
                <button className="btn-shopping"
                    onClick={() => sendOrder(productsCart)}
                >Finalizar compra</button>
            </div>


        </>

    );
}

export default Header;
