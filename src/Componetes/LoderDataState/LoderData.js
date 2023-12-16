import { getShoppingCart } from "../../utilities/fakedb";

const loderDataState = async () =>{
    const loderData = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    const newData = await loderData.json();

    const storedCart = getShoppingCart();
    const saveProduct = [];

    for(const id in storedCart){
        const addedProduct = newData.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveProduct.push(addedProduct);
        }
    }
    return saveProduct;
}

export default loderDataState;