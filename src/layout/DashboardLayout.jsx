import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function DashboardLayout() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-2">
        <Link to="/dashboard/users" className="block">Users</Link>
        <Link to="/dashboard/profile/5" className="block">Profile</Link>
        <button onClick={logout} className="mt-4 bg-red-600 px-3 py-1 rounded">Logout</button>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}