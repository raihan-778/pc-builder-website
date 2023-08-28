import { Menu } from 'antd';

import { MailOutlined } from '@ant-design/icons';
import { useState } from 'react';



function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Categories', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ])
];

// submenu keys of first level
const rootSubmenuKeys = ['Categories'];

const DropdownMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  
const onOpenChange = (keys) => {
  const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    setOpenKeys(keys);
  } else {
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  }
};
return (
  <Menu
    mode="inline"
    openKeys={openKeys}
    onOpenChange={onOpenChange}
    style={{
      width: 256,
    }}
    items={items}
  />
);
};

export default DropdownMenu;
