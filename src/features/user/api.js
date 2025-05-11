import client from '../../api/client';

export const fetchUsers = async () => {
  const { data } = await client.get('/users');
  return data;
};

export const fetchUserById = async (id) => {
  const { data } = await client.get(`/users/${id}`);
  return data;
};
