function DeleteMethod(productId) {
  fetch(`http://localhost:9000/products/${productId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

export default DeleteMethod;
