// auth.jsx
import { useMemberInfo } from "./02"

export function Auth02() {
  const id = useMemberInfo('', 'id-input');
  const password = useMemberInfo('', 'password-input');

  return (
    <>
      id: <input id="id-input" defaultValue={id}/>
      <div>
        {`id: ${id}`}
      </div>
      password: <input id="password-input" defaultValue={password} />
      <div>
        {`password: ${password}`}
      </div>
    </>
  );
}