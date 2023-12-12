import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";
import Order from "./Order";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [productCart, setProductCart] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
    const addToCart = (card) =>{
        const newCard = [...productCart, card];
        setProductCart(newCard);
    }

    const clearCart = ()=>{
        setProductCart([]);
    }

    return (
        <div className="container mx-auto flex">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1 gap-10 py-10">
            {
                products.map(product => <Product key={product.id} card={product} addToCart={addToCart}></Product>)
            }
            </div>
            <div className="w-[25rem] h-screen bg-[#FF99004D] fixed right-0">
                <Order productCart={productCart} clearCart={clearCart}></Order>
            </div>
        </div>
    );
};

export default Shop;