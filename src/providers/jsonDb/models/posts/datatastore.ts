import fs from 'fs';

interface Post {
  userId: string;
  postText: string;
  generatedFrom: string;
}

class FakeDatabase {
  private posts: Post[] = [];

  constructor(jsonFilePath: string) {
    this.loadPostsFromJson(jsonFilePath);
  }

  private loadPostsFromJson(jsonFilePath: string): void {
    try {
      const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
      this.posts = JSON.parse(jsonData);
    } catch (error) {
      console.error(`Failed to load JSON file: ${error}`);
    }
  }

  createPost(userId: string, postText: string, generatedFrom: string): Post {
    const post: Post = { userId, postText, generatedFrom };
    this.posts.push(post);
    return post;
  }

  getPosts(): Post[] {
    return this.posts;
  }

  getPostById(userId: string): Post | undefined {
    return this.posts.find((post) => post.userId === userId);
  }

  updatePost(userId: string, postText: string, generatedFrom: string): Post | undefined {
    const postIndex = this.posts.findIndex((post) => post.userId === userId);
    if (postIndex !== -1) {
      const updatedPost: Post = { userId, postText, generatedFrom };
      this.posts[postIndex] = updatedPost;
      return updatedPost;
    }
    return undefined;
  }

  deletePost(userId: string): boolean {
    const postIndex = this.posts.findIndex((post) => post.userId === userId);
    if (postIndex !== -1) {
      this.posts.splice(postIndex, 1);
      return true;
    }
    return false;
  }
}

// Example usage:
export const postsDb = new FakeDatabase('data.json');

