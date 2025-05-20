import BenefitSection from "../sections/BenefitSection";
import Footer from "../sections/Footer";
import HeroSection from "../sections/HeroSection";
import Instructions from "../sections/Instructions";
import QuestionsSection from "../sections/QuestionsSection";
import WhySection from "../sections/WhySection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Instructions />
      <WhySection />
      <BenefitSection />
      <QuestionsSection />
      <Footer />
    </>
  )
}
export default Home;
