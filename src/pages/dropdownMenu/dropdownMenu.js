import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';

const DropdownMenu = ({categories}) => {

    const Items = [

         categories.map(singleCategory=>
            {label: singleCategory.category
            key: singleCategory._id} 
         )
    
      ];
    return (
        <Dropdown
        menu={{
          Items,
        }}
        trigger={['click']}
      >
        <Button type="primary" size='middle' style={{marginLeft:"10px"}} onClick={(e) => e.preventDefault()}>
         
            Category
            <DownOutlined />
         
        </Button>
      </Dropdown>
    );
};

export default DropdownMenu;

export const getStaticProps = async () => {

    //   if (typeof window==="undefined"){
    //     return {
    //       props: {
    //         products: [],
    //         categories:[]
    //       }
    //   }
    // }
      const res = await fetch(`https://pc-builder-server-lilac.vercel.app/products`);
      const categories = await fetch(`https://pc-builder-server-lilac.vercel.app/categories`)
      const data = await res.json();
      const categoriesData = await categories.json()
      console.log("index.js",data.data);
      return {
        props: {
          products: data.data,
          categories:categoriesData.data
        }
    
      }}