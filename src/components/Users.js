import React from "react";
import { Link } from "react-router-dom";

function Users() {
  return (
    <>
      <div>Users</div>
      <ul>
        {[
          { id: 2, name: "Bob" },
          { id: 1, name: "Stan1" },
          { id: 12, name: "Bill" },
          { id: 13, name: "John" },
            {id: 45, name: "SYT"}
        ].map(el => (
          <li key={el.id}>
            <Link
              state={{ name: el.name }}
              to={{
                pathname: `/users/${el.id}`,
                state: { name: el.name }
              }}
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;
