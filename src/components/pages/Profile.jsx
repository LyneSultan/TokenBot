import { Calendar, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { fetchUserProfile } from '../../services/fetchUserProfile';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [sortOrder, setSortOrder] = useState('latest');
  const location = useLocation();

  // Extract query params
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId");


  useEffect(() => {
    console.log(userId);
    const loadUserData = async () => {
      const data = await fetchUserProfile(userId);
      // console.log(data);
      setUserData(data);
    };
    loadUserData();
  }, []);

  if (!userData) return <div className="pt-24 text-center">Loading...</div>;

  const sortedTokens = [...userData.tokens].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-white text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10 shadow-sm">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary shadow-sm">
              <img
                src={userData.avatarUrl}
                alt={userData.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-grow">
              <h1 className="text-2xl font-bold">{userData.name}</h1>
              <p className="text-gray-600 text-sm">@{userData.username}</p>
            </div>

            <button className="px-4 py-2 bg-primary hover:bg-purple-700 text-white rounded-lg text-sm transition-colors">
              Edit Profile
            </button>
          </div>

          <p className="text-gray-700 mb-3">{userData.bio}</p>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>Joined {userData.joinedDate}</span>
          </div>
        </div>

        {/* Tokens Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Tokens</h2>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-1 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedTokens.map((token) => (
              <TokenCard key={token.id} token={token} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TokenCard = ({ token }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="grid grid-cols-[150px_1fr]">
        {/* Image Section */}
        <div className="h-full w-full">
          <img
            src={token.logoUrl}
            alt={token.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">{token.name}</h3>
            <p className="text-sm text-gray-500">${token.ticker}</p>
          </div>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <p>Created on {token.createdAt}</p>
            <button className="p-2 bg-gray-100 hover:bg-red-100 text-red-500 rounded-full transition-colors">
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
