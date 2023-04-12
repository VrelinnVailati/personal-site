import { FC, ReactNode } from "react";

type BaseLayoutProps = {
  header?: ReactNode;
  children: ReactNode;
  pageTitle: string;
  pageSubtitle?: string;
};

const BaseLayout: FC<BaseLayoutProps> = ({
  header,
  children,
  pageTitle,
  pageSubtitle,
}) => {
  return (
    <div className="container mx-auto h-full">
      {header}

      <div className="mb-3 mt2">
        <h1 className="font-big-title text-6xl">{pageTitle}</h1>

        <h3 className="text-lg ml-10">{pageSubtitle}</h3>
      </div>

      {children}
    </div>
  );
};

export default BaseLayout;
