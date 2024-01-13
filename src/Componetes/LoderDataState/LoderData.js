import { getShoppingCart } from "../../utilities/fakedb";

const loderDataState = async () =>{
    const loderData = await fetch('http://localhost:5000/products');
    const newData = await loderData.json();

    const storedCart = getShoppingCart();
    const saveProduct = [];

    for(const id in storedCart){
        const addedProduct = newData.find(pd => pd._id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveProduct.push(addedProduct);
        }
    }
    return saveProduct;
}

export default loderDataState;