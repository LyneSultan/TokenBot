
const API_BASE_URL = ' https://twitter-bot-uyo9.onrender.com';

export const fetchFeaturedTokens = async () => {
  try {

    const response = await fetch(`${API_BASE_URL}/getAllTokens`); // Adjust endpoint as needed
    if (!response.ok) {
      // Handle HTTP errors (e.g., 404, 500)
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || response.statusText}`);
    }
    const data = await response.json();
    return data;


  } catch (error) {
    console.error("Error fetching featured tokens:", error);
    throw error;
  }
};
