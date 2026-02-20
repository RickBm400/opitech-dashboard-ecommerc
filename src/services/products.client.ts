// https://dummyjson.com/docs/products#products-all
import apiClient from '../plugins/axiosClient';
import type { ProductsResponsePaginated } from '../types/product.type';

export const getAllProducts = async (): Promise<
  ProductsResponsePaginated | any
> => {
  try {
    const response = await apiClient.get('/products?limit=10&skip=10');
    if (!response) throw new Error('No response from API');
    return response.data as ProductsResponsePaginated;
  } catch (error) {
    console.log('Error fetching products:', error);
  }
};
