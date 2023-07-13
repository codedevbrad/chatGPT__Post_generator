// Create a post
const createdPost = db.createPost("user1", "Hello world!", "App");
console.log(createdPost); // { userId: 'user1', postText: 'Hello world!', generatedFrom: 'App' }

// Get all posts
const allPosts = db.getPosts();
console.log(allPosts); // [ { userId: 'user1', postText: 'Hello world!', generatedFrom: 'App' } ]

// Get a post by user ID
const fetchedPost = db.getPostById("user1");
console.log(fetchedPost); // { userId: 'user1', postText: 'Hello world!', generatedFrom: 'App' }

// Update a post
const updatedPost = db.updatePost("user1", "Updated post!", "Website");
console.log(updatedPost); // { userId: 'user1', postText: 'Updated post!', generatedFrom: 'Website' }

// Delete a post
const deleted = db.deletePost("user1");
console.log(deleted); // true

// Get all posts after deletion
const remainingPosts = db.getPosts();
console.log(remainingPosts); // []