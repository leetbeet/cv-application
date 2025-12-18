import { useState } from 'react';

export default function GeneralInfo({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phoneNum });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          aria-label="full name"
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          aria-label="email address"
          required
        />
      </label>

      <label>
        Phone number
        <input
          type="tel"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          placeholder="Enter phone number"
          aria-label="phone number"
          required
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}
