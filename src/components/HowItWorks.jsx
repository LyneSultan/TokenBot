import { stepColors } from './../colors/stepColors';
import Step from "./StepCard";
const steps = [
  {
    icon: './../assets/react.svg',
    title: 'Post on Social Media',
    description: 'Tag @TokenBot with your $TICKER, token name, and image in your post on Twitter or TikTok.',
    ...stepColors.purple,

  },
  {
    icon: '🪙',
    title: 'Token Gets Minted',
    description: 'Our backend automatically mints your SPL token on Solana and uploads metadata to make it trade-ready.',
    ...stepColors.pink,

  },
  {
    icon: '📊',
    title: 'Manage Your Token',
    description: 'Access your token page with charts, trading links, and options to add liquidity or customize.',
    ...stepColors.blue,

  }
];

const HowItWorks = () => {


  return (
    <div className="py-20 px-4 bg-gray-950" >
      <div className="container mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Creating your own token is now as simple as making a social media post.
            No coding, no complex setup, just three simple steps.
          </p>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, index) => (
          <Step
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            color={step.color}
            borderColor={step.borderColor}
            iconBg={step.iconBg}
          />
        ))}
      </div>
    </div >

  );


}
export default HowItWorks;
