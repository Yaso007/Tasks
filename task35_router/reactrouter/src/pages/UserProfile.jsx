import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  const dummyUser = {
    42: { name: 'Jason', email: 'jason@gmail.com' },
    101: { name: 'Jane Smith', email: 'jane@hotmail.com' }
  };

  const user = dummyUser[id] || { name: 'Unknown User', email: 'Not available' };

  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserProfile;
