import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import { TasksPage } from '@/pages/Tasks';
import { LoginPage } from '@/pages/LoginPage';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { InPatient } from '@/components/InPatient';
import { Login } from '@/components/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: 'tasks',
        element: (
          // <ProtectedRoute>
            <TasksPage />
          // </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'inPatientList',
    element: <InPatient/>
  }
]);