import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Card, Col, Row, Space } from "antd";
import Link from "next/link";
const { Meta } = Card;

const CategroyComponents = ({components}) => {


  const {items}=components
  console.log("pc-builder",items)
    return (
  <>
       <Row 
       
       justify="center"
gutter={{
 xs: 8,
 sm: 16,
 md: 24,
 lg: 32,
}}
>
  
  {items.map((singleItem) =>   

       <Space key={singleItem.id}>
        <Col >
         <Card
         
         style={{
           width: 300,
           height:400,
           padding:20,
           border: "1px solid rgba(0, 0, 0, 0.25)",
           borderRadius: "4px",
           margin:10
         }}
         cover={
        <Link href={`item/${singleItem.id}`}>
           <img
           style={{width:250,height: 120}}
             alt="example" 
             src={singleItem.image}
           />
        </Link>
         }
       >
       
         <Meta
           title={singleItem?.category}
          
         />
         
        <ul>   <li><strong>Name:</strong> {singleItem?.name}</li>
             <li><strong>Price:</strong> {singleItem?.price}</li>
             <li><strong>Rating: </strong>{singleItem?.rating}</li>
             <li ><strong>Status: </strong><span style={{color:"blue",fontSize:"16px",fontWeight: "bold"}}>{singleItem?.status}</span></li></ul>
             
            <Button  type="primary" size="middle">
              
           Add To Builder
            </Button>
          

      
       </Card>
       </Col>
  
       </Space>
       
  
  )}
  
  </Row>
  </>

    );
};

export default CategroyComponents;

CategroyComponents.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.BASE_URL}/categories`);
    const categories = await res.json();
    console.log("static-path",categories)
    const paths = categories.data?.map((category) => ({
      params: { pcBuilderId: category._id },
       //here id after params should be the name of dynamic pageId which we have create for dynamic render. here id should be named newsId.
    }));
  
    return { paths, fallback: false }
  }
  export const getStaticProps = async (context) => {
      const { params } = context;
      const res = await fetch(`https://pc-builder-server-lilac.vercel.app/categories/${params.pcBuilderId}`);
      const data = await res.json();
      return {
        props: {
          components: data,
        },
      };
    };