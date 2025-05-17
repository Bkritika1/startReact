import { useState } from 'react';

export default function SyncedInputs() {
    const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input label="First input" value={text} handleChange={handleChange}/>
      <Input label="Second input" value={text} handleChange={handleChange}/>
    </>
  );
}

function Input({ label , value , handleChange }) {

  return (
    <label>
      {label}
      {' '}
      <input
      value={value}
        onChange={handleChange}
      />
    </label>
  );
}
