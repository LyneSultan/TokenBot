import { Calendar } from 'lucide-react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const USER_DATA = {
  name: 'John Doe',
  username: 'johndoe',
  avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600',
  tokens: [
    {
      id: 'demo1',
      token_name: 'DemoToken',
      token_id: 'id',
      createdAt: '2025-03-15',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=1600',

    },
    {
      id: 'test1',
      token_name: 'TestToken',
      token_id: 'id',
      createdAt: '2025-03-10',
      image: 'https://images.pexels.com/photos/8369650/pexels-photo-8369650.jpeg?auto=compress&cs=tinysrgb&w=1600',

    }
  ]
};

const Profile = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">

        <div className="bg-black backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 mb-4">
          <div className="flex flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500">
              <img
                src={USER_DATA.avatarUrl}
                alt={USER_DATA.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-grow text-center md:text-left">
              <h1 className="text-2xl font-bold text-white mb-2">
                Welcome back, {USER_DATA.name}!
              </h1>
            </div>
            <div className='p-1 text-white bg-blue'>
              <CiEdit />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-6">Your Tokens</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USER_DATA.tokens.map((token) => (
              <div className="mb-5">
                <div className="relative">
                  <img
                    src={token.image}
                    alt={token.token_name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{token.token_name}</h3>
                    <p className="text-sm text-gray-300">${token.token_id}</p>
                  </div>
                </div>

                <div className="p-2">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      Created {new Date(token.createdAt).toLocaleDateString()}
                    </div>

                    <button className="bg-red-500 hover:bg-red-600 rounded p-1 flex text-white items-center justify-center">
                      <MdDelete />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
