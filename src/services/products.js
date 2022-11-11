import api from './api-helper';

export const getProducts = async () => {
  const response = await api.get("/products/1");
  return response.data;
};
