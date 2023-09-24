

const ProductsCard = ({product}) => {
    const{id,images,price,stock,title}=product || {}
    console.log(title)
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default ProductsCard;