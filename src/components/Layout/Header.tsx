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
            <Link to="/inPatientList" className="text-gray-600 hover:text-gray-900">
              inPatientList
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};