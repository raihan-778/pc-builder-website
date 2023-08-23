import { Card, Col, Row } from 'antd';
const { Meta } = Card;


const AllProducts = ({products}) => {

  console.log("data-from all products",products);
  return (
<div>
<Row  gutter={{
          xs: [8,8],
          sm: 16,
          md: 24,
          lg: [12,12],
        }}>
{
  products.map(singleProducts=>(
  <>
   <Col span={6} />
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={singleProducts.image} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Col/>
  
  </>
  ))
  
 }
 </Row>
</div>

  ) 

};

export default AllProducts;
