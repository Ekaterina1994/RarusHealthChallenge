/**
 * User
 */
export class User {

  /**
   * User's ID
   */
  public id: string;

  /**
   * User's name
   */
  public name: string;

  constructor(userData: User) {
    this.id = userData.id;
    this.name = userData.name;
  }

}