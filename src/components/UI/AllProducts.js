import { Card, Col, Row, Space } from 'antd';


const { Meta } = Card;

const AllProducts = ({products}) => {

  
 
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
  products.map(singleProducts=>(

<>
<Space>
<Col xs={24}  sm={12} md={8} lg={{span:6,offset: 2}} xl={6} >
  <Card
    hoverable
    style={{
      width: 300,
      height:450,
      padding:20,
      border: "1px solid rgba(0, 0, 0, 0.25)",
      borderRadius: "4px",
      margin:10
    }}
    cover={<img style={{width:"75%",height:200, margin:"auto", padding:"10px"}} alt="example" src={singleProducts?.image} />}
  >
    <Meta title={singleProducts?.name} description="www.instagram.com" />
  
   <ul> <li><strong>Category:</strong> {singleProducts?.category}</li>
      <li><strong>Price:</strong> {singleProducts?.price}</li>
      <li><strong>Rating: </strong>{singleProducts?.rating}</li>
      <li ><strong>Status: </strong><span style={{color:"blue",fontSize:"16px",fontWeight: "bold"}}>{singleProducts?.status}</span></li></ul>
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

export default AllProducts;



export const getStaticProps = async () => {
    const res = await fetch("https://pc-builder-server-sandy.vercel.app/products");
    const data = await res.json();
    console.log("index.js",data.data);
    return {
      props: {
        products: data.data
      }
  
    }}