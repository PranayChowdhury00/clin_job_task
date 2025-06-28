// UsersPage.jsx
import React, { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://alibackend.duckdns.org/company_user_management/user_list/', {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
          }
        });

        const data = await res.json();
        setUsers(data || []);
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };

    fetchUsers();
  }, [token]);

  const handleInvite = async () => {
    if (!email.trim()) return;

    try {
      const res = await fetch('https://alibackend.duckdns.org/company_user_management/add_user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ email })
      });

      if (!res.ok) throw new Error('Failed to invite user');

      alert('User invited successfully!');
      setEmail('');
    } catch (err) {
      console.error('Invite error:', err);
      alert('Failed to invite user.');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">User Management</h1>

      <div className="flex gap-2 max-w-md">
        <input
          type="email"
          placeholder="Enter user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleInvite}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <FaUserPlus /> Invite
        </button>
      </div>

      <div>
        <h2 className="text-lg font-semibold mt-4">User List</h2>
        <ul className="list-disc pl-5 mt-2">
          {users.map((user, idx) => (
            <li key={idx}>{user.email || 'Unnamed User'}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
