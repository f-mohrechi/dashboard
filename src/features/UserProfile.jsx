"use client";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "./api";

const UserProfile = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load user.</p>;

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-2">{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
};

export default UserProfile;
