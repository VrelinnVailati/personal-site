import React, { FC } from "react";

import { Post } from "@/types/Post";
import BlogPost from "@/components/BlogPosts/BlogPost";

type BlogPostsListProps = {
  posts: Post[];
};

const BlogPostsList: FC<BlogPostsListProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <BlogPost post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default BlogPostsList;
