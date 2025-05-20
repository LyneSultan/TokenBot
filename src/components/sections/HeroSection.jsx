const HeroSection = () => {
  return (
    <section className="min-h-[80vh] px-6 sm:px-8 pt-10 pb-10 flex flex-col items-center justify-center text-center">

      <h1 className="text-4xl font-bold mb-4">
        <span className="text-black">Instantly Mint </span>
        <span className="text-gradient-yellow-blue bg-clip-text text-transparent">  Solana Tokens </span>
      </h1>


      <p className="text-sm sm:text-base text-[#4B5563] max-w-xl mb-5">
        Create trade-ready tokens with just one tag on Twitter or TikTok. No
        code, no friction — tag
        <span className="text-[#F3C623] font-semibold"> @TokenBot</span> to
        begin.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="bg-[#F3C623] hover:bg-yellow-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition">
          Mint with Twitter
        </button>
        <a href="/how-it-works"><button className="border border-[#F3C623] text-[#F3C623] hover:bg-[#F3C623] hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg transition">
          Learn How It Works →
        </button></a>
      </div>
    </section>)
}

export default HeroSection;
