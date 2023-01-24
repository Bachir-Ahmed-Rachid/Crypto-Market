import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import 'antd/dist/reset.css';
import './index.css';
import { Layout,theme } from 'antd';
import { Cryptocurrencies, Exchange, Home, NavBar ,News,SideBar} from './components';
import Cryptocurrency from './components/Cryptocurrency';
const {  Content } = Layout;


const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{minHeight:'100vh'}}>
      <NavBar/>
    <Layout>
      <SideBar/>
      <Layout style={{padding: '0 24px 24px',}}>
        <Content style={{padding: 24,margin: 0,minHeight: 280,background: colorBgContainer,}}>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cryptoCurrency/:id" element={<Cryptocurrency />} />
          <Route exact path="/cryptoCurrencies" element={<Cryptocurrencies />} />
          <Route exact path="/exchange" element={<Exchange/> }/>
          <Route exact path="/news" element={<News />} />
        </Routes>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default App





