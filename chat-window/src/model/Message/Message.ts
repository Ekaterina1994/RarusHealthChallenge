import {User} from "src/model/User/User";

/**
 * Message and info about message
 */


export class IMessage {

  /**
   * Message's ID
   */
  public id: string;

  /**
   * Message's text
   */
  public text: string;

  /**
   * Date and time when message was sent
   */
  public date: string;

  /**
   * Message's author
   */
  public user: User;

  constructor(messageData: IMessage) {
    this.id = messageData.id;
    this.text = messageData.text;
    this.date = messageData.date;
    this.user = messageData.user;
  }

  /**
   * Get name of message's user
   */
  // public getUserName() {
  //   return `${this.user.name}`;
  // }

}