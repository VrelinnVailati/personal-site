import Head from "next/head";

import BaseLayout from "@/components/Layouts/BaseLayout";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <BaseLayout pageTitle="My name is Vi!">Hello World!</BaseLayout>
    </>
  );
};

export default HomePage;
