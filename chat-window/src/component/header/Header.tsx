import styles from "src/component/header/Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        Chat window
      </p>
    </div>
  );
};