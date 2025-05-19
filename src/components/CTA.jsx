
const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl overflow-hidden backdrop-blur-lg border border-purple-800/30">
          <div className="p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-400 text-transparent bg-clip-text">
              Ready to launch your own token?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Create your own token in minutes with just a social media post. No code, no technical expertise required.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="https://twitter.com/intent/tweet?text=@TokenBot%20$DEMO%20My%20First%20Token&related=TokenBot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#1DA1F2] text-white rounded-full font-medium transition-transform hover:scale-105"
              >
                <span>Mint with Twitter</span>
              </a>
              {/* <Link
                to="/how-it-works"
                className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium transition-all"
              > */}
              <span>Learn more</span>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
export default CTA;
