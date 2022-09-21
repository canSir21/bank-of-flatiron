import React from 'react';
import Transaction from './Transaction';

function TransactionsList(props) {
  return (
    <table className='ui celled striped padded table'>
      <tbody>
        <tr>
          <th>
            <h3 className='ui center aligned header'>Date</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Description</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Category</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {props.bankData.map(({ id, description, amount, category,date }) => (
          <Transaction
            key={id}
            id={id}
            description={description}
            amount={amount}
            category={category}
            date={date}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
