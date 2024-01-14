import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";
import Order from "./Order";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { Link, useLoaderData } from "react-router-dom";
import ArrowImg from "../../assets/images/Arrow.svg";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [productCart, setProductCart] = useState([]);

  // Pagination
  const { total } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(total / itemsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];
  const availableItemsPerPage = [5, 10, 15, 20];

  const handleItemsPerPageChange = (e) => {
    console.log(e.target.value);
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(0);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemsPerPage]);

  // Pagination End

  useEffect(() => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);

    fetch("http://localhost:5000/productids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((savaCarts) => {
        const newArray = [];
        for (const id in storedCart) {
          const addedProduct = savaCarts.find((product) => product._id === id);

          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            newArray.push(addedProduct);
          }
        }
        setProductCart(newArray);
      });
  }, []);

  const addToCart = (card) => {
    let newCart = [];
    // const newCard = [...productCart, card];
    const exists = productCart.find((pd) => pd._id === card._id);
    if (!exists) {
      card.quantity = 1;
      newCart = [...productCart, card];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = productCart.filter((pd) => pd._id !== card._id);
      newCart = [...remaining, exists];
    }
    setProductCart(newCart);
    addToDb(card._id);
  };

  const clearCart = () => {
    setProductCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="container mx-auto flex">
      <div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1 gap-10 py-10">
          {products.map((product) => (
            <Product
              key={product._id}
              card={product}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>

        {/* pagination */}

        <div
          className="flex justify-center items-center flex-col gap-2 pt-5 pb-10 rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <div className="flex gap-5">
            <p>
              <small>Current Page: {currentPage}</small>
            </p>
            <p>
              <small>Current Per Page: {itemsPerPage}</small>
            </p>
          </div>
          <div className="flex gap-2">
            {pageNumbers.map((number) => (
              <button
                className={`${
                  currentPage === number
                    ? "relative bg-blue-600 text-white inline-flex items-center rounded px-3 text-lg py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    : "relative inline-flex items-center rounded px-3 text-lg py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                }`}
                key={number}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            ))}

            {/* select option */}
            <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
              {availableItemsPerPage.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="md:w-[25rem] md:h-screen pb-6 rounded bg-[#FF99004D] fixed right-0">
        <Order productCart={productCart} clearCart={clearCart}>
          <Link to="/orders">
            <button className="flex items-center gap-3 justify-center w-full h-12 bg-[#FF9900] rounded text-white mt-5">
              Review Order
              <img src={ArrowImg} alt="" />
            </button>
          </Link>
        </Order>
      </div>
    </div>
  );
};

export default Shop;
