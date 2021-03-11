import React from 'react';

const Navbar =() => (

  <nav>
    <ul>
      <li>
        <a href="/users/sign_out" data-method="delete">
          Logout
        </a>
      </li>
    </ul>
  </nav>
)

export default Navbar