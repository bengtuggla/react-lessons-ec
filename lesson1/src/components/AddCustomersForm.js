import React from 'react';
import { useRef } from 'react';

const AddCustomersForm = ({ addCustomerCallback }) => {
  const customerRef = useRef();

  const addCustomer = (e) => {
    e.preventDefault();
    addCustomerCallback(customerRef.current.value);
    customerRef.current.value = null;
  };

  return (
    <div>
      <form onSubmit={addCustomer}>
        <h4>Input Customer</h4>
        <input type='text' placeholder='Inputta här' ref={customerRef} />
        <button>LÄGG TILL</button>
      </form>
    </div>
  );
};

export default AddCustomersForm;
