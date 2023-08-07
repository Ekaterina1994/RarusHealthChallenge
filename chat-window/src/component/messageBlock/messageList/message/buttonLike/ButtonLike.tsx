import {Button} from "antd";
import {useState} from "react";
import styles from "src/component/messageBlock/messageList/message/buttonLike/ButtonLike.module.scss";

export const ButtonLike = () => {
  const [btnValue, setBtnValue] = useState<string>("♡");

  const likeMessage = () => {
    setBtnValue("♥");
  };

  return (
    <Button
      type="text"
      className={styles.button}
      onClick={likeMessage}
    >
      {btnValue}
    </Button>
  );
};
