import { Card, Col, Row, Space } from "antd";
import Meta from "antd/es/card/Meta";

const CategoryDetailPage = ({category}) => {
    // console.log("Id",category)
    const {items}=category
    console.log("Id",items)
    return (
        <>
<Row justify="center" gutter={{
            
              xs: 8,
              sm: 16,
              md: [24,24],
              lg: [32,32],
              xl:32,
      
        }}>

{
  items?.map(singleItem=>(

<>
<Space>
<Col xs={24}  sm={12} md={8} lg={{span:6,offset: 2}} xl={6} >
  <Card
    hoverable
    style={{
      width: 300,
      height:400
    }}
    cover={<img style={{width:"100%",height:"50%", margin:"auto", padding:"10px"}} alt="example" src={singleItem?.image} />}
  >
    <Meta title={singleItem.category} description="www.instagram.com" />
    <ul>
      <li><strong>Price:</strong> {singleItem?.price}</li>
      <li><strong>Rating: </strong>{singleItem?.rating}</li>
      <li><strong>Status: </strong ><span style={{color:"blue",fontSize:"16px"}}>{singleItem?.status}</span></li>
    </ul>
  </Card>
  </Col>
</Space>

  </>
  
  
  ))
  
 }
 
 </Row>

</>
    )
};

export default CategoryDetailPage

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