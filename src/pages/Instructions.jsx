import {
  BarChart3,
  Coins,
  MessageSquare
} from 'lucide-react';

const Instructions = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">How TokenBot Works</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create a Solana token directly from your social media post in minutes, with no coding required.
          </p>
        </div>

        {/* STEPS Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Vertical line that spans all steps */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            {/* Step 1*/}
            <div className="relative mb-16">
              <div className="flex">
                <div className="flex-shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                </div>

                <div className="ml-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Token Minting Process</h2>

                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-medium text-white mb-4">What happens behind the scenes:</h3>

                    <div className="space-y-6">
                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <Coins className="text-purple-400" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">SPL Token Creation</h4>
                          <p className="text-gray-300 text-sm">
                            TokenBot mints your SPL token on the Solana blockchain with your specified ticker and name.
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                            <MessageSquare className="text-pink-400" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Metadata Upload</h4>
                          <p className="text-gray-300 text-sm">
                            Token metadata, including your image (if provided), is uploaded to make your token discoverable and tradeable.
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <BarChart3 className="text-blue-400" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Liquidity Seeding (Optional)</h4>
                          <p className="text-gray-300 text-sm">
                            You can choose to seed initial liquidity with a bonding curve to make your token immediately tradeable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bot Reply */}
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-800">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                        <Coins className="w-6 h-6 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900 dark:text-white">TokenBot</span>
                          <span className="text-gray-500">@TokenBot</span>
                        </div>
                        <p className="text-gray-900 dark:text-white mt-1">
                          📣 @crypto_creator Your $ROCKET token has been successfully created! 🚀<br /><br />
                          View your token: <span className="text-blue-500">https://tokenbot.io/token/rocket</span><br />
                          Trade now: <span className="text-blue-500">https://dex.tokenbot.io/rocket</span>
                        </p>
                        <div className="mt-3 text-gray-500 text-sm flex items-center space-x-4">
                          <span>10:31 AM</span>
                          <span>June 10, 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-16">
              <div className="flex">
                <div className="flex-shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>

                <div className="ml-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Token Minting Process</h2>

                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-medium text-white mb-4">What happens behind the scenes:</h3>

                    <div className="space-y-6">
                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <Coins className="text-purple-400" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">SPL Token Creation</h4>
                          <p className="text-gray-300 text-sm">
                            TokenBot mints your SPL token on the Solana blockchain with your specified ticker and name.
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                            <MessageSquare className="text-pink-400" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Metadata Upload</h4>
                          <p className="text-gray-300 text-sm">
                            Token metadata, including your image (if provided), is uploaded to make your token discoverable and tradeable.
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <BarChart3 className="text-blue-400" size={20} />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">Liquidity Seeding (Optional)</h4>
                          <p className="text-gray-300 text-sm">
                            You can choose to seed initial liquidity with a bonding curve to make your token immediately tradeable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bot Reply */}
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-800">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                        <Coins className="w-6 h-6 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900 dark:text-white">TokenBot</span>
                          <span className="text-gray-500">@TokenBot</span>
                        </div>
                        <p className="text-gray-900 dark:text-white mt-1">
                          📣 @crypto_creator Your $ROCKET token has been successfully created! 🚀<br /><br />
                          View your token: <span className="text-blue-500">https://tokenbot.io/token/rocket</span><br />
                          Trade now: <span className="text-blue-500">https://dex.tokenbot.io/rocket</span>
                        </p>
                        <div className="mt-3 text-gray-500 text-sm flex items-center space-x-4">
                          <span>10:31 AM</span>
                          <span>June 10, 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex">
                <div className="flex-shrink-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                </div>

                <div className="ml-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Manage Your Token</h2>

                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-medium text-white mb-4">What you can do with your token:</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg">
                        <h4 className="text-white font-medium mb-2">Token Dashboard</h4>
                        <p className="text-gray-300 text-sm">
                          Access analytics, holder statistics, and trading volume for your token.
                        </p>
                      </div>

                      <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg">
                        <h4 className="text-white font-medium mb-2">Add Liquidity</h4>
                        <p className="text-gray-300 text-sm">
                          Create trading pairs and add liquidity to make your token easily tradeable.
                        </p>
                      </div>

                      <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg">
                        <h4 className="text-white font-medium mb-2">Update Metadata</h4>
                        <p className="text-gray-300 text-sm">
                          Change your token's description, logo, and other details as your project evolves.
                        </p>
                      </div>

                      <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg">
                        <h4 className="text-white font-medium mb-2">Community Building</h4>
                        <p className="text-gray-300 text-sm">
                          Access tools to engage with token holders and build your community.
                        </p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
};
export default Instructions;
