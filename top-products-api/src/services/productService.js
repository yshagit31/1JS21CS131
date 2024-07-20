// src/services/productService.js
const apiClient = require('../utils/apiClient');

const getProducts = async (categoryname, top, minPrice, maxPrice, sortBy, order, page) => {
  const response = await apiClient.get(`/companies/${companyName}/categories/${categoryname}/products`, {
    params: {
      top,
      minPrice,
      maxPrice,
      sortBy,
      order,
      page,
    },
  });

  return response.data;
};

const getProductDetails = async (categoryname, productid) => {
  const response = await apiClient.get(`/categories/${categoryname}/products/${productid}`);
  return response.data;
};

module.exports = { getProducts, getProductDetails };
