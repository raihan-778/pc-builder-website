import RootLayout from "@/components/Layouts/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
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
      <AllProducts allProducts={products}></AllProducts>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      products: data.data,
    }

  }}