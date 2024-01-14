import { getShoppingCart } from "../../utilities/fakedb";

const loderDataState = async () =>{
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart)
    const loaderData = await fetch('http://localhost:5000/productids', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(ids)
    });

    const newData = await loaderData.json();
    console.log(newData);
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