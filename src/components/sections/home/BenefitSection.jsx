
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
  <div className="p-5">
    <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-2">
      <Icon size={24} color="Blue" />
    </div>
    <h3 className="text-sm font-semibold text-dark mb-1">{title}</h3>
    <p className="text-xs sm:text-sm text-muted">{description}</p>
  </div>
);

const BenefitSection = () => (
  <section className="px-6 sm:px-8 py-10 bg-section my-10 rounded-full">
    <div className="max-w-4xl mx-auto mb-6 text-center">
      <h2 className="text-xl sm:text-xl font-bold text-highlight mb-3"> Key Benefits</h2>

      <h2 className="text-xl sm:text-4xl font-bold text-dark mb-2">
        Key Benefits of Using Tokens
      </h2>
      <p className="text-xs sm:text-sm text-muted max-w-2xl mx-auto">
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
);

export default BenefitSection;
