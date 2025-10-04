import { Product, ApiResponse, ApiError } from '../types';

const API_BASE_URL = "https://v2.api.noroff.dev/online-shop";

class ApiClient {
  private async fetchWithErrorHandling<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        const errorData: ApiError = {
          message: `HTTP ${response.status}: ${response.statusText}`,
          status: response.status,
          statusText: response.statusText,
        };
        throw errorData;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw {
          message: 'Network error. Please check your internet connection.',
          status: 0,
        } as ApiError;
      }

      if (error && typeof error === 'object' && 'message' in error) {
        throw error as ApiError;
      }

      throw {
        message: 'An unexpected error occurred',
        status: 500,
      } as ApiError;
    }
  }

  async fetchProducts(): Promise<Product[]> {
    try {
      const result = await this.fetchWithErrorHandling<ApiResponse<Product[]>>(API_BASE_URL);

      if (!result.data || !Array.isArray(result.data)) {
        throw {
          message: 'Invalid response format: expected array of products',
          status: 500,
        } as ApiError;
      }

      return result.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async fetchProductById(id: string): Promise<Product> {
    try {
      if (!id || typeof id !== 'string') {
        throw {
          message: 'Invalid product ID provided',
          status: 400,
        } as ApiError;
      }

      const result = await this.fetchWithErrorHandling<ApiResponse<Product>>(`${API_BASE_URL}/${id}`);

      if (!result.data) {
        throw {
          message: 'Product not found',
          status: 404,
        } as ApiError;
      }

      return result.data;
    } catch (error) {
      console.error(`Error fetching product with id ${id}:`, error);
      throw error;
    }
  }
}

const apiClient = new ApiClient();

export const fetchProducts = () => apiClient.fetchProducts();
export const fetchProductById = (id: string) => apiClient.fetchProductById(id);
export { ApiClient };