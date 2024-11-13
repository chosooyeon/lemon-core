import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import { TasksPage } from '@/pages/Tasks';
import { LoginPage } from '@/pages/LoginPage';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { InPatient } from '@/components/InPatient';

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
    path: 'inPatientList',
    element: <InPatient/>
  }
]);