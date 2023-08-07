import {useEffect} from "react";
import {Input} from "antd";
import {useMessages} from "src/component/messageBlock/MessagesContext";
import {useInputValue} from "src/component/footer/FooterContext";
import {fakeMessagesList} from "src/utils/fakeMessagesList";
import {getNewMessage} from "src/utils/getNewMessage";
import {getRandomNumber} from "src/utils/getRandomNumber";
import styles from "src/component/footer/inputField/InputField.module.scss";

export const OWNER_NAME = "Owner";
export const OWNER_ID = 2;
export const FRIEND_NAME = "Olga";
export const FRIEND_ID = 1;

export const InputField = () => {
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

  const getFriendMessage = () => {
    setTimeout(() => {
      // It's better to use uuid library
      const idMessage = getRandomNumber(1, 100);
      const fakeText = fakeMessagesList[getRandomNumber(0, 7)];
      const newMessage = getNewMessage(idMessage, fakeText, FRIEND_ID, FRIEND_NAME);
      copy.push(newMessage);

      setMessagesValues(copy);
    }, 5000);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setUpdatedValue(inputValue);
      sendMessage();
      setMessagesValues(copy);
      setInputValue("");
    }
  };

  useEffect(() => {
    getFriendMessage();
  }, [updatedValue]);

  return (
    <Input
      placeholder="Enter text"
      className={styles.input}
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};