import RootLayout from '@/components/Layouts/RootLayout';
import { Button, Card, Col, Row, Space } from 'antd';
import Link from 'next/link';

const { Meta } = Card;



const ItemDetail = ({component}) => {
  console.log(component)
    return (
      <Row 
           justify="center"
   gutter={{
     xs: 8,
     sm: 16,
     md: 24,
     lg: 32,
   }}
 >


<Space>
     <Col  key={component.id}  className="gutter-row" xs={2} sm={4} md={6} lg={8} xl={10} >
      
    
     <Card
     style={{
      width: 900,
      height:'100vh',
      padding:20,
      border: "1px solid rgba(0, 0, 0, 0.25)",
      borderRadius: "4px",
      margin:10
     }}
     cover={
    
       <img
       style={{width:"65%",height:150,margin:"auto"}}
         alt="example" 
         src={component.image}
       />
     }
     > 
     
     {/* <Descriptions title="Component Details" items={items} />; */}
     <ul>   
         <li><strong>Name:</strong> {component?.name}</li>
         <li><strong>Category:</strong> {component?.category}</li>
         <li><strong>Price:</strong> {component?.price}</li>
         <li><strong>Rating: </strong>{component?.rating}</li>
         <li><strong>Description: </strong>{component?.description}</li>
         <li><strong>Individual Rating: </strong>{component?.individualRating}</li>
         
      </ul>
        
         <ul>
         <p><strong>Key Features: </strong></p>
         <li><strong>Brand: </strong>{component?.keyFeatures.Brand}</li>
         <li><strong>Model: </strong>{component?.keyFeatures.Model}</li>
         <li><strong>Specification: </strong>{component?.keyFeatures?.Specification?component.keyFeatures.Specification: "N/A"}</li>
         <li><strong>Type: </strong>{component?.keyFeatures?.Type?component.keyFeatures.Type: "N/A"}</li>
         <li><strong>Port: </strong>{component?.keyFeatures?.Port?component.keyFeatures.Port: "N/A"}</li>
         <li><strong>Voltage: </strong>{component?.keyFeatures?.Voltage?component.keyFeatures.Voltage: "N/A"}</li>
         <li><strong>Resolution: </strong>{component?.keyFeatures?.Resolution?component.keyFeatures.Resolution: "N/A"}</li>
         
         <li ><strong>Status: </strong><span style={{color:"blue",fontSize:"16px",fontWeight: "bold"}}>{component?.status}</span>
         </li>
         </ul>
    
         <Link style={{marginLeft:"15px"}} href="/">
                 <Button style={{textAlign:"center"}}  type="primary" size="middle">            
                 Add To Builder
                 </Button>
                 </Link>
     </Card>
     </Col>
     </Space>
    </Row>
    );
};

export default ItemDetail;

ItemDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_URL}/components`);
  const pcComponents = await res.json();
  console.log("static-path",pcComponents)
  const paths = pcComponents.data?.map((component) => ({
    params: { itemId: component.id }, //here id after params should be the name of dynamic pageId which we have create for dynamin render. here id should be named newsId
  }));

  return { paths, fallback: false }
}
export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`${process.env.BASE_URL}/component/${params.itemId}`);
    const data = await res.json();
    return {
      props: {
        component: data,
      },
    };
  };