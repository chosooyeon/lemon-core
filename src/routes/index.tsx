import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
// import { HomePage } from '@/pages/Home';
import { TasksPage } from '@/pages/Tasks';
import { LoginPage } from '@/pages/LoginPage';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // {
      //   index: true,
      //   element: <HomePage />,
      // },
      {
        path: 'tasks',
        element: (
          // <ProtectedRoute>
            <TasksPage />
          // </ProtectedRoute>
        ),
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);