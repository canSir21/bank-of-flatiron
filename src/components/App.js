import { Footer } from 'antd/lib/layout/layout';
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
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
    id: 0,
  });
  useEffect(async () => {
    if (isEmpty(bankData)) {
      await handleFetch();
    }
  }, [bankData]);

  async function handleFetch() {
    try {
      const data = await fetch(`${url}/transactions`);
      const res = await data.json();
      setBankData(res);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSearch(e) {
    await handleFetch();
    setBankData(
      bankData.filter(
        (ele) => ele.category.toLowerCase() === searchData.text.toLowerCase()
      )
    );
  }

  async function updateJsonServer() {
    const rawResponse = await fetch(`${url}/transactions`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formData),
    });
    const response = await rawResponse.json();
    setBankData(response);
  }

  function handleAddTRansaction(e) {
    e.preventDefault();
    if (bankData.length > 0) {
      setFormData({ ...formData, id: bankData[bankData.length - 1].id + 1 });
      updateJsonServer();
      window.location.reload()
    }
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
        handleSubmit={handleAddTRansaction}
        setFormData={setFormData}
        formData={formData}
      />
    </div>
  );
}

export default App;
