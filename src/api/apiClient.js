const API_BASE_URL = "https://v2.api.noroff.dev/online-shop";

export async function fetchProducts() {
  try {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
}
