import { useLocation } from 'react-router-dom';

const TokenDetailsPage = () => {
  const { state } = useLocation();
  const token = state?.token;
  console.log(state.token);

  if (!token) {
    return (
      <div className="pt-24 px-4 text-white">
        <h2 className="text-2xl font-bold">Token not found</h2>
        <p>You must access this page from the Explore Tokens page.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 text-black">
      <h1 className="text-3xl font-bold mb-4">{token.name} ({token.ticker})</h1>
      <img src={token.logoUrl} alt={token.name} className="w-24 h-24 rounded-full mb-4" />
      <p><strong>Created by:</strong> {token.creator}</p>
    </div>
  );
};

export default TokenDetailsPage;
