import React, { useEffect, useState } from 'react';
import AccountContainer from './AccountContainer';
import './App.css';

const isEmpty = (arr) => (arr.length === 0 ? true : false);

const url = 'http://localhost:8001';

function App() {
  const [bankData, setBankData] = useState([]);
  const [searchData, setSearchData] = useState({
    text: '',
  });

  useEffect(async () => {
    if (isEmpty(bankData)) {
      try {
        const data = await fetch(`${url}/transactions`);
        const res = await data.json();
        setBankData(res);
      } catch (error) {
        console.error(error);
      }
    }
  }, [bankData]);

  function handleSearch(e) {
    e.preventDefault();
    let arr = bankData.filter(
      (ele) => ele.category.toLowerCase() === searchData.text.toLowerCase()
    );
    setBankData(arr);
  }

  return (
    <div className='ui raised segment'>
      <div className='ui segment violet inverted'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer
        bankData={bankData}
        handleSearch={handleSearch}
        setSearchData={setSearchData}
        searchData={searchData}
      />
    </div>
  );
}

export default App;
