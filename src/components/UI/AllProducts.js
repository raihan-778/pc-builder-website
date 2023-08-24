import { Card, Col, Row } from 'antd';
const { Meta } = Card;


const AllProducts = ({products}) => {

  console.log("data-from all products",products);
  return (

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
   <Col xs={24}  sm={12} md={8} lg={{span:6,offset: 2}} xl={6} >
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={singleProducts.image} />}
  >
    <Meta title={singleProducts.model} description="www.instagram.com" />
  </Card>
  </Col>
  </>
  
  
  ))
  
 }
 </Row>


  ) 

};

export default AllProducts;
