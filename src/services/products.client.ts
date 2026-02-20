// https://dummyjson.com/docs/products#products-all
import apiClient from '../plugins/axiosClient';
import type { Product } from '../types/product.type';

export const getAllProducts = async (): Promise<Array<Product | any>> => {
  try {
    const response = await apiClient.get('/products?limit=10');
    if (!response) throw new Error('No response from API');
    console.log(response);
    return response.data as Product[];
  } catch (error) {
    console.log('Error fetching products:', error);
  }

  return [];
};
