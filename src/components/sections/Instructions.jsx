
import {
  BarChart2,
  Coins,
  Twitter
} from "lucide-react";

export const steps = [
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

const StepCard = ({ icon: Icon, title, description }) => (
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

const Instructions = () => {
  return (
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
          <StepCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  )
}
export default Instructions;
