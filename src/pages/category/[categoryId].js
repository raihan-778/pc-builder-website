import { Card, Col, Row, Space } from 'antd';
const { Meta } = Card;

import RootLayout from "@/components/Layouts/RootLayout";
import Link from 'next/link';

const CategoryDetailPage = ({category}) => {
    // console.log("Id",category)
    const {items}=category
    console.log("Id",items)
    return (
      <>
             <Row 
             justify="center"
     gutter={{
       xs: 8,
       sm: 16,
       md: 24,
       lg: 32,
     }}
   >
{items?.map(singleItem=>(
  <>
<Space>
       <Col  key={singleItem.id}  className="gutter-row" xs={24}  sm={12} md={8} lg={{span:6,offset: 2}} xl={6}>
        
       <Card
  style={{
    width: 300,
    height:350,
    padding:20,
    border: "1px solid rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    margin:10
  }}
  cover={
 <Link href={`item/${singleItem.id}`}>
    <img
    style={{width:250,height: 120}}
      alt="example" 
      src={singleItem.image}
    />
 </Link>
  }
>

  <Meta
    title={singleItem?.category}
   
  />
  
 <ul>   <li><strong>Category:</strong> {singleItem?.category}</li>
      <li><strong>Price:</strong> {singleItem?.price}</li>
      <li><strong>Rating: </strong>{singleItem?.rating}</li>
      <li ><strong>Status: </strong><span style={{color:"blue",fontSize:"16px",fontWeight: "bold"}}>{singleItem?.status}</span></li></ul>
   

    
 
</Card>

</Col>
</Space>
</>
)
)}
      
      </Row>
</>
  );
};

export default CategoryDetailPage

CategoryDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_URL}/categories`);
  const categories = await res.json();
  console.log("static-path",categories)
  const paths = categories.data?.map((category) => ({
    params: { categoryId: category._id }, //here id after params should be the name of dynamic pageId which we have create for dynamin render. here id should be named newsId
  }));

  return { paths, fallback: false }
}
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://pc-builder-server-lilac.vercel.app/categories/${params.categoryId}`);
    const data = await res.json();
    return {
      props: {
        category: data,
      },
    };
  };