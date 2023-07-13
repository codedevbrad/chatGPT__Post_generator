// Create a user
const createdUser = userDb.createUser('user1', false);
console.log(createdUser); // { userId: 'user1', isNewUser: false }

// Get all users
const allUsers = userDb.getUsers();
console.log(allUsers); // [ { userId: 'user1', isNewUser: false } ]

// Get a user by ID
const fetchedUser = userDb.getUserById('user1');
console.log(fetchedUser); // { userId: 'user1', isNewUser: false }

// Update a user
const updatedUser = userDb.updateUser('user1', true);
console.log(updatedUser); // { userId: 'user1', isNewUser: true }

// Delete a user
const deleted = userDb.deleteUser('user1');
console.log(deleted); // true

// Get all users after deletion
const remainingUsers = userDb.getUsers();
console.log(remainingUsers); // []