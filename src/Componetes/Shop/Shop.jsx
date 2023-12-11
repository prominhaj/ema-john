import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";
import Order from "./Order";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className="container mx-auto flex">
            <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 py-10">
            {
                products.map(product => <Product key={product.id} card={product}></Product>)
            }
            </div>
            <div className="w-[400px] h-screen bg-[#FF99004D] fixed right-0">
                <Order></Order>
            </div>
        </div>
    );
};

export default Shop;