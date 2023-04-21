import {Post} from "@/types/Post";
import prisma from "@/data/prisma";

export const getPosts = (): Promise<Post[]> => {
  return prisma.posts.findMany();
};

export const getPost = (id: string): Promise<Post | null> => {
  return prisma.posts.findUnique({
    where: {
      id,
    },
  });
};

export const createPost = async (post: Omit<Post, 'id'>): Promise<{id: string}> => {
  const createdPost = await prisma.posts.create({
    data: post,
  });

  return {
    id: createdPost.id
  }
}
