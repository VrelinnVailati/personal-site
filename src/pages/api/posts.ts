import { NextApiRequest, NextApiResponse } from "next";

import { getPosts } from "@/data/posts";
import { GetPostsResponse } from "@/types/Post";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GetPostsResponse>
) => {
  if (req.method === "GET") {
    const posts = await getPosts();

    return res.status(200).json({ posts });
  }
};

export default handler;
