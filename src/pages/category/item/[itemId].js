import RootLayout from '@/components/Layouts/RootLayout';
import { Card } from 'antd';

const { Meta } = Card;

const ItemDetail = ({component}) => {
  console.log(component)
    return (
      <h1>This is item detail page</h1>
      
       
    //  <Card
    //  style={{
    //    width: 500,
    //    height:'100vh',
    //    padding:20,
    //    border: "1px solid rgba(0, 0, 0, 0.25)",
    //    borderRadius: "4px",
    //    margin:10
    //  }}
    //  cover={
    //    <img
    //    style={{width:'100%',height:250}}
    //      alt="example" 
    //      src={component.image}
    //    />
    //  }
    //  >
     
    //  <Meta style={{textAlign:'center', fontWeight:'bold'}}
    //    title={component?.category}
      
    //  />
     
    //  <ul>   
    //      <li><strong>Name:</strong> {component?.name}</li>
    //      <li><strong>Category:</strong> {component?.category}</li>
    //      <li><strong>Price:</strong> {component?.price}</li>
    //      <li><strong>Rating: </strong>{component?.rating}</li>
    //      <li ><strong>Status: </strong><span style={{color:"blue",fontSize:"16px",fontWeight: "bold"}}>{component?.status}</span>
    //      </li>
    //      </ul>
    //      <Link style={{marginLeft:"15px"}} href="/">
    //              <Button style={{textAlign:"center"}}  type="primary" size="middle">            
    //              Add To Builder
    //              </Button>
    //              </Link>
    //  </Card>
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
    const res = await fetch(`https://pc-builder-server-lilac.vercel.app/component/${params.itemId}`);
    const data = await res.json();
    return {
      props: {
        component: data,
      },
    };
  };