import React from 'react';
import CustomerRow from './CustomerRow';

const CustomerList = ({ customers, deleteCustomerCallback }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <CustomerRow
                customer={customer}
                key={customer.id}
                deleteCustomerCallback={deleteCustomerCallback}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
