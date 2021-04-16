document.getElementById("delete").onclick = function () {
  const productId = document.getElementById("product-id").value;

  console.log(" trina" + productId);
  axios.delete(`/api/products/${productId}`).then(processResult);
};

function processResult() {
  window.alert("Product deleted!");
}
