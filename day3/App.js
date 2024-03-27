// App.js
import React, { useState } from 'react';
import { Customers} from "./components/Customers";
import { AddCustomer } from "./components/AddCustomer";
import "./styles.css";
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddCustomer = () => {
    if (name && email && phone) {
      const newCustomer = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        phone: phone
      };
      setCustomers([...customers, newCustomer]);
      setName('');
      setEmail('');
      setPhone('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleDeleteCustomer = (id) => {
    const updatedCustomers = customers.filter(customer => customer.id !== id);
    setCustomers(updatedCustomers);
  };

  return (
    <div className="App">
      <h1>Customer Management System</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>
      <div className="customer-list">
        <h2>Customers:</h2>
        {customers.map(customer => (
          <div key={customer.id} className="customer">
            <p>Name: {customer.name}</p>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
