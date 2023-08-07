import {createContext, useContext} from "react";
import {getDate} from "src/utils/getDate";

export const messagesList = [
  {
    id: 1,
    text: "Hey",
    date: `${getDate()}`,
    user: {
      id: 1,
      name: "Olga",
    },
  },
];

const STUB_SET_MESSAGES = () => undefined;
const STUB_MESSAGES_VALUES = messagesList;

export type MessagesType = typeof messagesList;

export type Messages = {
  messagesValues: MessagesType,
  setMessagesValues: (array: MessagesType) => void,
}


export const MessagesContext: React.Context<Messages> = createContext<Messages>({
  messagesValues: STUB_MESSAGES_VALUES,
  setMessagesValues: STUB_SET_MESSAGES,
});

export const useMessages = () => useContext(MessagesContext);