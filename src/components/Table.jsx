import React, { useEffect, useState } from "react";
import { DataGrid  } from "@mui/x-data-grid";

import "./table.css";

const Table = ({ users, columns, rows }) => {
  
  return (
    <div className="table">
      <DataGrid
        className=".my-data-grid"
        disableColumnMenu={true}
        sx={{
          width: "100%",
          border: "none",
          "& .MuiDataGrid-cell": {
            border: "none",
          },
        }}
        rows={rows}
        columns={[
          ...columns,
          { field: "col1", sortable: false },
          { field: "col2", sortable: false },
          { field: "col3", sortable: false },
          { field: "col4", sortable: false },
        ]}
      />
    </div>
  );
};

export default Table;
