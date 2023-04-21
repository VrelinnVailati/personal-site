import React, { FC, useRef, useState } from "react";
import { InferGetStaticPropsType } from "next";
import showdown from "showdown";
import Head from "next/head";

import { getPosts } from "@/data/posts";
import BlogPostContent from "@/components/BlogPosts/BlogPostContent";
import CreateBlogPost from "@/components/Admin/CreateBlogPost";

type AdminPageProps = {};

const AdminPage: FC<AdminPageProps> = () => {
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isVerified, setIsVerified] = useState(true);
  const [isError, setIsError] = useState(false);

  const checkPassword = () => {
    if (passwordInputRef.current!.value) {
      setIsVerified(true);
      setIsError(false);

      return;
    }

    setIsError(true);
  };

  return (
    <>
      <Head>
        <title>Create a new blog entry</title>
      </Head>

      {isVerified ? (
        <CreateBlogPost />
      ) : (
        <div className="flex flex-col justify-center items-center h-full">
          <div>
            <h1 className="text-3xl">Please enter the admin password</h1>

            <input
              className={isError ? "border-2 border-red-700" : ""}
              type="password"
              ref={passwordInputRef}
            />

            <button className="ml-5" onClick={checkPassword}>
              Enter
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPage;
