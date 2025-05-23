
import { Link } from 'react-router-dom';

const TokenCard = ({ token }) => {
  return (
    <Link
      to={`/token/${token.id}`}
      state={{ token }} // Pass full token data
      className="block"
    >
      <div className="border border-primary rounded-xl overflow-hidden hover:shadow-lg  hover:bg-primary-hover group" >
        <div className="aspect-square relative">
          <img
            src={token.logoUrl}
            alt={token.name}
            className="w-full h-full object-cover group-hover:scale-102   transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>


          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-lg font-bold text-white">{token.name}</h3>
                <p className="text-sm text-gray-300">${token.ticker}</p>
              </div>
              {/* <div className={`text-right ${token.priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              <div className="text-lg font-bold">${token.price.toFixed(4)}</div>
              <div className="text-sm flex items-center justify-end">
                {token.priceChange >= 0 ? '+' : ''}{token.priceChange}%
              </div>
            </div> */}
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="flex justify-between text-sm text-gray-400 mb-3">
            <span>Created by @{token.creator}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default TokenCard;
