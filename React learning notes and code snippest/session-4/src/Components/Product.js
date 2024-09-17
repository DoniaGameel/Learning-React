import "./Product.css";
function Product(props) {
  return (
    <div className="card">
      <img src={props.product.image} alt="" />
      <h1>{props.product.title}</h1>
      <p>{props.product.description}</p>
      <p>price: {props.product.price}</p>
      <button
        onClick={() => {
          console.log("You are going to buy this ptoduct");
        }}
      >
        Buy
      </button>
    </div>
  );
}

export default Product;
