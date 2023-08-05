import styles from "src/component/messageBlock/message/Message.module.scss";

export const Message = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cycle} />
      <div className={styles.messageWrapper}>
        <p className={styles.username}>
          Olga
        </p>
        <p className={styles.text}>
          Hi sdfsdfsdk sdfsdfkl jsdf eof sdfdsk feo fs fjsoi eoif sfj sdo fei sod jfsiej soifj s
        </p>
        <p className={styles.date}>
          2023.04.04
        </p>
      </div>
    </div>
  );
};