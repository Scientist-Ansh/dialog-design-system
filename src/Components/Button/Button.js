import styles from './Button.module.css';

const Button = ({ variant, text, onClick }) => {
  return (
    <button className={styles.btn + ' ' + styles[variant]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
