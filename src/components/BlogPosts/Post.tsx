import React, { FC } from "react";

import { Post } from "@/types/Post";

type PostProps = {
  post: Post;
};

const PostDetails: FC<PostProps> = ({ post }) => {
  const cleanedBody = post.body.replace(/\\n/g, "<br />");

  return (
    <div className="border-t rounded-lg border-lion">
      <div
        className="flex flex-col items-center mx-5"
        dangerouslySetInnerHTML={{ __html: cleanedBody }}
      ></div>
    </div>
  );
};

export default PostDetails;
