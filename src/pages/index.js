import RootLayout from "@/components/Layouts/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
import Head from "next/head";

const HomePage = ({products}) => {
  console.log("hompePage",products)
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
      <AllProducts products={products}></AllProducts>
  
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  console.log("index.js",data.data);
  return {
    props: {
      products: data.data,
    }

  }}