import React from 'react'
import { Avatar, Layout, Menu} from 'antd';
const { Header } = Layout;
const NavBar = () => {
    const items1 = ['1', '2', '3'].map((key) => ({
        key,
        label: `nav ${key}`,
      }));
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal"  items={items1} />
    </Header>
  )
}

export default NavBar