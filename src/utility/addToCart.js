const getStoredToCart = () => {
    const storedStr = localStorage.getItem('product-price');
    if(storedStr){
        const storedPrice = JSON.parse(storedStr);
        return storedPrice;
    }
    return [];

}

const addToCart = (id, price) => {
    const storedCart = getStoredToCart();
    storedCart.push(id, price);
    const storedStr = JSON.stringify(storedCart);
    localStorage.setItem('product-price', storedStr)

    // toast('Successfully added');

}

const getStoredToWish = () => {
    const storedWishStr = localStorage.getItem('wish-list');
    if(storedWishStr){
        // const storedWish = JSON.parse(storedWishStr);
        return JSON.parse(storedWishStr);
    }
    else{
        return [];
    }

}

const addToWish = (id) => {
    const storedWishList = getStoredToWish();

    if(storedWishList.includes(id)){
        console.log(id, 'already exists');
    }
    else{
        storedWishList.push(id);
        const storedStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedStr);

        toast('Successfully added');
    }
    

    // toast('Successfully added');

}

export {addToCart, addToWish, getStoredToWish, getStoredToCart};