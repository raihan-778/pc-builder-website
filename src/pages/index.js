import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
    
      <Head>
        <title>PC-Builder</title>
        <meta
          name="description"
          content="This is PC Builder Website made by Raihan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <DynamicBanner />
      <AllNews allNews={allNews} /> */}
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};