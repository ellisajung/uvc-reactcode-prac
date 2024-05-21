import '@styles/module/bread1.css';
import styles from '@styles/module/bread2.module.css';

function Bread1() {
  return <div className="bread1">CSS</div>;
}

function Bread2() {
  return <div className={styles.bread2}>module.css</div>;
}

export { Bread1, Bread2 };