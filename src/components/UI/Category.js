import { Avatar, Button, Card, Col, Row, Space } from 'antd';

import Link from 'next/link';
const { Meta } = Card;


const Category = ({categories}) => {
    console.log("for index.js",categories)
    return (
        <>
               <Row 
       
       gutter={{
         xs: 8,
         sm: 16,
         md: 24,
         lg: 32,
       }}
     >
{categories?.map(category=>(
<>
<Space>

         <Col xs={24}  sm={12} md={8} lg={{span:6,offset: 2}} xl={6}  key={category.id} className="gutter-row" >
          
         <Card
        

    style={{
      width: 300,
      height:200,
      padding:20,
      border: "1px solid rgba(0, 0, 0, 0.25)",
      borderRadius: "4px",
      margin:10
    }}
    // cover={
    //   <img
    //   style={{height: 100,width:250}}
    //     alt="example"
    //     src={category.image}
    //   />
    // }
   
  >
  <div style={{display:"flex", margin:"10px", justifyContent:"space-around", alignItems:"center"}}>
  <Avatar style={{marginRight:"10px"}} shape="square" size={64} src={<img src={category.image} alt="avatar" />} />
   
    <Meta
      title={category?.category}
     
    />
   
    
  </div>
  <Link href={`/pcBuilder/${category._id}`} >
  <Button type="primary">Choose / Select</Button>
  </Link>
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

export default Category;

