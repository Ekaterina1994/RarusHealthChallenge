import {useState, useEffect} from "react";
import {Input} from "antd";
import {getDate} from "src/utils/getDate";
import {getRandomNumber} from "src/utils/getRandomNumber";
import {messagesList, useMessages} from "src/component/messageBlock/MessagesContext";
import {useInputValue} from "src/component/footer/FooterContext";
import {fakeMessagesList} from "src/utils/empty";
import styles from "src/component/footer/inputField/InputField.module.scss";

// let current = 0;

export const InputField = () => {
  const {messagesValues, setMessagesValues} = useMessages();
  const {inputValue, setInputValue} = useInputValue();

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


  const getMessage = () => {
    const timerId = setTimeout(() => {
      copy.push(fakeMessagesList[ getRandomNumber(0, 7)]);
      setMessagesValues(copy);
    }, 5000);
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
    getMessage();
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