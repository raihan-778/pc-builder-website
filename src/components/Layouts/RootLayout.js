
import styles from "@/styles/Home.module.css";
import { MobileOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
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
        <div className="demo-logo" />
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
        <Link href="/allNews">
            <items>
              <ProfileOutlined />
              All News
            </items>
          </Link>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <UserOutlined />
              About Us
            </items>
          </Link>
          <Link href="/contact">
            <items>
              <MobileOutlined />
              Contact Us
            </items>
          </Link>
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