import {Message} from "src/component/messageBlock/message/Message";
import styles from "src/component/messageBlock/MessageBlock.module.scss";

export const MessageBlock = () => {
  return (
    <div className={styles.wrapper}>
      <Message />
    </div>
  );
};