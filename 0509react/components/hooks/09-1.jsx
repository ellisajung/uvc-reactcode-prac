import { useEmailValidation } from './09'

export const SignUpForm09 = () => {
  const emailValidation = useEmailValidation();

  const handleEmailChange = (event) => {
    const email = event.target.value;
    emailValidation.validateEmail(email);
  };

  return (
    <div>
      <label>이메일</label>
      <input
        type="text"
        onChange={handleEmailChange}
      />
      <p>{emailValidation.isEmailValid ? '올바른 이메일 주소입니다' : '올바른 이메일 주소를 입력해주세요'}</p>
    </div>
  );
};