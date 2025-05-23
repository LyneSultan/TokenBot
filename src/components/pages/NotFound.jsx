import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-9xl font-extrabold text-gradient">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page not found</h2>
      <p className="text-gray-600 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-primary text-white rounded-full shadow-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
