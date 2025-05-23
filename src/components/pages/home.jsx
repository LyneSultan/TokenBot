import BenefitSection from "../sections/home/BenefitSection";
import HeroSection from "../sections/home/HeroSection";
import Instructions from "../sections/home/Instructions";
import QuestionsSection from "../sections/home/QuestionsSection";
import FeaturedTokens from "../sections/home/TokensSection";
import WhySection from "../sections/home/WhySection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Instructions />
      <WhySection />
      <FeaturedTokens />
      <BenefitSection />
      <QuestionsSection />

      <section className="bg-gradient text-white text-center px-6 sm:px-8 py-10">
        <h3 className="text-3xl font-semibold mb-3">Ready to launch your token?</h3>

        <p className="text-xs sm:text-sm mb-4">
          Tag <span className="font-bold">@TokenBot</span> on Twitter or TikTok
          — we'll do the rest.
        </p>
        <button className="bg-white  font-semibold text-sm px-6 my-4 py-2.5 rounded-full transition">
          <p className="text-highlight">Get Started Now</p>
        </button>

      </section>


    </>
  )
}
export default Home;
