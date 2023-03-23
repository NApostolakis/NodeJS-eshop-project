exports.getAddProduct = (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
}
exports.postAddProduct = (req, res, next) => {
  //store product to database
  res.redirect('/');
}

exports.getAllProducts = (req, res, next) => {
  //fetch all products from database
}