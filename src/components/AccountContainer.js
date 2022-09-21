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
      <AddTransactionForm  
      formData={props.formData}
      handleSubmit={props.handleSubmit}
      setFormData={props.setFormData}
      />
      <TransactionsList bankData={props.bankData} />
    </div>
  );
}

export default AccountContainer;
