import React, { useEffect, useState } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=100');
      const data = await response.json();
      setUsers(data.results);
    };

    fetchUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nro</th>
          <th>Foto</th>
          <th>Nombre completo</th>
          <th>Correo</th>
          <th>Género</th>
          <th>Celular</th>
          <th>País</th>
          <th>Ciudad</th>
          <th>Calle</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <img src={user.picture.thumbnail} alt="User" />
            </td>
            <td>
              {`${user.name.first} ${user.name.last}`}
            </td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.cell}</td>
            <td>{user.location.country}</td>
            <td>{user.location.city}</td>
            <td>{`${user.location.street.name} ${user.location.street.number}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
