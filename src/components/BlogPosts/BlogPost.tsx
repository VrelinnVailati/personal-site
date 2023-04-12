import React, { FC } from "react";
import Link from "next/link";

import { Post } from "@/types/Post";

type BlogPostProps = {
  post: Post;
};

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="flex flex-col shadow shadow-dark-purple mb-2">
      <Link
        href={`/blog/${post.id}`}
        className="hover:bg-light-pink/75 hover:text-black ease-in duration-100"
      >
        <div className="ml-2">
          <div className="flex flex-row items-end">
            <div className="text-sm mr-2 font-big-title text-lion">
              {post.tag.short}-{post.sequence.toString().padStart(3, "0")}
            </div>

            <div className="text-2xl font-big-title">{post.title}</div>
          </div>

          <div className="ml-3">
            <p className="text-md">{`${post.body.slice(0, 100)}...`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPost;
