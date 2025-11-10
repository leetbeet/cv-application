import { useState } from 'react';

export default function GeneralInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumChange = (e) => {
    setPhoneNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to send data to resume
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full name
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Email
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Phone number
        <input type="text" value={phoneNum} onChange={handlePhoneNumChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
