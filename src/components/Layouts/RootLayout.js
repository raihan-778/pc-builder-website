
import styles from "@/styles/Home.module.css";
import { MobileOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Link from "next/link";
import DropdownMenu from "../UI/DropdownMenu";
const { Header, Content, Footer } = Layout;


const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
    return (
      <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
       
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
       <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
        <div>
        <Link href="/">
            <items>
              <ProfileOutlined />
              All Products
            </items>
          </Link>
          <Link href="/">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <UserOutlined />
              About Us
            </items>
          </Link>
          <Link href="/">
            <items>
              <MobileOutlined />
              Contact Us
            </items>
          </Link>
          <DropdownMenu/>
          
        
        </div>
       
        <Link style={{marginLeft:"15px"}} href="/pcBuilder/pcBuilder">
            <Button  type="primary" size="middle">
              
            PC Builder
            </Button>
          </Link>
    
       </div>
        </Menu>
      
     
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
         {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
    );
};

export default RootLayout;