import React, { FC, useRef, useState } from "react";
import { InferGetStaticPropsType } from "next";

import BlogPostsList from "@/components/BlogPosts/BlogPostsList";
import { getPosts } from "@/data/posts";

type AdminPageProps = InferGetStaticPropsType<typeof getStaticProps> & {};

const AdminPage: FC<AdminPageProps> = ({ posts }) => {
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
      {isVerified ? (
        <>
          <p className="text-3xl">Create a new blog entry</p>

          <div className="grid grid-cols-12 h-5/6">
            <form className="w-full h-full pr-2 col-span-6 flex flex-col border-r border-r-light-pink">
              <label htmlFor="title" className="block">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="rounded text-lg text-black pl-2"
              />

              <div className="flex flex-row w-full justify-start">
                <div className="w-6/12">
                  <label htmlFor="longTag" className="block">
                    Long Tag
                  </label>
                  <input
                    type="text"
                    id="longTag"
                    className="w-11/12 rounded text-lg text-black pl-2"
                  />
                </div>

                <div className="w-4/12">
                  <label htmlFor="shortTag" className="block">
                    Short Tag
                  </label>
                  <input
                    type="text"
                    id="shortTag"
                    required
                    max={3}
                    min={1}
                    className="w-11/12 rounded text-lg text-black pl-2"
                  />
                </div>

                <div className="w-2/12">
                  <label htmlFor="sequence" className="block">
                    Sequence
                  </label>
                  <input
                    type="number"
                    id="sequence"
                    className="w-11/12 rounded text-lg text-black pl-2"
                  />
                </div>
              </div>

              <label htmlFor="body" className="block">
                Body
              </label>
              <textarea
                id="body"
                className="rounded text-lg text-black pl-1.5 h-full"
              />
            </form>

            <div className="col-span-6 pl-2">
              <p>Here goes the visualization</p>
            </div>
          </div>
        </>
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

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default AdminPage;
