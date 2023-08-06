import {useState, useEffect} from "react";
import {Input} from "antd";
import {getDate} from "src/utils/getDate";
import {getRandomNumber} from "src/utils/getRandomNumber";
import {useMessages} from "src/component/messageBlock/MessagesContext";
import styles from "src/component/footer/inputField/InputField.module.scss";

export const InputField = () => {
  const {messagesValues, setMessagesValues} = useMessages();

  const [inputValue, setInputValue] = useState("");
  const [updated, setUpdated] = useState("");

  const copy = Object.assign([], messagesValues);

  const func = () => {

    copy.push(
      {
        // It's better to use uuid library
        id: getRandomNumber(100, 10000),
        text: `${inputValue}`,
        date: `${getDate()}`,
        user: {
          id: 2,
          name: "Victor",
        },
      },
    );
    setMessagesValues(copy);

  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setUpdated(inputValue);
      console.log(inputValue);
      console.log(getDate());
      func();
      setMessagesValues(copy);
      setInputValue("");
    }
  };

  useEffect(() => {
    console.log(copy);
  }, [updated]);

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