import {
  BarChart2,
  Coins,
  Globe,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Twitter,
  Users,
  Zap,
} from "lucide-react";
import { useState } from 'react';

const steps = [
  {
    icon: Twitter,
    title: "Post on Social Media",
    description:
      "Tag @TokenBot with your $TICKER, token name, and image in your post on Twitter or TikTok.",
  },
  {
    icon: Coins,
    title: "Token Gets Minted",
    description:
      "Our backend automatically mints your SPL token on Solana and uploads metadata to make it trade-ready.",
  },
  {
    icon: BarChart2,
    title: "Manage Your Token",
    description:
      "Access your token page with charts, trading links, and options to add liquidity or customize.",
  },
];

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

const faqs = [
  {
    question: "How long does it take to create a token?",
    answer:
      "Your token is created instantly after you tag @TokenBot on Twitter or TikTok. The entire process, including metadata setup, takes less than a minute.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No coding knowledge required! TokenBot handles all the technical aspects. Just tag us with your token details, and we'll do the rest.",
  },
  {
    question: "What information do I need to provide?",
    answer:
      "Just include your desired token name, ticker symbol, and an image in your social media post. We'll handle the token creation and setup.",
  },
  {
    question: "Is there a limit to how many tokens I can create?",
    answer:
      "There's no limit to the number of tokens you can create. Each token is unique and can be customized to your needs.",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Community Ready",
    description:
      "Built-in social features make it easy to build and engage with your token's community.",
  },
  {
    icon: TrendingUp,
    title: "Market Ready",
    description:
      "Instant liquidity pools and trading pairs ensure your token is ready for market action.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Available worldwide, allowing anyone to create and trade tokens on Solana.",
  },
];

// [import and data remain unchanged]

const Step = ({ icon: Icon, title, description }) => (
  <div className="p-7 rounded-2xl bg-white border border-[#F3C623] shadow-md hover:shadow-lg transition">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-12 h-12 bg-[#F3C623] text-white rounded-full flex items-center justify-center mb-2">
        <Icon size={25} />
      </div>
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
    </div>
    <p className="text-xs sm:text-sm text-[#4B5563]">{description}</p>
  </div>
);

const FeatureCard = ({ title, text }) => (
  <div className="p-1 text-white  rounded-lg hover:shadow-md transition">
    {/* <div className="w-10 h-10   flex items-center justify-center mb-2">
      <Icon size={20} />
    </div> */}
    <h4 className="text-2xl font-semibold text-primary mb-3">{title}</h4>
    <p className="text-l sm:text-sm text-grey">{text}</p>
  </div >
);

const FAQItem = ({ question, answer }) => (
  <div className="border-b border-[#F3C623]/20 last:border-0">
    <details className="group">
      <summary className="flex justify-between items-center cursor-pointer py-3 text-sm sm:text-base text-[#1F2937] font-medium hover:text-[#F3C623] transition-colors">
        <span>{question}</span>
        <svg
          className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <div className="pb-3 text-xs sm:text-sm text-[#4B5563]">{answer}</div>
    </details>
  </div>
);

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="p-5 rounded-xl border border-[#F3C623]/30 bg-white shadow hover:shadow-lg transition">
    <div className="w-12 h-12 bg-[#F3C623] text-white rounded-lg flex items-center justify-center mb-2">
      <Icon size={24} />
    </div>
    <h3 className="text-sm font-semibold text-[#1F2937] mb-1">{title}</h3>
    <p className="text-xs sm:text-sm text-[#4B5563]">{description}</p>
  </div>
);

const Landing = () => {
  return (
    <div className="bg-white text-[#1F2937] text-sm">
      {/* Hero Section */}
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
      </section>

      {/* How It Works */}
      <section className="px-6 sm:px-8 py-10 mb-10">
        <div className="max-w-4xl mx-auto mb-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-2">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] max-w-2xl mx-auto">
            Creating your own token is now as simple as making a social media
            post. Just three simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>



      {/* Features */}
      {/* <section className="px-6 sm:px-8 py-10">
        <div className="max-w-4xl mx-auto mb-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-2">
            Why Use TokenBot?
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563]">
            We make token creation effortless, secure, and instantly usable.
          </p>
        </div>

        <div className="container flex flex-col lg:flex-row items-center">
      <div className="flex w-full ">
        <img
          src="/iphone.png"
          alt="iPhone"
          className="w-150 h-auto object-contain"
        />
      </div>

      <div className="w-full">
        {features.map((f, i) => (
          <FeatureCard key={i} icon={f.icon} title={f.title} text={f.text} />
        ))}
      </div>
    </div>

      </section > */}
      <section className="px-6 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-5 text-[#1F2937]">
          Why Use TokenBot?
        </h2>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center px-10 pt-10 bg-black text-white rounded-3xl">

            {/* - Text */}
            <div className="text-center lg:text-left max-w-md order-1 lg:order-1">
              <h2 className="text-3xl font-bold">
                We make token creation effortless, secure, and instantly usable.
              </h2>
            </div>

            {/* - Carousel */}
            <div className=" order-2 lg:order-3">
              <Carousel features={features} />
            </div>

            {/* - Image */}
            <div className="overflow-hidden order-3 lg:order-2">
              <img
                src="/iphone.png"
                alt="iPhone"
                className="w-165 object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 sm:px-8 py-10">
        <div className="max-w-4xl mx-auto mb-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-2">
            Token Benefits
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] max-w-2xl mx-auto">
            Create tokens that are ready for success with our comprehensive
            suite of features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </section>
      {/* FAQs */}
      <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1F2937] mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#4B5563] max-w-2xl mx-auto">
              Everything you need to know about creating and managing your token
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl border border-[#F3C623]/30 divide-y divide-[#F3C623]/20 px-4 py-2 sm:p-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="text-center mt-6 px-2">
            <p className="text-xs sm:text-sm text-[#4B5563] mb-3">
              Still have questions?
            </p>
            <button className="inline-flex items-center text-[#F3C623] font-semibold text-sm hover:text-yellow-500 transition-colors">
              Contact Support
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#F3C623] text-white text-center px-6 sm:px-8 py-10">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          Ready to launch your token?
        </h3>
        <p className="text-xs sm:text-sm mb-4">
          Tag <span className="font-bold">@TokenBot</span> on Twitter or TikTok
          — we'll do the rest.
        </p>
        <button className="bg-white text-[#F3C623] font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-yellow-100 transition">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className=" bg-[#F3C623] text-[#4B5563] text-center text-xs pt-5 pb-5 border-t border-[#F3C623]/20">
        © {new Date().getFullYear()} TokenBot. All rights reserved.
      </footer>
    </div >
  );
};

export default Landing;

const Carousel = ({ features }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full ">
      {/* Feature Card */}
      <div className="flex justify-center items-center h-72">
        <FeatureCard
          // icon={features[current].icon}
          title={features[current].title}
          text={features[current].text}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-start gap-3">
        <button
          onClick={prevSlide}
          className=" transform -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className=" transform -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full"
        >
          →
        </button>
      </div>
    </div>
  );
};

