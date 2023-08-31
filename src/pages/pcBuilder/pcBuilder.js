import RootLayout from '@/components/Layouts/RootLayout';
import Category from '@/components/UI/Category';

const PcBuilder = ({categories}) => {
    return (
        <div>
        <h2 className="divider donotcross" contenteditable>Featured Categories</h2>
        <Category categories={categories}/>
        </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  
  export const getServerSideProps = async () => {
  
  //   if (typeof window==="undefined"){
  //     return {
  //       props: {
  //         products: [],
  //         categories:[]
  //       }
  //   }
  // }
    const res = await fetch(`https://pc-builder-server-lilac.vercel.app/products`);
    const categories = await fetch(`https://pc-builder-server-lilac.vercel.app/categories`)
    const data = await res.json();
    const categoriesData = await categories.json()
    console.log("index.js",data.data);
    return {
      props: {
        products: data.data,
        categories:categoriesData.data
      }
  
    }}