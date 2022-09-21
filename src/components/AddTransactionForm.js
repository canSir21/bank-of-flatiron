import React, { useState } from 'react';

function AddTransactionForm({formData, setFormData, handleSubmit}) {
 

  return (
    <div className='ui segment'>
      <form className='ui form' onSubmit={(e)=> e.preventDefault()}>
        <div className='inline fields'>
          <input
            type='date'
            name='date'
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            value={formData.date}
          />
          <input
            type='text'
            name='description'
            placeholder='Description'
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
          <input
            type='text'
            name='category'
            placeholder='Category'
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            value={formData.category}
          />
          <input
            type='number'
            name='amount'
            placeholder='Amount'
            step='0.01'
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            value={formData.amount}
          />
        </div>
        <button className='ui button' type='submit' onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
