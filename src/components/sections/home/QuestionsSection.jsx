
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

const FAQItem = ({ question, answer }) => (
  <div className="border-b border-primary last:border-0">
    <details className="group">
      <summary className="flex justify-between items-center cursor-pointer py-3 text-sm sm:text-base text-primary font-medium hover:text-[#F3C623] transition-colors">
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
const QuestionsSection = () => {
  return (
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

        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-primary divide-y divide-[#F3C623]/20 px-4 py-2 sm:p-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="text-center mt-6 px-2 flex items-center justify-center gap-3" >
          <p className="text-xs sm:text-sm text-[#4B5563]">
            Still have questions?
          </p>
          <button className="inline-flex items-center text-primary font-semibold text-sm hover:text-yellow-500 transition-colors">
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

  )
}

export default QuestionsSection;
