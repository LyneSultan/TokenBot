
const API_BASE_URL = 'https://twitter-bot-uyo9.onrender.com';

export const fetchUserProfile = async (userId = '1') => {
  try {

    const response = await fetch(`${API_BASE_URL}/getUserTokens?userId=${userId}`);
    if (!response.ok) {
      // Handle HTTP errors (e.g., 404, 500)
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || response.statusText}`);
    }
    const apiData = await response.json();
    const userTokens = apiData.tokens;

    const formattedTokens = userTokens.map(token => ({
      createdAt: new Date(token.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      id: token.id,
      name: token.name,
      ticker: token.meta.ticker,
      logoUrl: `${API_BASE_URL}/${token.meta.image}`,
    }));

    return {
      name: 'John Doe',
      username: 'johndoe',
      avatarUrl:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600',
      bio: 'Crypto enthusiast and token creator. Building the future of decentralized finance.',
      joinedDate: 'March 2024',
      tokens: formattedTokens,
    };


  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};
