 const ProductItem = ({product: {id,title,price,description}}) => {

    return (
        <div>
            <div key={id}>
                <h5>{id}</h5>
                <h5>{title}</h5>
                <h5>{price}</h5>
                <h5>{description}</h5>
            </div>
        </div>
    );
}

 export default ProductItem;