import { toast } from "react-toastify";

const getStoredToCart = () => {
    const storedStr = localStorage.getItem('product-cart');
    if (storedStr) {
        const storedCart = JSON.parse(storedStr);
        return storedCart;
    }
    return [];

}

const setToStoredCart = (cart) => {
    localStorage.setItem('product-cart', JSON.stringify(cart));
}

const addToCart = (id, price) => {
    const storedCart = getStoredToCart();

    if (storedCart.includes(id)) {
        toast('Already added!');
    }
    else {
        storedCart.push({id, price});
        setToStoredCart(storedCart);
        const storedStr = JSON.stringify(storedCart);
        localStorage.setItem('product-cart', storedStr);

        toast('Successfully Add to cart!');
    }

}


const removeFromCart = (productId) => {
    let storedCart = getStoredToCart();
    const updateCart = storedCart.filter(id => id !== productId);
    localStorage.setItem('product-cart', JSON.stringify(updateCart));
    setCart (cart.filter(product => product.product_id !== productId));
    setTotalPrice(calculatedPrice(cart.filter(product => product.product_id !== productId)))
    setToStoredCart(updateCart);
}


const getStoredToWish = () => {
    const storedWishStr = localStorage.getItem('wishlist');
    if (storedWishStr) {
        const storedWish = JSON.parse(storedWishStr);
        return storedWish;
    }
    else {
        return [];
    }

}

const addToWish = (id) => {
    const storedWishList = getStoredToWish();

    if (storedWishList.includes(id)) {
        toast('Already exists!');
    }
    else {
        storedWishList.push(id);
        const storedStr = JSON.stringify(storedWishList);
        localStorage.setItem('wishlist', storedStr);
        toast('Add to wishlist!');
    }

}


export { addToCart, addToWish, getStoredToWish, getStoredToCart, setToStoredCart, removeFromCart };