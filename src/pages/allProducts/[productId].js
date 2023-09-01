import RootLayout from '@/components/Layouts/RootLayout';
import { Button, Card, Col, Row, Space } from 'antd';
import Link from 'next/link';
const { Meta } = Card;


const ProductDetail = ({singleProduct}) => {
  console.log("product-id",singleProduct);
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

<>
<Space>
     <Col  key={singleProduct._id}  className="gutter-row" xs={24}  sm={12} md={8} lg={{span:6,offset: 2}} xl={6}>
      
     <Card
style={{
  width: 500,
  height:'100vh',
  padding:20,
  border: "1px solid rgba(0, 0, 0, 0.25)",
  borderRadius: "4px",
  margin:10
}}
cover={
  <img
  style={{width:'100%',height:250}}
    alt="example" 
    src={singleProduct.image}
  />
}
>

<Meta style={{textAlign:'center', fontWeight:'bold'}}
  title={singleProduct?.category}
 
/>

<ul>   
    <li><strong>Name:</strong> {singleProduct?.name}</li>
    <li><strong>Category:</strong> {singleProduct?.category}</li>
    <li><strong>Price:</strong> {singleProduct?.price}</li>
    <li><strong>Rating: </strong>{singleProduct?.rating}</li>
    <li ><strong>Status: </strong><span style={{color:"blue",fontSize:"16px",fontWeight: "bold"}}>{singleProduct?.status}</span>
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
</>
)

    
    </Row>
</>
)
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.BASE_URL}/products`);
    const products = await res.json();
    console.log("static-path",products)
    const paths = products.data?.map((product) => ({
      params: { productId: product._id }, //here id after params should be the name of dynamic pageId which we have create for dynamin render. here id should be named newsId
    }));
  
    return { paths, fallback: false }
  }
  export const getStaticProps = async (context) => {
      const { params } = context;
      const res = await fetch(`https://pc-builder-server-lilac.vercel.app/products/${params.productId}`);
      const singleProduct = await res.json();
      // console.log("product-id",singleProduct);
      return {
        props: {
          singleProduct: singleProduct,
        },
      };
    };