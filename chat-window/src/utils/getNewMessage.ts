import {getDate} from "src/utils/getDate";

export const getNewMessage = (idMessage: number, text: string, idUser: number, name: string) => {
  const message = {
    id: idMessage,
    text: text,
    date: `${getDate()}`,
    user: {
      id: idUser,
      name: name,
    },
  };

  return message;
};