import React, { useEffect, useState } from 'react'
import { Typography,Row,Col, Card, Select, Avatar  } from 'antd'
import{Link} from 'react-router-dom'
import SpinnerComponent from './SpinnerComponent'
import Message from './Message'
import { useGetNewsQuery } from '../services/newsApi'
import moment from 'moment/moment'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Spinner } from 'react-bootstrap'
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const { Text, Title } = Typography;
const { Option } = Select;
const News = ({simplified}) => {
  const count=simplified?10:100
  const [filteredValue, setFilteredValue] = useState('Cryptocurrencies')
  const {isError,isLoading,isSuccess,data  }=useGetNewsQuery({newsCategory:filteredValue,count})
  const {isError:GetCryptosError,isLoading:GetCryptosLoading,isSuccess:GetCryptosSuccess,data:GetCryptosData}=useGetCryptosQuery(count)
  const[cryptoNews,setCryptoNews]=useState(data?.value)
 
  useEffect(() => {
    setCryptoNews(data?.value)
   }, [data])
  let content
  if(isLoading){
    content=<SpinnerComponent/>
  }else if(isError){
    content=<Message/>
  }else if(isSuccess){
    content=
    <>
          <Row gutter={[24, 24]}>
            {!simplified && (
              <Col span={24}>
                <Select
                  disabled={!GetCryptosData}
                  showSearch
                  className="select-news"
                  placeholder="Select a Crypto"
                  optionFilterProp="children"
                  onChange={(e)=>setFilteredValue(e)}
                  filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option value="Cryptocurency">Cryptocurrency</Option>
                  {GetCryptosData?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
                </Select>
                <Spinner size="sm" hidden={GetCryptosData}></Spinner>
              </Col>
            )}
            {cryptoNews?.map((news, i) => (
              <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className="news-card">
                  <a href={news.url} target="_blank" rel="noreferrer">
                    <div className="news-image-container">
                      <Title className="news-title" level={4}>{news.name}</Title>
                      <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    </div>
                    <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                    <div className="provider-container">
                      <div>
                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                        <Text className="provider-name">{news.provider[0]?.name}</Text>
                      </div>
                      <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                    </div>
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
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

export default News