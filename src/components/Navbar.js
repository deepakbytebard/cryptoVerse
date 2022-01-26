import React from "react";
import { Button, Menu, Typography, Avatar, Image } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <div className="main-logo">
          <Avatar
            src="https://lh3.googleusercontent.com/bGheJIL5TetmTzaYS395-aSMJyNQIUynA8ZBs6pV_Sn9BdkIsd8vSLEHYNN7etK6skSdpa6v9lQuzyphu4N04fuR0vHe1M8N4fHUfrXoug"
            size="large"
          />
          <Typography.Title level={2} className="logo">
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
        </div>
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>

        {/* <Button className='menu-control-container'>

                </Button> */}
      </div>
    </div>
  );
};

export default Navbar;
