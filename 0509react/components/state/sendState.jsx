import { useState } from 'react';

export default function SendState() {
  const [to, setTo] = useState('아메리카노');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`You said ${message} to ${to}`);
  }

  return (
    <form onSubmit={handleSubmit} className='send-state state'>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="아메리카노">아메리카노</option>
          <option value="모카라떼">모카라떼</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
