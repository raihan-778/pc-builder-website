import { Card, Col, Row, Space } from 'antd';
import FeaturedCategories from './FeaturedCategories';
const { Meta } = Card;


const AllProducts = ({products}) => {

  console.log("data-from all products",products);
 
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
      height:450
    }}
    cover={<img style={{width:"75%",height:"75%", margin:"auto", padding:"10px"}} alt="example" src={singleProducts.image} />}
  >
    <Meta title={singleProducts.name} description="www.instagram.com" />
    <ul>
    <li><strong>Category:</strong> {singleProducts.category}</li>
      <li><strong>Price:</strong> {singleProducts.price}</li>
      <li><strong>Rating: </strong>{singleProducts.rating}</li>
    </ul>

    <h6 style={{color:"blue",fontSize:"16px"}}>{singleProducts.status}</h6>
    
  </Card>
  </Col>
</Space>

  </>
  
  
  ))
  
 }
 
 </Row>
 <h2 className="divider donotcross" contenteditable>Featured Categories</h2>
 <FeaturedCategories/>
</>
  ) 

};

export default AllProducts;
