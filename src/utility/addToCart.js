const getStoredToCart = () => {
    const storedStr = localStorage.getItem('product-price');
    if(storedStr){
        const storedCart = JSON.parse(storedStr);
        return storedCart;
    }
    return [];

}

const addToCart = (id, price) => {
    const storedCart = getStoredToCart();
    storedCart.push(id, price);
    const storedStr = JSON.stringify(storedCart);
    localStorage.setItem('product-price', storedStr);

    const cart = storedCart.find(item => item.id === id);
    // if(!cart){
    //     storedCart.push({id, price});
        

    //     console.log(`added product ${id} to cart`)
    // }
    // else{
    //     console.log(`product ${id} already in cart`)
    // }
    

    // toast('Successfully added');

}


const getStoredToWish = () => {
    const storedWishStr = localStorage.getItem('wish-list');
    if(storedWishStr){
        const storedWish = JSON.parse(storedWishStr);
        return storedWish;
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

    }
    

    // toast('Successfully added');

}



export {addToCart, addToWish, getStoredToWish, getStoredToCart,};