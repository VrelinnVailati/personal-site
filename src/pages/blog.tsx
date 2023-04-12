import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import BaseLayout from "@/components/Layouts/BaseLayout";
import BlogPostsList from "@/components/BlogPosts/BlogPostsList";
import { GetPostsResponse } from "@/types/Post";

const BlogPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <BaseLayout
        pageTitle="Blog"
        pageSubtitle="Just stuff that I come up with!"
      >
        <div className="border-dotted">
          <BlogPostsList posts={posts} />
        </div>
      </BaseLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const { posts } = await fetch(`${process.env.API_URL}/posts`).then(
    (res) => res.json() as Promise<GetPostsResponse>
  );

  return {
    props: {
      posts,
    },
    revalidate: 43200,
  };
};

export default BlogPage;
