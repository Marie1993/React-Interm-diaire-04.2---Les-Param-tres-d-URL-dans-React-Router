import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const users = [
    'angrymouse274',
    'whiteostrich844',
    'greenswan545',
    'purpleleopard311',
  ];
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {users.map((username, index) => {
            return (
              <li key={index}>
                <Link to={`/users/${username}`}> {username} </Link>
              </li>
            );
          })}

          <Link to="/users/wildcoder">wildcoder</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
