import { usersDb } from '../models/users/datastore';

describe('FakeUserDatabase', () => {
  beforeEach(() => {
    usersDb.resetUsersToOriginal();
  });

  test('Create a user', () => {
    const user = usersDb.createUser('user1', true);
    expect(user.userId).toBe('user1');
    expect(user.isNewUser).toBe(true);
  });

  test('Get all users', () => {
    usersDb.createUser('user1', true);
    usersDb.createUser('user2', false);
    const allUsers = usersDb.getUsers();
    expect(allUsers.length).toBe(2);
    expect(allUsers[0].userId).toBe('user1');
    expect(allUsers[1].userId).toBe('user2');
  });

  test('Get a user by userId', () => {
    usersDb.createUser('user1', true);
    const user = usersDb.getUserById('user1');
    expect(user?.userId).toBe('user1');
    expect(user?.isNewUser).toBe(true);
  });

  test('Update a user', () => {
    usersDb.createUser('user1', true);
    const updatedUser = usersDb.updateUser('user1', false);
    expect(updatedUser?.userId).toBe('user1');
    expect(updatedUser?.isNewUser).toBe(false);
  });

  test('Delete a user', () => {
    usersDb.createUser('user1', true);
    const isDeleted = usersDb.deleteUser('user1');
    expect(isDeleted).toBe(true);
    const user = usersDb.getUserById('user1');
    expect(user).toBeUndefined();
  });

  test('Reset users to original', () => {
    usersDb.resetUsersToOriginal();
    const allUsers = usersDb.getUsers();
    expect(allUsers.length).toBe(2);
  });

  test('Remove all users', () => {
    usersDb.createUser('user1', true);
    usersDb.removeAllUsers();
    const allUsers = usersDb.getUsers();
    expect(allUsers.length).toBe(0);
  });
});
