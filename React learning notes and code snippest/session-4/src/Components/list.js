function List() {
  const arr = ["html", "css", "js"];
  const li = arr.map((el, index) => {
    return <li key={index}>{el}</li>;
  });
  console.log(li);
  return <ul>{li}</ul>;
}

export default List;
