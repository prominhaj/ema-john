import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";
import Order from "./Order";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [productCart, setProductCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [charge, setCharge] = useState(0);
    const [tax, setTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const addToCart = (card) =>{
        const newCard = [...productCart, card];
        setProductCart(newCard);
        
        const newCharge = newCard.length * 5;
        setCharge(newCharge);
        
        newCard.map(product =>{
            const productTotalPrice = product.price + total;
            setTotal(productTotalPrice);
            const taxTotalCal = productTotalPrice + newCharge;
            const taxValue = (taxTotalCal / 100) * 10;
            setTax(taxValue);

            // Grand Total
            const grandTotal = productTotalPrice + newCharge + parseInt(taxValue);
            setGrandTotal(grandTotal);
        });
    }

    const clearCart = () =>{
        setProductCart([]);
        setTotal(0);
        setCharge(0);
        setTax(0);
        setGrandTotal(0);
    }

    return (
        <div className="container mx-auto flex">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1 gap-10 py-10">
            {
                products.map(product => <Product key={product.id} card={product} addToCart={addToCart}></Product>)
            }
            </div>
            <div className="w-[25rem] h-screen bg-[#FF99004D] fixed right-0">
                <Order productItems={productCart.length} total={total} charge={charge} tax={parseInt(tax)} grandTotal={grandTotal} clearCart={clearCart}></Order>
            </div>
        </div>
    );
};

export default Shop;