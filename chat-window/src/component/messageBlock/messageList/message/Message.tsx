import styles from "src/component/messageBlock/messageList/message/Message.module.scss";
interface Message {
  text: string;
  date: string;
  username: string;
  id: number;
}

export const Message = (props: Message) => {
  const idCondition = props.id > 100;

  return (
    <div className={(idCondition) ? styles.wrapperOwner : styles.wrapper}>
      <div className={(idCondition) ? styles.cycleOwner : styles.cycle} />
      <div className={styles.messageWrapper}>
        <p className={styles.username}>
          {props.username}
        </p>
        <p className={(idCondition) ? styles.textOwner : styles.text}>
          {props.text}
        </p>
        <p className={styles.date}>
          {props.date}
        </p>
      </div>
    </div>
  );
};