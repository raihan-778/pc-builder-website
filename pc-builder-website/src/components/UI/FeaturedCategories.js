import { Avatar, Card } from 'antd';
const { Meta } = Card;


const FeaturedCategories = ({categories}) => {

    console.log("featured-categories",categories)
    return (
        <>
        <Card
    style={{
      width: 300,
    }}
    cover={
      <Image
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
  </>
    );
};

export default FeaturedCategories;




