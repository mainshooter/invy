module.exports = (price) => {
  let exPrice = 0;
  try {
    let incPrice = parseFloat(price);
    exPrice = (incPrice / 121 * 100).toFixed(2);
  } catch (e) {}
  return exPrice;
}
