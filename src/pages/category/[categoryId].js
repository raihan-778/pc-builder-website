import { Card, Col, Row, Space } from 'antd';
const { Meta } = Card;

import RootLayout from "@/components/Layouts/RootLayout";

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
{items?.map(singleCategory=>(
  <>
<Space>
       <Col  key={category.id}  className="gutter-row" xs={24}  sm={12} md={8} lg={{span:6,offset: 2}} xl={6}>
        
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
    <img
    style={{width:250,height: 150}}
      alt="example" 
      src={singleCategory.image}
    />
  }
>

  <Meta
    title={singleCategory?.category}
   
  />
   <ul>
    <li><strong>Category:</strong> {singleCategory.category}</li>
      <li><strong>Price:</strong> {singleCategory.price}</li>
      <li><strong>Rating: </strong>{singleCategory.rating}</li>
      <li ><strong>Status: </strong><span style={{color:"blue",fontSize:"16px",fontWeight: "bold"}}>{singleCategory.status}</span></li>
    </ul>

    
 
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
  const res = await fetch("http://localhost:5000/categories");
  const categories = await res.json();
  console.log("static-path",categories)
  const paths = categories.data?.map((category) => ({
    params: { categoryId: category._id }, //here id after params should be the name of dynamic pageId which we have create for dynamin render. here id should be named newsId
  }));

  return { paths, fallback: false }
}
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/categories/${params.categoryId}`);
    const data = await res.json();
    return {
      props: {
        category: data,
      },
    };
  };