
import {
  Globe,
  TrendingUp,
  Users
} from "lucide-react";

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


const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="p-5 rounded-xl border border-[#F3C623]/30 bg-white shadow hover:shadow-lg transition">
    <div className="w-12 h-12 bg-[#F3C623] text-white rounded-lg flex items-center justify-center mb-2">
      <Icon size={24} />
    </div>
    <h3 className="text-sm font-semibold text-[#1F2937] mb-1">{title}</h3>
    <p className="text-xs sm:text-sm text-[#4B5563]">{description}</p>
  </div>
);


const BenefitSection = () => {

  return (

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

  )
}
export default BenefitSection;
