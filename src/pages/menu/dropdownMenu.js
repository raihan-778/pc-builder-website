

import { Button, Dropdown } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const DropdownMenu = () => {
    const router = useRouter();
    const items = [
        {
          key: '1',
          label: (
            <Link  href="category/64ecc19e9e9aaefec26f7b8f">
              CPU/Processor
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link  href="category/64ecc19e9e9aaefec26f7b90">
             Motherboard
            </Link>
          ),
        },
        {
          key: '3',
          label: (
            <Link  href="category/64ecc19e9e9aaefec26f7b91">
              RAM
            </Link>
          ),
        },
        {
          key: '4',
          label: (
            <Link  href="category/64ecc19e9e9aaefec26f7b94">
             PSU/Power Supple Unit
            </Link>
          ),
        },
        {
          key: '5',
          label: (
            <Link  href="category/64ecc19e9e9aaefec26f7b92">
              Storage Device
            </Link>
          ),
        },
        {
          key: '6',
          label: (
            <Link  href="category/64ecc19e9e9aaefec26f7b93">
             Monitor
            </Link>
          ),
        },
      ];

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
        )
                }
export default DropdownMenu;