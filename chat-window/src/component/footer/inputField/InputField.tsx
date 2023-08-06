import {useState, useEffect} from "react";
import {Input} from "antd";
import {getDate} from "src/utils/getDate";
import {getRandomNumber} from "src/utils/getRandomNumber";
import {useMessages} from "src/component/messageBlock/MessagesContext";
import {useInputValue} from "src/component/footer/FooterContext";
import {fakeMessagesList} from "src/utils/fakeMessagesList";
import styles from "src/component/footer/inputField/InputField.module.scss";

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
          name: "Owner",
        },
      },
    );

    setMessagesValues(copy);
  };

  const getMessage = () => {
    const timer = setTimeout(() => {
      copy.push(
        {
          // It's better to use uuid library
          id: getRandomNumber(1, 100),
          text: `${fakeMessagesList[getRandomNumber(0, 7)]}`,
          date: `${getDate()}`,
          user: {
            id: 1,
            name: "Olga",
          },
        },
      );
      setMessagesValues(copy);
    }, 7000);
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