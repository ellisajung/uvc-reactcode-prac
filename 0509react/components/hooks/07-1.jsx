import { useIncrementCount } from './07';

export function TestResult07() {
  const count = useIncrementCount();

  return (
    <div className="box07">
      {count}
      {'JSX 잘됨'+count}
      {`백틱도 잘됨 ${count}`}
    </div>
  );
}

