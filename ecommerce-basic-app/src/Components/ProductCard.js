import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="card">
      <img
        src={props.product.image}
        className="card-img-top height-200"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <p>Price: {props.product.price}$</p>
        {props.showButton ? (
          <Link className="btn btn-primary" to={`/product/${props.product.id}`}>
            Details
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
