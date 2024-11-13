import { Link } from 'react-router-dom';

export const SideComp = () => {
  const menuItems = [
    { label: 'Dashboard', path: '/', icon: '📊' },
    { label: 'Projects', path: '/', icon: '📁' },
    { label: 'Tasks', path: '/tasks', icon: '✓' },
    { label: 'Settings', path: '/', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="mt-5 px-2">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="flex items-center rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
