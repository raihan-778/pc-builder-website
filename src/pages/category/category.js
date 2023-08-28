import { Card, Col, Row } from 'antd';
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

         <Col  key={category.id} className="gutter-row" span={6}>
          
         <Card
        

    style={{
      width: 300,
      height:250
    }}
    cover={
      <img
      style={{height: 150}}
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
  )
)}
        
        </Row>
  </>
    );
};

export default Category;

