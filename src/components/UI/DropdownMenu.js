import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import Link from 'next/link';
const items = [
  {
    label: <Link href="/">CPU / Processor</Link>,
    key: '0',
  },
  {
    label: <Link href="/">Motherboard</Link>,
    key: '1',
  },
  {
    label: <Link href="/">RAM</Link>,
    key: '2',
  },
  {
    label: <Link href="/">Power Supply Unit</Link>,
    key: '3',
  },
  {
    label: <Link href="/">Storage Device</Link>,
    key: '4',
  },
  {
    label: <Link href="/">Monitor</Link>,
    key: '5',
  },
 
  {
    type: 'divider',
  },
  {
    label: 'Others',
    key: '6',
  },
];



const DropdownMenu = () => (<Dropdown
  menu={{
    items,
  }}
  trigger={['click']}
>
  <Button type="primary" size='middle' style={{marginLeft:"10px"}} onClick={(e) => e.preventDefault()}>
    <Space>
      Click me
      <DownOutlined />
    </Space>
  </Button>
</Dropdown>
)

export default DropdownMenu;
