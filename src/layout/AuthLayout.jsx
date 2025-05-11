import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-100">
      <div className="p-6 bg-white shadow rounded w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}