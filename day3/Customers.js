import React, { useState } from "react";

export const customers = ({ name, email, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Name" name="name" defaultValue={name} />
          <input placeholder="Email" name="email" defaultValue={email} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="customers">
          <span className="customer-name">{name}</span>
          <span className="customer-email">{email}</span>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};
