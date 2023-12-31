import axios from 'axios';

export const getProducts = (callback) => {
  return axios
    .get('https://fakestoreapi.com/products')
    .then((res) => callback(res.data))
    .catch((err) => callback(err));
};

export const getSingleProduct = (id, callback) => {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => callback(res.data))
    .catch((err) => callback(err));
};
