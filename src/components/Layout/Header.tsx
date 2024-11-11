import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="text-gray-600 hover:text-gray-900">
              Profile
            </Link>
            <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};