// components/Users.js
import React, { useEffect, useState } from "react";
import API from "../api";

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data.slice(0, 5));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async() => {
    try {
      const res = await API.post("/users", { name });
      setUsers([...users, res.data]);
      setName("");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await API.delete(`/users/${id}`);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const editUser = (user) => {
    setName(user.name);
    setEditId(user.id);
  };

  const updateUser = async () => {
    try {
      const res = await API.put(`/users/${editId}`, { name });

      const updated = users.map((u) =>
        u.id === editId ? res.data : u
      );

      setUsers(updated);
      setName("");
      setEditId(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>CRUD App (Axios)</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {editId ? (
        <button onClick={updateUser}>Update</button>
      ) : (
        <button onClick={addUser}>Add</button>
      )}
      <hr />
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>

          <button onClick={() => editUser(user)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Users;