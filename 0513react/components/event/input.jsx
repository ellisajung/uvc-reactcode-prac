import { useState } from 'react'

export function InputEvent() {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');

  // 사용자 입력 처리
  const handleInputChange = (event) => {
    console.log('Handling input change for a text input:',
    event.target.value);
  };

  // 상태 관리
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // 폼 유효성 검사
  const validateEmail = (event) => {
    setEmail(event.target.value);
    if (!event.target.value.includes('@')) {
      console.log('Please enter a valid email.');
    }
  };

  // 사용자 경험 향상
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', { value, email });
  };
  const handleFocus = () => { console.log('Input field is focused'); };
  const handleBlur = () => { console.log('Input field is blurred'); };

  // 인터랙티브한 UI
  const handleDragStart = (event) => { console.log('Drag started'); };
  const handleDrop = (event) => {
    event.preventDefault(); // 기본 동작 방지
    console.log('Dropped');
  };

  return (
    <div className='event'>
      <input type="text" onChange={handleInputChange} placeholder="Type here for input change" />
      <input type="text" value={value} onChange={handleChange} placeholder="Manage state change" />
      <input type="email" value={email} onChange={validateEmail} placeholder="Enter your email" />
      <form onSubmit={handleSubmit}>
        <input type="text" onFocus={handleFocus} onBlur={handleBlur} placeholder="Focus and blur" />
        <button type="submit">Submit Form</button>
      </form>
      <div draggable="true" onDragStart={handleDragStart} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
        Drag me
      </div>
    </div>
  );
}