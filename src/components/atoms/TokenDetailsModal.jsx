const TokenDetailsModal = ({ token, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40 flex justify-center items-center">
      <div className="w-full max-w-md rounded-2xl shadow-lg p-6 bg-white border border-primary text-dark relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold text-gray-400 hover:text-black"
        >
          &times;
        </button>

        <div className="flex flex-col items-center">
          <img
            src={token.logoUrl}
            alt={token.name}
            className="w-24 h-24 rounded-full border-4 border-primary shadow-md mb-4"
          />
          <h1 className="text-2xl font-bold text-center text-gradient">
            {token.name} <span className="text-muted">({token.ticker})</span>
          </h1>

          <p className="mt-2 text-sm text-muted"><strong>Creator:</strong> {token.creator}</p>

          {token.description && (
            <p className="mt-4 text-center text-sm text-dark">{token.description}</p>
          )}

          {token.network && (
            <p className="mt-2 text-sm text-highlight"><strong>Network:</strong> {token.network}</p>
          )}

          {token.marketCap && (
            <p className="mt-2 text-sm text-highlight">
              <strong>Market Cap:</strong> ${token.marketCap.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenDetailsModal;