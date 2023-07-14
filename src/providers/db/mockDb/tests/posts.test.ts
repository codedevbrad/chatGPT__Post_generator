import { postsDb } from '../../mockDb/models/posts/datastore'


describe('FakeDatabase', () => {
  beforeEach(() => {
    postsDb.resetPostsToOriginal();
  });

  test('Create a post', () => {
    const post = postsDb.createPost('user1', 'Hello, world!', 'app');
    expect(post.userId).toBe('user1');
    expect(post.postText).toBe('Hello, world!');
    expect(post.generatedFrom).toBe('app');
  });

  test('Get all posts', () => {
    postsDb.createPost('user1', 'Hello, world!', 'app');
    postsDb.createPost('user2', 'Testing Jest!', 'website');
    const allPosts = postsDb.getPosts();
    expect(allPosts.length).toBe(2);
    expect(allPosts[0].userId).toBe('user1');
    expect(allPosts[1].userId).toBe('user2');
  });

  test('Get a post by userId', () => {
    postsDb.createPost('user1', 'Hello, world!', 'app');
    const post = postsDb.getPostById('user1');
    expect(post?.userId).toBe('user1');
    expect(post?.postText).toBe('Hello, world!');
    expect(post?.generatedFrom).toBe('app');
  });

  test('Update a post', () => {
    postsDb.createPost('user1', 'Hello, world!', 'app');
    const updatedPost = postsDb.updatePost('user1', 'Greetings!', 'web');
    expect(updatedPost?.userId).toBe('user1');
    expect(updatedPost?.postText).toBe('Greetings!');
    expect(updatedPost?.generatedFrom).toBe('web');
  });

  test('Delete a post', () => {
    postsDb.createPost('user1', 'Hello, world!', 'app');
    const isDeleted = postsDb.deletePost('user1');
    expect(isDeleted).toBe(true);
    const post = postsDb.getPostById('user1');
    expect(post).toBeUndefined();
  });

  test('Reset posts to original', () => {
    postsDb.createPost('user1', 'Hello, world!', 'app');
    postsDb.resetPostsToOriginal();
    const allPosts = postsDb.getPosts();
    expect(allPosts.length).toBe( 2 );
  });

  test('Remove all posts', () => {
    postsDb.createPost('user1', 'Hello, world!', 'app');
    postsDb.removeAllPosts();
    const allPosts = postsDb.getPosts();
    expect(allPosts.length).toBe(0);
  });
});
