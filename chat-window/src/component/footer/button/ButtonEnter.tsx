import {useEffect} from "react";
import {Button} from "antd";
import {useMessages} from "src/component/messageBlock/MessagesContext";
import {useInputValue} from "src/component/footer/FooterContext";
import {getDate} from "src/utils/getDate";
import {getRandomNumber} from "src/utils/getRandomNumber";
import {fakeMessagesList} from "src/utils/fakeMessagesList";
import styles from "src/component/footer/button/ButtonEnter.module.scss";

export const ButtonEnter = () => {
  const {messagesValues, setMessagesValues} = useMessages();
  const {inputValue, setInputValue} = useInputValue();

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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    func();
    setMessagesValues(copy);
    setInputValue("");
  };

  useEffect(() => {
    getMessage();
  }, [inputValue]);

  return (
    <Button
      className={styles.button}
      onClick={handleClick}
    >
      Send
    </Button>
  );
};