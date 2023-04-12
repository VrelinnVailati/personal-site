export type Post = {
  id: string;
  sequence: number;
  title: string;
  body: string;
  tag: {
    short: string;
    long: string;
  };
};

export type GetPostsResponse = {
  posts: Post[];
};

export type GetPostResponse = {
  post: Post;
};
