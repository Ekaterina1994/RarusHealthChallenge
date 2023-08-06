import styles from "src/component/header/Header.module.scss";

const title = "Chat window";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        {title}
      </p>
    </div>
  );
};