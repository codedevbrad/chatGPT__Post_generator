import { loadFromJsonFile } from '../../utils/loadFromJson'
let jsonFilePathLoc = './data.json'


interface User {
  userId: string;
  isNewUser: boolean;
}

class FakeUserDatabase {
  private users: User[] = [];

  constructor(jsonFilePath: string) {
    this.loadUsersFromJson(jsonFilePath);
  }

  private loadUsersFromJson(jsonFilePath: string): void {
    this.users = loadFromJsonFile(jsonFilePath);
  }

  createUser(userId: string, isNewUser: boolean): User {
    const user: User = { userId, isNewUser };
    this.users.push(user);
    return user;
  }

  getUsers(): User[] {
    return this.users;
  }

  getUserById(userId: string): User | undefined {
    return this.users.find((user) => user.userId === userId);
  }

  updateUser(userId: string, isNewUser: boolean): User | undefined {
    const user = this.getUserById(userId);
    if (user) {
      user.isNewUser = isNewUser;
      return user;
    }
    return undefined;
  }

  deleteUser(userId: string): boolean {
    const userIndex = this.users.findIndex((user) => user.userId === userId);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }

  resetUsersToOriginal( ): void {
    this.loadUsersFromJson( jsonFilePathLoc );
  }

  removeAllUsers(): void {
    this.users = [];
  }
}

export const usersDb = new FakeUserDatabase( jsonFilePathLoc );