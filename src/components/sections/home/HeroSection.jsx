const HeroSection = () => {
  return (
    <section className="min-h-[80vh] px-6 sm:px-8 pt-10 pb-10 flex flex-col items-center justify-center text-center">

      <h1 className="text-4xl font-bold mb-4">
        <span className="text-dark">Instantly Mint </span>
        <span className="text-gradient">Solana Tokens</span>
      </h1>

      <p className="text-sm sm:text-base text-muted max-w-xl mb-5">
        Create trade-ready tokens with just one tag on Twitter or TikTok. No
        code, no friction — tag
        <span className="text-highlight font-semibold"> @TokenBot</span> to begin.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <button className="bg-primary bg-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full transition"> Mint with Twitter  </button>
        <a href="/how-it-works">
          <button className="border border-primary text-highlight hover:bg-primary hover:text-white font-medium text-sm px-5 py-2.5 rounded-full transition">
            Learn How It Works →
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
