import { Search } from 'lucide-react';
import { useState } from 'react';
import TokenCard from '../atoms/TokenCard';

// Mock data for tokens
const TOKENS = [
  {
    id: 'rocket',
    name: 'RocketToken',
    ticker: 'ROCKET',
    creator: 'crypto_creator',
    logoUrl: 'https://images.pexels.com/photos/6636159/pexels-photo-6636159.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 0.045,
    priceChange: 12.5,
  },
  {
    id: 'pixel',
    name: 'PixelVerse',
    ticker: 'PIXEL',
    creator: 'pixelartist',
    logoUrl: 'https://images.pexels.com/photos/5702341/pexels-photo-5702341.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 0.087,
    priceChange: 8.3,
  },
  {
    id: 'cosmic',
    name: 'CosmicCoin',
    ticker: 'COSMIC',
    creator: 'space_nerd',
    logoUrl: 'https://images.pexels.com/photos/5702347/pexels-photo-5702347.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 0.016,
    priceChange: -2.7,
  },
  {
    id: 'byte',
    name: 'ByteToken',
    ticker: 'BYTE',
    creator: 'techdev',
    logoUrl: 'https://images.pexels.com/photos/7256921/pexels-photo-7256921.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 0.103,
    priceChange: 5.4,
  },
  {
    id: 'galaxy',
    name: 'GalaxyToken',
    ticker: 'GLXY',
    creator: 'crypto_creator',
    logoUrl: 'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 0.052,
    priceChange: -1.3,
  },
  {
    id: 'unity',
    name: 'UnityToken',
    ticker: 'UNITY',
    creator: 'community_builder',
    logoUrl: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 0.073,
    priceChange: 3.8,
  },
  {
    id: 'spark',
    name: 'SparkToken',
    ticker: 'SPARK',
    creator: 'innovation_hub',
    logoUrl: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 0.031,
    priceChange: 9.2,
  },
  {
    id: 'flow',
    name: 'FlowToken',
    ticker: 'FLOW',
    creator: 'defi_wizard',
    logoUrl: 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 0.094,
    priceChange: 6.7,
  }
];

const ExploreTokensPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTokens = TOKENS.filter(token =>
    token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
        {filteredTokens.length > 0 ? (
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
          <div className="text-center py-12  backdrop-blur-sm border border-gray-800/50 rounded-xl">
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
