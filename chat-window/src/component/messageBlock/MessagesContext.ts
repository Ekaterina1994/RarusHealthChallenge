import {createContext, useContext} from "react";

export const messagesList = [
  {
    id: 1,
    text: "Hey",
    date: "2023.04.05",
    user: {
      id: 1,
      name: "Olga",
    },
  },
  {
    id: 2,
    text: "Heyyyyyy",
    date: "2023.04.05",
    user: {
      id: 1,
      name: "Olga",
    },
  },
  {
    id: 3,
    text: "Hiiii",
    date: "2023.07.05",
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