import {
  BarChart3,
  CheckCircle,
  Coins,
  MessageSquare,
  Twitter,
} from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-white text-[#1F2937] px-4 sm:px-6 pt-16 pb-14">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-2">

          <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto">
            Create a Solana token directly from your social media post in minutes. No code, no setup.
          </p>
        </div>

        {/* Step Line */}
        <div className="relative pl-6">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#F3C623]/30"></div>

          {/* Step Wrapper */}
          {[1, 2, 3].map((stepNumber) => {
            const isFirst = stepNumber === 1;
            const isLast = stepNumber === 3;

            return (
              <div
                key={stepNumber}
                className={`relative ${!isLast ? "mb-14" : ""}`}
              >
                <div className="flex items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0 z-10">
                    <div className="w-9 h-9 rounded-full bg-[#F3C623] text-white flex items-center justify-center text-sm font-bold">
                      {stepNumber}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="ml-6 flex-1">
                    {stepNumber === 1 && (
                      <>
                        <h2 className="text-sm sm:text-base font-semibold mb-3">
                          Post on Social Media
                        </h2>

                        <div className="bg-[#F9FAFB] border border-[#F3C623]/40 rounded-xl p-4 sm:p-5 mb-4 text-sm">
                          <h3 className="font-medium mb-3">How to create your token:</h3>
                          <div className="space-y-3 text-[#4B5563]">
                            {[
                              "Create a post on Twitter or TikTok that tags @TokenBot",
                              "Include your desired $TICKER (all caps, 3–5 characters)",
                              'Add your token name (e.g., "RocketToken")',
                              "Optionally attach an image to use as your token logo",
                            ].map((text, index) => (
                              <div className="flex items-start" key={index}>
                                <CheckCircle className="w-4 h-4 text-[#F3C623] mr-2 mt-0.5" />
                                <p>
                                  {text.includes("@TokenBot") ? (
                                    <span className="text-[#F3C623] font-medium">
                                      {text}
                                    </span>
                                  ) : (
                                    text
                                  )}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Mock Tweet */}
                        <div className="bg-white border border-[#F3C623]/20 rounded-xl p-4 shadow-sm text-sm">
                          <div className="flex items-start space-x-3">
                            <div className="w-9 h-9 bg-[#E5E7EB] rounded-full"></div>
                            <div>
                              <div className="font-semibold">
                                CryptoCreator <span className="text-[#6B7280]">@crypto_creator</span>
                              </div>
                              <p className="mt-1">
                                @TokenBot $ROCKET RocketToken 🚀 Let's go to the moon!
                              </p>
                              <div className="mt-2 text-xs text-[#6B7280]">
                                10:30 AM • June 10, 2025
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 flex justify-center">
                          <a
                            href="https://twitter.com/intent/tweet?text=@TokenBot%20$DEMO%20My%20First%20Token&related=TokenBot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-5 py-2 text-sm bg-[#1DA1F2] text-white rounded-full hover:scale-105 transition"
                          >
                            <Twitter size={16} />
                            <span>Try it on Twitter</span>
                          </a>
                        </div>
                      </>
                    )}

                    {stepNumber === 2 && (
                      <>
                        <h2 className="text-sm sm:text-base font-semibold mb-3">
                          Token Minting Process
                        </h2>

                        <div className="bg-[#F9FAFB] border border-[#F3C623]/40 rounded-xl p-4 sm:p-5 mb-4 space-y-5 text-sm">
                          {[
                            {
                              icon: <Coins className="text-[#F3C623]" size={18} />,
                              title: "SPL Token Creation",
                              desc: "TokenBot mints your SPL token on Solana using the ticker and name you shared.",
                            },
                            {
                              icon: <MessageSquare className="text-[#F3C623]" size={18} />,
                              title: "Metadata Upload",
                              desc: "Your image and token info are stored as metadata for use across wallets and exchanges.",
                            },
                            {
                              icon: <BarChart3 className="text-[#F3C623]" size={18} />,
                              title: "Optional Liquidity",
                              desc: "You can optionally seed liquidity using a bonding curve to make your token tradable instantly.",
                            },
                          ].map((item, i) => (
                            <div className="flex" key={i}>
                              <div className="w-9 h-9 bg-[#F3C623]/20 rounded-lg flex items-center justify-center mr-4">
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="font-medium mb-1 text-[#1F2937]">
                                  {item.title}
                                </h4>
                                <p className="text-[#4B5563]">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white rounded-xl p-4 shadow-md border border-[#F3C623]/20 text-sm">
                          <div className="flex items-start space-x-3">
                            <div className="w-9 h-9 rounded-full bg-[#F3C623]/20 flex items-center justify-center">
                              <Coins className="text-[#F3C623]" />
                            </div>
                            <div>
                              <div className="font-semibold">
                                TokenBot <span className="text-[#6B7280]">@TokenBot</span>
                              </div>
                              <p className="mt-1">
                                📣 @crypto_creator Your $ROCKET token has been successfully created!
                                <br />
                                <br />
                                View:{" "}
                                <span className="text-blue-500">https://tokenbot.io/token/rocket</span>
                                <br />
                                Trade:{" "}
                                <span className="text-blue-500">https://dex.tokenbot.io/rocket</span>
                              </p>
                              <div className="mt-2 text-xs text-[#6B7280]">
                                10:31 AM • June 10, 2025
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {stepNumber === 3 && (
                      <>
                        <h2 className="text-sm sm:text-base font-semibold mb-3">
                          Manage Your Token
                        </h2>

                        <div className="bg-[#F9FAFB] border border-[#F3C623]/40 rounded-xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          {[
                            {
                              title: "Token Dashboard",
                              desc: "Track volume, holders, and charts in real time.",
                            },
                            {
                              title: "Add Liquidity",
                              desc: "Seed liquidity to make your token tradable on DEXs.",
                            },
                            {
                              title: "Update Metadata",
                              desc: "Edit your token logo and details anytime.",
                            },
                            {
                              title: "Build Community",
                              desc: "Engage with holders through TokenBot tools.",
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="p-4 bg-white border border-[#F3C623]/20 rounded-lg"
                            >
                              <h4 className="font-medium text-[#1F2937] mb-2">
                                {item.title}
                              </h4>
                              <p className="text-[#4B5563]">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
