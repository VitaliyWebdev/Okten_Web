import React,{useEffect,useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {useServices} from './services'
import {setProducts} from "./redux/action-creators";

export default function App (){


const {wishlist,products,cart} = useSelector(({wishlist:{wishlist},products:{products},cart:{cart}})=>({
    wishlist,
    products,
    cart
}))

    const dispatch = useDispatch()

//     const fetchData = useCallback( async () => {
// const response = await productsService.getProducts();
// const json = await response.json();
//         dispatch(setProducts(json))
//     },[])


    useEffect(()=>{
        //fetchData()
        dispatch(setProducts())
    },[])


    return (
        <div>

            <Header/>
            <ProductList products={products}/>
<h2>{products.length}</h2>
        </div>
    );
}