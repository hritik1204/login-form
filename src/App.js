import "./App.css";
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from "./pages/Login";
import Users from "./pages/Users";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/users");
    }
    async function fetchUsers() {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    }

    fetchUsers();
  }, []);
  return (
     <Routes>
      <Route path='/' element={<Login users={users} username={username} password={password} setUsername={setUsername} setPassword={setPassword} />} />
      <Route path='/users' element={<Users users={users}/>} />
     </Routes>
  );
}
 
export default App;
