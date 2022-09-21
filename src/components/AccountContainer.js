import React from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';

function AccountContainer(props) {
  return (
    <div>
      <Search
        setSearchData={props.setSearchData}
        searchData={props.searchData}
        handleSearch={props.handleSearch}
      />
      <AddTransactionForm />
      <TransactionsList bankData={props.bankData} />
    </div>
  );
}

export default AccountContainer;
