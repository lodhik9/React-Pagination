import './App.css';
import logo from './logo.svg';
import React, { useState } from 'react';
import JsonData from './MOCK_DATA.json';
import ReactPaginate from 'react-paginate';

function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 51));
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 10;
  const pageVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(users.length / userPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  }

  const displayUsers = users.slice(pageVisited, pageVisited + userPerPage)
    .map((user) => {
      return (
        <div className="user">
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    })

  return (
    <div className="App">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={pageChange}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
