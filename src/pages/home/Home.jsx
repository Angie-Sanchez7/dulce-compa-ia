import React from 'react'
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products.jsx";
import GirlsProducts from "../../components/GirlsProducts/GirlsProducts.jsx";
import CandiesProducts from "../../components/CandiesProducts/CandiesProducts.jsx";
import EspecialProducts from "../../components/EspecialProducts/EspecialProducts.jsx";
import { products } from '../../api/data'




const Home = ({ setproductInfo }) => {


    return (
        <>
            <Banner />
            <Products setproductInfo={setproductInfo} products={products} />
            <GirlsProducts setproductInfo={setproductInfo} products={products} />
            <CandiesProducts setproductInfo={setproductInfo} products={products} />
            <EspecialProducts setproductInfo={setproductInfo} products={products} />
        </>
    )
}

export default Home;
