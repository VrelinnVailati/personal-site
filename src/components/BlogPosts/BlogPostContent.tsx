import React from "react";

type BlogPostContentProps = {
  htmlContent: string;
  className?: string;
};

const BlogPostContent: React.FC<BlogPostContentProps> = ({
  htmlContent,
  className,
}) => {
  return (
    <div
      className={`flex flex-col mx-5 [&>p]:mb-3 [&>p]:text-md [&>p>img]:2xl:w-9/12 [&>p>img]:w-full [&>p>img]:h-auto [&>p>img]:rounded-lg [&>p>img]:mx-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default BlogPostContent;
