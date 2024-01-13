import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";
import Order from "./Order";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
import ArrowImg from '../../assets/images/Arrow.svg';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [productCart, setProductCart] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
    useEffect(() => {
        const storedCart = getShoppingCart();
        const newArray = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product._id === id);

            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                newArray.push(addedProduct);
            }
        }
        setProductCart(newArray);

    }, [products])

    const addToCart = (card) =>{
        let newCart = [];
        // const newCard = [...productCart, card];
        const exists = productCart.find(pd => pd._id === card._id);
        if(!exists){
            card.quantity = 1;
            newCart = [...productCart, card];
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = productCart.filter(pd => pd._id !== card._id);
            newCart = [...remaining, exists];
        }
        setProductCart(newCart);
        addToDb(card._id);
    }

    const clearCart = ()=>{
        setProductCart([]);
        deleteShoppingCart();
    }

    return (
        <div className="container mx-auto flex">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1 gap-10 py-10">
            {
                products.map(product => <Product key={product._id} card={product} addToCart={addToCart}></Product>)
            }
            </div>
            <div className="md:w-[25rem] md:h-screen pb-6 rounded bg-[#FF99004D] fixed right-0">
                <Order productCart={productCart} clearCart={clearCart}>
                    <Link to="/orders">
                        <button className='flex items-center gap-3 justify-center w-full h-12 bg-[#FF9900] rounded text-white mt-5'>Review Order
                            <img src={ArrowImg} alt="" />
                        </button>
                    </Link>
                </Order>
            </div>
        </div>
    );
};

export default Shop;