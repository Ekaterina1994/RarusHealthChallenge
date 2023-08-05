import {User} from "src/model/User/User";

/**
 * Message and info about message
 */
export class Message {

  /**
   * Message's text
   */
  public text: string;

  /**
   * Date and time when message was sent
   */
  public date: Date;

  /**
   * Message's author
   */
  public user: User;

  constructor(messageData: Message) {
    this.text = messageData.text;
    this.date = messageData.date;
    this.user = messageData.user;
  }

  /**
   * Get name of message's user
   */
  public getUserName() {
    return `${this.user.name}`;
  }

}