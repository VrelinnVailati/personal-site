import React, { FC, useRef, useState } from "react";
import showdown from "showdown";
import {number} from "prop-types";

import BlogPostContent from "@/components/BlogPosts/BlogPostContent";
import http from "@/http";

type CreateBlogPostProps = {};

const converter = new showdown.Converter({ simpleLineBreaks: true });

const CreateBlogPost: FC<CreateBlogPostProps> = () => {
  const [convertedHtml, setConvertedHtml] = useState("");

  const titleRef = useRef<HTMLInputElement>(null);
  const longTagRef = useRef<HTMLInputElement>(null);
  const shortTagRef = useRef<HTMLInputElement>(null);
  const sequenceRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const submitForm = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const title = titleRef.current?.value;
    const longTag = longTagRef.current?.value;
    const shortTag = shortTagRef.current?.value;
    const sequence = sequenceRef.current?.value;
    const body = bodyRef.current?.value;

    const numberSequence = +sequence!;
    const htmlBody = converter.makeHtml(body!);

    if (!title || !longTag || !shortTag || !sequence || !body) {
      return;
    }

    if(Number.isNaN(+numberSequence)) {
      return;
    }

    const response = await http.post("/posts", {
      title,
      longTag,
      shortTag,
      sequence: numberSequence,
      body: htmlBody,
    });
  };

  return (
    <>
      <p className="text-3xl">Create a new blog entry</p>

      <div className="grid grid-cols-12 h-5/6">
        <form
          onSubmit={submitForm}
          className="w-full h-full px-2 col-span-6 flex flex-col border-r border-r-light-pink [&>input]:bg-black [&>input]:text-white [&>div>div>input]:bg-black [&>div>div>input]:text-white"
        >
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="rounded text-lg text-black pl-2"
            ref={titleRef}
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
                ref={longTagRef}
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
                ref={shortTagRef}
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
                ref={sequenceRef}
              />
            </div>
          </div>

          <label htmlFor="body" className="block">
            Body
          </label>
          <textarea
            onChange={(ev) => {
              setConvertedHtml(converter.makeHtml(ev.target.value));
            }}
            id="body"
            className="rounded bg-black border-0 text-sm text-white pl-1.5 h-full"
            ref={bodyRef}
          />

          <button
            type="submit"
            className="bg-dark-pink w-2/12 mt-2 ml-2 py-2 rounded text-black"
          >
            Create
          </button>
        </form>

        <BlogPostContent className="col-span-6" htmlContent={convertedHtml} />
      </div>
    </>
  );
};

export default CreateBlogPost;
