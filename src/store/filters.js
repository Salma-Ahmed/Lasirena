export const getSelectedCategoryProducts = function(products, id) {
  return products.filter(product => product.categoryId === id);
};
export const getSelectedCategoryProductsFilteredByPrice = function(
  products,
  categoryId,
  min,
  max
) {
  return products.filter(
    product =>
      product.categoryId === categoryId &&
      product.price >= min &&
      product.price <= max
  );
};
export const getSelectedCategoryProductsFilteredByRating = function(
  products,
  categoryId,
  rating
) {
  return products.filter(
    product => product.categoryId === categoryId && product.rating === rating
  );
};
export const getSelectedCategoryProductsFilteredByColor = function(
  products,
  categoryId,
  colors
) {
  return products.filter(
    product =>
      product.categoryId === categoryId && colors.includes(product.color)
  );
};
export const getSelectedCategoryProductsFilteredByColorAndPrice = function(
  products,
  categoryId,
  colors,
  min,
  max
) {
  return products.filter(
    product =>
      product.categoryId === categoryId &&
      product.price >= min &&
      product.price <= max &&
      colors.includes(product.color)
  );
};
export const getSelectedCategoryProductsFilteredByColorAndRating = function(
  products,
  categoryId,
  colors,
  rating
) {
  return products.filter(
    product =>
      product.categoryId === categoryId &&
      product.rating === rating &&
      colors.includes(product.color)
  );
};
export const getSelectedCategoryProductsFilteredByPriceAndRating = function(
  products,
  categoryId,
  min,
  max,
  rating
) {
  return products.filter(
    product =>
      product.categoryId === categoryId &&
      product.rating === rating &&
      product.price >= min &&
      product.price <= max
  );
};
export const getSelectedCategoryProductsFilteredByPriceAndRatingAndColor = function(
  products,
  categoryId,
  colors,
  rating,
  min,
  max
) {
  return products.filter(
    product =>
      product.categoryId === categoryId &&
      product.rating === rating &&
      product.price >= min &&
      product.price <= max &&
      colors.includes(product.color)
  );
};
