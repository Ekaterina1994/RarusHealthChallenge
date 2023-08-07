import {useMessages} from "src/component/messageBlock/MessagesContext";
import {Message} from "src/component/messageBlock/messageList/message/Message";

export const MessageList = () => {
  const {messagesValues} = useMessages();

  return (
    <ul>
      {messagesValues.map((message) => (
        <Message
          key={message.id}
          id={message.id}
          text={message.text}
          date={message.date}
          username={message.user.name}
        />
      ))}
    </ul>
  );
};
