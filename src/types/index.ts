export interface ProductImage {
  url: string;
  alt: string;
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: ProductImage;
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ApiResponse<T> {
  data: T;
  meta?: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    pageCount: number;
    totalCount: number;
  };
}

export interface ApiError {
  message: string;
  status?: number;
  statusText?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  body: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

export interface ToastNotification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface ProductsState extends LoadingState {
  products: Product[];
  filteredProducts: Product[];
}