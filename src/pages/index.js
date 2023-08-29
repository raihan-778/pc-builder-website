import RootLayout from "@/components/Layouts/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
import Head from "next/head";
import Category from "./category/category";

const HomePage = ({products,categories}) => {
 
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
      <h2 className="divider donotcross" contenteditable>Featured Categories</h2>
      <Category categories={categories}/>
{/* <FeaturedCategories/> */}
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-server-sandy.vercel.app/products");
  const categories = await fetch("https://pc-builder-server-sandy.vercel.app/categories")
  const data = await res.json();
  const categoriesData = await categories.json()
  console.log("index.js",data.data);
  return {
    props: {
      products: data.data,
      categories:categoriesData.data
    }

  }}