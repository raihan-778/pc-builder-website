import { Card, Col, Row, Space } from 'antd';
import Link from 'next/link';


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
<Space key={singleProducts.id}>
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
    cover={
      <Link href={`allProducts/${singleProducts._id}`}>
    <img style={{width:"75%",height:200, margin:"auto", padding:"10px"}} alt="example" src={singleProducts?.image} /></Link> }
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



