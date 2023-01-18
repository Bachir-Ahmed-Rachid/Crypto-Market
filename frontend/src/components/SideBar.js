import React from 'react'
import {Link} from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined,FundOutlined, } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const {  Sider } = Layout

const SideBar = () => {
    const items =[
        {
            key: 1,
            icon: <HomeOutlined/>,
            label:<Link to='/home'>Home</Link>,
        },
        {
            key:2 ,
            icon:<FundOutlined/> ,
            label:<Link to='/cryptoCurrencies'>CryptoCurrencies</Link>,
        },
        {
            key: 3,
            icon: <MoneyCollectOutlined/>,
            label:<Link to='/exchange'>Exchanges</Link>,
        },
        {
            key: 4,
            icon:<BulbOutlined/> ,
            label:<Link to='/news'>News</Link>,
        },
    ]
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <Sider
    width={200}
    style={{
      background: colorBgContainer,
    }}
  >
    <Menu
      mode="inline"
      style={{
        height: '100%',
        borderRight: 0,
      }}
      items={items}
    />
  </Sider>
  )
}

export default SideBar