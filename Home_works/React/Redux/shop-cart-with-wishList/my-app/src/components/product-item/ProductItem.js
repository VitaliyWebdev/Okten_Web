import React from 'react'

const ProductItem = ({   isAddedToWishList,
                            isAddedToCart,
                         onAddToCart,
                         onAddToWishList,
                         product,
                         product: {id,title,price,description}}) => {

    return (
        <div>
            <div>
                <h5>{id}</h5>
                <h5>{title}</h5>
                <h5>{price}</h5>
                <h5>{description}</h5>
                <button onClick={() => onAddToCart(product) } style={{background: isAddedToCart ? 'red' :  'green'}}>add to cart</button>
                <button onClick={() => onAddToWishList(product)} style={{background: isAddedToWishList ? 'red' :  'green'}}>
                    {isAddedToWishList ? 'remove from wishlist' : 'add to wishlist'}
                </button>
                <hr/>
            </div>
        </div>
    );
}

 export default ProductItem;