import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TokenCard from '../../atoms/TokenCard';

// mock data
const FEATURED_TOKENS = [
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
    logoUrl: 'https://images.pexels.com/photos/5702347/pexels-photo-5702347.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 0.103,
    priceChange: 5.4,
  }
];

const FeaturedTokens = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Tokens</h2>
            <p className="text-gray-400 max-w-2xl">
              Discover popular tokens created through TokenBot, track their performance and join thriving communities.
            </p>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center text-highlight font-medium hover:text-purple-300 transition-colors"
          >
            <span>View all tokens</span>
            <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>


        {/* Token grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_TOKENS.map((token) => (
            <TokenCard key={token.id} token={token} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedTokens;
