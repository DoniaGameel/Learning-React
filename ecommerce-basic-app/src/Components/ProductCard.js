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
        <button className="btn btn-primary">Details</button>
      </div>
    </div>
  );
}

export default ProductCard;
