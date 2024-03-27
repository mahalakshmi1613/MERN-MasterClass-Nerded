import React from "react";

export const AddCustomer = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add Customers</h3>
      <input placeholder="Name" name="name" />
      <input placeholder="Email" name="email" />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};