import { Card } from 'antd';
const { Meta } = Card;

const Cart = () => {
    return (
        <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        {/* <ul>   <li><strong>Category:</strong> {singleCategory?.category}</li>
      <li><strong>Price:</strong> {singleCategory?.price}</li>
      <li><strong>Rating: </strong>{singleCategory?.rating}</li>
      <li ><strong>Status: </strong><span style={{color:"blue",fontSize:"16px",fontWeight: "bold"}}>{singleCategory?.status}</span></li></ul>
    */}
      </Card>
    );
};

export default Cart;