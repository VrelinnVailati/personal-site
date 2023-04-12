import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import { Post } from "@/types/Post";
import BaseLayout from "@/components/Layouts/BaseLayout";
import PostDetails from "@/components/BlogPosts/Post";
import { getApiUrl } from "@/utils";
import { getPost } from "@/data/posts";

type BlogPostPageProps = InferGetStaticPropsType<typeof getStaticProps> & {};

const BlogPostPage: FC<BlogPostPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <BaseLayout pageTitle={post.title}>
        <PostDetails post={post} />
      </BaseLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({
  params,
}) => {
  if (!params || !params.id || Array.isArray(params.id)) {
    return {
      notFound: true,
    };
  }

  const post = await getPost(params.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 86400,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default BlogPostPage;
