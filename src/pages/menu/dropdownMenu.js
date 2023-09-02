import { Button, Dropdown } from "antd";

const DropdownMenu = ({categories}) => {

  const items = categories.map((dataItem) => {
    return {
      key: dataItem._id,
      label: (
        <a target="_blank" rel="noopener noreferrer" href={dataItem.image}>
          {dataItem.category}
        </a>
      ),
    };
  });

  return (
    <Dropdown
    style={{margin:"0,10px"}}
            menu={{
              items,
            }}
            placement="top"
          >
            <Button stype={{margin:'10px'}} type="primary" >Categories</Button>
          </Dropdown>
);
          }

export default DropdownMenu;

export const getStaticProps = async () => {

    const categories = await fetch(`https://pc-builder-server-lilac.vercel.app/categories`)
 
    const categoriesData = await categories.json()
    console.log("Menu",categoriesData.data);
    return {
      props: {
      
        categories:categoriesData.data
      }
  
    }}