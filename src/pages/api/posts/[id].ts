import { NextApiRequest, NextApiResponse } from "next";

import { GetPostResponse } from "@/types/Post";
import { getPost } from "@/data/posts";
import { ResponseOrMessage } from "@/types/Response";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseOrMessage<GetPostResponse>>
) => {
  if (req.method === "GET") {
    const { id } = req.query;

    if (!id || Array.isArray(id)) {
      return res
        .status(404)
        .json({ message: "This ID is not a valid post ID" });
    }

    const post = await getPost(id);

    if (!post) {
      return res.status(404).json({ message: "This Post was not found" });
    }

    return res.status(200).json({ post });
  }
};

export default handler;
