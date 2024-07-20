// // src/controllers/productController.js
// const productService = require('../services/productService');

// const getProducts = async (req, res) => {
//   try {
//     const { categoryname } = req.params;
//     const { top, minPrice, maxPrice, sortBy, order, page } = req.query;
//     const products = await productService.getProducts(categoryname, top, minPrice, maxPrice, sortBy, order, page);
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const getProductDetails = async (req, res) => {
//   try {
//     const { categoryname, productid } = req.params;
//     const productDetails = await productService.getProductDetails(categoryname, productid);
//     res.status(200).json(productDetails);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = { getProducts, getProductDetails };


const axios = require('axios');

const getProducts = async (req, res) => {
  try {
    const { companyName, category } = req.params;
    const { top, minPrice, maxPrice } = req.query;

    // Construct the API URL with parameters
    const apiUrl = `http://20.244.56.144/test/companies/${companyName}/categories/${category}/products`;

    const response = await axios.get(apiUrl, {
      params: {
        top,
        minPrice,
        maxPrice
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getProducts };


  