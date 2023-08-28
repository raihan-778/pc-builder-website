
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const featuredCategories = ({categories}) => {
    const {category}=categories
    console.log("category-page",category);
    return (
        <>
        <Card
    style={{
      width: 300,
    }}
    cover={
      <img
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

export default featuredCategories;

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/categories");
    const data = await res.json();
    console.log("featured-catg",data);
    return {
      props: {
        categories: data.data
      }
  
    }}