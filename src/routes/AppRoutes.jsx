import { Navigate, createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';
import DashboardLayout from '../layout/DashboardLayout';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import UserList from '../features/user/UserList';
import UserProfile from '../features/user/UserProfile';
import { useAuth } from '../hooks/useAuth';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export const router = createBrowserRouter([
  {
    element: <AuthLayout />, children: [
      { path: '/login', element: <Login /> },
    ]
  },
  {
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: '/dashboard', element: <Navigate to="/dashboard/users" /> },
      { path: '/dashboard/users', element: <UserList /> },
      { path: '/dashboard/profile/:id', element: <UserProfile /> },
    ]
  },
  { path: '*', element: <NotFound /> }
]);
