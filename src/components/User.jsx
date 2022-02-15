import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const params = useParams();
  return (
    <div>
      <p>Hello {params.username} !</p>
    </div>
  );
}

export default User;
