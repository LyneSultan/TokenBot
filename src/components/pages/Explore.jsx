import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchFeaturedTokens } from '../../services/fetchAllTokens';
import TokenCard from '../atoms/TokenCard';

const ExploreTokensPage = () => {
  const [tokens, setTokens] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTokens = async () => {
      try {
        const data = await fetchFeaturedTokens();
        const tokens = data.tokens;
        console.log(tokens);
        const transformedTokens = tokens.map(token => ({
          id: token.id,
          name: token.name,
          ticker: token.meta.ticker,
          creator: token.meta.username,
          logoUrl: `https://twitter-bot-uyo9.onrender.com/${token.meta.image}`,
        }));

        setTokens(transformedTokens);
      } catch (error) {
        console.error('Failed to fetch tokens:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTokens();
  }, []);

  const filteredTokens = tokens.filter(token =>
    token.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
    token.creator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Explore Tokens</h1>
          <p className="text-gray-400 max-w-2xl">
            Discover and track tokens created through TokenBot. Filter by category, search by name or creator, and find tokens that match your interests.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by name, ticker or creator..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-primary rounded-full text-gray bg-white focus:outline-none focus:border-purple-500/50"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center text-white">Loading tokens...</div>
        ) : filteredTokens.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTokens.map(token => (
                <TokenCard key={token.id} token={token} />
              ))}
            </div>
            <p className="flex justify-center mt-6 text-primary cursor-pointer font-semibold text-lg transition-colors">
              View more
            </p>
          </>
        ) : (
          <div className="text-center py-12 backdrop-blur-sm border border-gray-800/50 rounded-xl">
            <Search className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <h3 className="text-xl font-medium text-white mb-2">No tokens found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreTokensPage;
