import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from './api';
import Spinner from '../../ui/Spinner';

export default function UserList() {
  const { data, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });

  if (isLoading) return <Spinner />;
  if (error) return <p className="text-red-500">Error loading users.</p>;

  return (
    <ul className="space-y-2">
      {data.map((user) => (
        <li key={user.id} className="bg-white shadow p-4 rounded">
          {user.name}
        </li>
      ))}
    </ul>
  );
}
