import { Card, Col, Row, Space } from 'antd';

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
    cover={
      <img
      style={{height: 100,width:250}}
        alt="example"
        src={category.image}
      />
    }
  >
    <Link href={`/category/${category._id}`} >
    <Meta
      title={category?.category}
     
    />
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

