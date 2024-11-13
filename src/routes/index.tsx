import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import { TasksPage } from '@/pages/test/Tasks';
import { LoginPage } from '@/pages/common/LoginPage';
import { ProtectedRoute } from '@/routes/ProtectedRoute';
// import { InPatient } from '@/components/InPatient';
// import { Login } from '@/components/Login';

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
  // {
  //   path: 'login',
  //   element: <Login/>
  // },
  // {
  //   path: 'inPatientList',
  //   element: <InPatient/>
  // }
]);