import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./api";

const UserList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <ul className="space-y-2">
      {data.map((user) => (
        <li key={user.id} className="bg-white shadow p-4 rounded">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
