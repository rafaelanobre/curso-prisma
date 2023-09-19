import db from "../database/database";
import { Post } from "../protocols/post-protocol";

const TABLE_NAME = "posts";

export type CreatePost = Omit<Post, "id">

async function getPosts() {
  const result = await db.query<Post>(`
    SELECT * FROM ${TABLE_NAME} 
  `);

  return result.rows;
}

async function getPost(id: number) {
  const result = await db.query<Post>(`
    SELECT * FROM ${TABLE_NAME} WHERE id = $1
  `, [id]);

  return result.rows;
}

async function createPost(post: CreatePost) {
  const { username, title, content, date } = post;
  const newDate = date ? date : new Date();
  const result = await db.query<Post>(`
    INSERT INTO ${TABLE_NAME} (username, title, content, date) VALUES ($1, $2, $3, $4)
  `, [username, title, content, newDate]);

  return result.rowCount;
}

async function deletePost(id: number) {
  const result = await db.query<Post>(`
    DELETE FROM ${TABLE_NAME} WHERE id = $1
  `, [id]);

  return result.rowCount;
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost
}

export default postRepository;