import { Card } from 'antd';
const { Meta } = Card;


const AllProducts = ({AllProducts}) => {
  console.log("data-from all products",AllProducts)
  return (
    <>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </>
  );
};

export default AllProducts;
