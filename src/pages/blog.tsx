import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import BaseLayout from "@/components/Layouts/BaseLayout";
import BlogPostsList from "@/components/BlogPosts/BlogPostsList";
import { getPosts } from "@/data/posts";

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
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    revalidate: 43200,
  };
};

export default BlogPage;
