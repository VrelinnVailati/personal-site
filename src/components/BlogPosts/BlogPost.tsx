import React, { FC } from "react";

import { Post } from "@/types/Post";
import BlogPostContent from "@/components/BlogPosts/BlogPostContent";

type BlogPostProps = {
  post: Post;
};

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  const cleanedBody = post.body.replace(/\\n/g, "<br />");

  return (
    <div className="border-t rounded-lg border-lion">
      <BlogPostContent htmlContent={cleanedBody} />
    </div>
  );
};

export default BlogPost;
