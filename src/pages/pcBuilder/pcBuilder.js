import RootLayout from '@/components/Layouts/RootLayout';
import Category from '@/components/UI/Category';
import PcBuilderCart from '@/components/UI/PcBuilderCart';




const PcBuilder = ({categories}) => {


    return (
      <>
       <div>
       <h2 className="divider donotcross-two" contenteditable>My PC Components For Build</h2> 
       <PcBuilderCart/>
      </div>
        <div>
        <h2 className="divider donotcross" contenteditable>Featured Categories</h2>
        <Category categories={categories}/>
        </div>
        </>
       
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
   
    const categories = await fetch(`https://pc-builder-server-lilac.vercel.app/categories`)
  
    const categoriesData = await categories.json()
    return {
      props: {
        
        categories:categoriesData.data
      }
  
    }}