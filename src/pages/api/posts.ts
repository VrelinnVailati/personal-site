import { NextApiRequest, NextApiResponse } from "next";

import {createPost, getPosts} from "@/data/posts";
import { GetPostsResponse } from "@/types/Post";
import { ResponseOrMessage } from "@/types/Response";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseOrMessage<GetPostsResponse>>
) => {
  if (req.method === "GET") {
    const posts = await getPosts();

    return res.status(200).json({ posts });
  }

  if (req.method === "POST") {
    const { title, shortTag, longTag, sequence, body } = req.body;

    const {id} = await createPost({
      title,
      body,
      sequence,
      tag: {
        short: shortTag,
        long: longTag
      }
    })

    return res.status(201).json({ message: "Created post", id });
  }
};

export default handler;
