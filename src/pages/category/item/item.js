import { Button, Card } from 'antd';

import Link from 'next/link';
const { Meta } = Card;

const ItemDetail = () => {
    return (
          
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
    );
};

export default ItemDetail;