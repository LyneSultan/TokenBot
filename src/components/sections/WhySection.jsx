import {
  ChevronLeft, ChevronRight,
  Rocket,
  ShieldCheck,
  Zap
} from "lucide-react";
import { useEffect, useState } from 'react';

const features = [
  {
    icon: Zap,
    title: "Instant Setup",
    text: "Deploy your token in seconds—no registration or wait time.",
  },
  {
    icon: ShieldCheck,
    title: "No Coding Needed",
    text: "Forget contracts and devs. All you need is a social post.",
  },
  {
    icon: Rocket,
    title: "Trade-Ready",
    text: "Tokens come with metadata and tools ready for trading.",
  },
];


const FeatureCard = ({ title, text }) => (
  <div className="p-1 text-white  rounded-lg hover:shadow-md transition ">
    <h4 className="text-2xl font-semibold text-gradient mb-3">{title}</h4>
    <p className="text-l sm:text-sm text-grey">{text}</p>
  </div >
);

const Carousel = ({ features }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="w-full">
      {/* Feature Card */}
      <div className="flex justify-center items-center h-75">
        <FeatureCard
          title={features[current].title}
          text={features[current].text}
        />
      </div>


      {/* Buttons */}
      <div className="flex justify-start gap-3">
        <button
          onClick={prevSlide}
          className="transform -translate-y-1/2 bg-primary text-white p-3 rounded-full"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={26} />
        </button>
        <button
          onClick={nextSlide}
          className="transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full"
          aria-label="Next Slide"
        >
          <ChevronRight size={26} />
        </button>
      </div>
    </div>
  );
};

const WhySection = () => {
  return (
    <section className=" sm:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 text-[#1F2937]">
        Why Use TokenBot?
      </h2>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center px-8 pt-5 bg-black text-white rounded-3xl">

          {/* - Text */}
          <div className="text-center lg:text-left max-w-md order-1 lg:order-1">
            <h2 className="text-3xl font-bold">
              We make token creation effortless, secure, and instantly usable.
            </h2>
          </div>

          {/* - Carousel */}
          <div className=" order-2 max-w-80 lg:order-3">
            <Carousel features={features} />
          </div>

          {/* - Image */}
          <div className="overflow-hidden order-3 lg:order-2">
            <img
              src="/iphone.png"
              alt="iPhone"
              className="w-100 h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
export default WhySection;
