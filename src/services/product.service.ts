// https://dummyjson.com/docs/products#products-all
import apiClient from '../plugins/axiosClient';
import type {
  ProductsRequestInput,
  ProductsResponsePaginated,
} from '../types/product.type';

export const getAllProducts = async (
  payload?: ProductsRequestInput,
): Promise<ProductsResponsePaginated | any> => {
  const baseRequestUrl = payload?.search ? `/products/search` : `/products`;
  const searchParam = payload?.search ? `?q=${payload?.search}` : '';
  try {
    const response = await apiClient.get(`${baseRequestUrl}${searchParam}`, {
      params: {
        limit: payload?.limit || 8,
        skip: payload?.skip || 0,
      },
    });
    if (!response) throw new Error('No response from API');
    return response.data as ProductsResponsePaginated;
  } catch (error) {
    console.log('Error fetching products:', error);
  }
};
