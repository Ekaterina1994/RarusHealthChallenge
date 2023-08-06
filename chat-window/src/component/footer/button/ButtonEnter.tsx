import {Button} from "antd";
import {useMessages} from "src/component/messageBlock/MessagesContext";
import {useInputValue} from "src/component/footer/FooterContext";
import {getDate} from "src/utils/getDate";
import {getRandomNumber} from "src/utils/getRandomNumber";
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
          name: "Victor",
        },
      },
    );
    setMessagesValues(copy);

  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    func();
    setMessagesValues(copy);
    setInputValue("");
  };

  return (
    <Button
      className={styles.button}
      onClick={handleClick}
    >
      Send
    </Button>
  );
};