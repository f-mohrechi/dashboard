import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchUserById } from './api';
import Spinner from '../../ui/Spinner';

export default function UserProfile() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
  });

  if (isLoading) return <Spinner />;
  if (error) return <p className="text-red-500">Failed to load user.</p>;

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
}