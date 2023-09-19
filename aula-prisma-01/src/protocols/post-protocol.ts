export type Post = {
  id: number;
  username: string;
  title: string;
  content: string;
  date: Date;
}

export type ApplicationError = {
  name: string;
  message: string;
};