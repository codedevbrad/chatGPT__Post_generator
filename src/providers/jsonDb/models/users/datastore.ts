import fs from 'fs';

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
    try {
      const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
      this.users = JSON.parse(jsonData);
    } catch (error) {
      console.error(`Failed to load JSON file: ${error}`);
    }
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
}

// Example usage:
export const usersDb = new FakeUserDatabase('users.json');