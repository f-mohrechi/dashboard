import { Outlet, Link } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-2">
        <Link to="/dashboard/users" className="block">Users</Link>
        <Link to="/dashboard/profile/1" className="block">Profile</Link>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
