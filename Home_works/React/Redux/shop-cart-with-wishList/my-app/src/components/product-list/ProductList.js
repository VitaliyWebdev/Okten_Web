import React from 'react'
import ProductItem from "../product-item/ProductItem";
import {useDispatch,useSelector} from "react-redux";
import {toggleItemInCart,toggleItemInWishList} from "../../redux/action-creators";

export const ProductList = ({products}) =>{
    const dispatch = useDispatch();
const {wishlist,cart} = useSelector(({wishlist:{wishlist},cart:{cart} } ) => ({wishlist,cart}) )


    const onAddToWishList = (product)=>{
dispatch(toggleItemInWishList(product))
    }
  const  onAddToCart = (product) =>{
      dispatch(toggleItemInCart(product))
  }

    return (
<div>
    {products.map(product=>(
        <ProductItem isAddedToWishList={!!wishlist.find( ({id}) => id === product.id)}
                     isAddedToCart = {!!cart.find(({id}) => id === product.id)}
                     onAddToCart={onAddToCart} onAddToWishList={onAddToWishList} product={product} key={product.id}/>

        )

    )}
</div>

    );
}