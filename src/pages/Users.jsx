import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import "./users.css";
import Table from "../components/Table";

const Users = ({ users }) => {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState('')
  const [genderFilter, setGenderFilter] = useState("");
  const filteredRows = genderFilter ? rows.filter((row) => row.gender === genderFilter) : rows 
  const filterByName = search ? filteredRows.filter((item) => item.firstName.toLowerCase().indexOf(search.toLowerCase()) !== -1 || item.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 ) : filteredRows
  const columns = [
    {
      field: "col1",
      headerName: "User",
      headerClassName: "table-col1",
      renderCell: (params) => {
        return (
          <div className="table-cell">
            <img className="table-img" src={params.row.image} />
            <p className="table-firstname">{params.row.firstName}</p>
          </div>
        );
      },
      width: 215,
    },
    {
      field: "col2",
      headerName: "Email",
      headerClassName: "table-col",
      renderCell: (params) => {
        return (
          <div className="table-cell">
            <p className="table-email">{params.row.email}</p>
          </div>
        );
      },
      width: 199,
    },
    {
      field: "col3",
      headerName: "Age",
      headerClassName: "table-col",
      renderCell: (params) => {
        return (
          <div className="table-cell">
            <p className="table-age">{params.row.age}</p>
          </div>
        );
      },
      width: 90,
    },
    {
      field: "col4",
      headerName: "Gender",
      headerClassName: "table-col",
      renderCell: (params) => {
        return (
          <div className="table-cell">
            <p className="table-gender">{params.row.gender}</p>
          </div>
        );
      },
      width: 136,
    },
  ];

  useEffect(() => {
    const updateTable = users.map((user) => {
      console.log(user.id);
      return { ...user, id: user.id, col4: user.gender };
    });
    setRows(updateTable);
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="user-page">
      <div className="nav-header">
        <h1 className="heading">FreJun Task</h1>
        <button onClick={handleLogout} className="logout-btn">
          <span>Logout</span>
        </button>
      </div>
      <div className="search-wrapper">
        <div className="search">
          <div className="search-components">
            <div className="search-bar">
              <div style={{ width: "20px", height: "20px" }}>
                <MdSearch style={{ width: "20px", height: "20px" }} />
              </div>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="search-input"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="base-filter">
          <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} id="gender">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <Table users={users} rows={filterByName} columns={columns}/>
    </div>
  );
};

export default Users;
