import {MessageList} from "src/component/messageBlock/messageList/MessageList";
import styles from "src/component/messageBlock/MessageBlock.module.scss";

export const MessageBlock = () => {
  return (
    <div className={styles.wrapper}>
      <MessageList />
    </div>
  );
};