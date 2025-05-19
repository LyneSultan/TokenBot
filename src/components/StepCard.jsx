
const Step = ({ icon, title, description, color, borderColor, iconBg }) => {
  return (
    <div className={`p-6 rounded-xl border backdrop-blur-sm bg-gradient-to-br ${color} ${borderColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
      <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-6 text-xl`}>
        <img src="/assets/react.svg" alt={title} className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Step;
