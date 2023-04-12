import React, { FC } from "react";

import { Post } from "@/types/Post";
import BlogPostItem from "@/components/BlogPosts/BlogPostItem";

type BlogPostsListProps = {
  posts: Post[];
};

const BlogPostsList: FC<BlogPostsListProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <BlogPostItem post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default BlogPostsList;
