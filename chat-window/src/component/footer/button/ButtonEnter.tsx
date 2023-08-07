import {useEffect} from "react";
import {Button} from "antd";
import {useMessages} from "src/component/messageBlock/MessagesContext";
import {useInputValue} from "src/component/footer/FooterContext";
import {getRandomNumber} from "src/utils/getRandomNumber";
import {getNewMessage} from "src/utils/getNewMessage";
import {OWNER_ID, OWNER_NAME} from "src/component/footer/inputField/InputField";
import styles from "src/component/footer/button/ButtonEnter.module.scss";

export const ButtonEnter = () => {
  const {messagesValues, setMessagesValues} = useMessages();
  const {inputValue, setInputValue, updatedValue, setUpdatedValue} = useInputValue();

  const copy = Object.assign([], messagesValues);

  const sendMessage = () => {
    // It's better to use uuid library
    const idMessage = getRandomNumber(100, 10000);
    const newMessage = getNewMessage(idMessage, inputValue, OWNER_ID, OWNER_NAME);
    copy.push(newMessage);

    setMessagesValues(copy);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    sendMessage();
    setMessagesValues(copy);
    setUpdatedValue(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    // console.log(ok);
  }, [updatedValue]);

  return (
    <Button
      className={styles.button}
      onClick={handleClick}
    >
      Send
    </Button>
  );
};