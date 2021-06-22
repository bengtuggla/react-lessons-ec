import React from 'react';

const CustomerRow = ({ customer, deleteCustomerCallback }) => {
  const removeCustomer = () => {
    deleteCustomerCallback(customer.id);
  };

  return (
    <div>
      <tr>
        <th>{customer.id}</th>
        <td>{customer.name}</td>
        <td>
          <button onClick={removeCustomer}>TA BORT</button>{' '}
        </td>
      </tr>
    </div>
  );
};

export default CustomerRow;
