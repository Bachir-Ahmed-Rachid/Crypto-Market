import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic  } from 'antd'
import{Link} from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import SpinnerComponent from './SpinnerComponent'
import Message from './Message'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
const{Title}=Typography
const Home = () => {
  const {isError,isLoading,isSuccess,data  }=useGetCryptosQuery(10)
  const state=data && data.data && data.data.stats
  let content
  if(isLoading){
    content=<SpinnerComponent/>
  }else if(isError){
    content=<Message/>
  }else if(isSuccess){
    content=
    <>
    <Title level={2} className='heading'>Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic  title='Total Cryptocurrencies' value={millify(state.total)}/></Col>
      <Col span={12}><Statistic  title='Total Exchanges' value={millify(state.totalExchanges)}/></Col>
      <Col span={12}><Statistic  title='Total Market Cap' value={millify(state.totalMarketCap)}/></Col>
      <Col span={12}><Statistic  title='Total Total 24h Volume' value={millify(state.total24hVolume)}/></Col>
      <Col span={12}><Statistic  title='Total Markets' value={millify(state.totalMarkets)}/></Col>
    </Row>    
    <Row>
      <Col span={16}>
      <Title level={2}>Top 10 Cryptocurrencies in the world</Title>
      </Col>
      <Col span={8}>
      <Title level={3}><Link to='/cryptoCurrencies'>Show More</Link></Title>
      </Col>
    </Row>
    <Cryptocurrencies simplified/>

    <Row>
      <Col span={12}>
      <Title level={2}>Top 10 News in the world</Title>
      </Col>
      <Col span={12}>
      <Title level={3}><Link to='/news'>Show More</Link></Title>
      </Col>
    </Row>
    <News simplified/>
  </>
  }else{
    <></>
  }

  return (
    <>
      {content}
    </>
  )
}

export default Home