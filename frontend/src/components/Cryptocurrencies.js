import React, { useEffect, useState } from 'react'
import { Typography,Row,Col,Statistic, Card, Input  } from 'antd'
import{Link} from 'react-router-dom'
import SpinnerComponent from './SpinnerComponent'
import Message from './Message'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
const Cryptocurrencies = ({simplified}) => {
  const count=simplified?10:100
  const {isError,isLoading,isSuccess,data  }=useGetCryptosQuery(count)
  const[cryptos,setCryptos]=useState([])
  const [searchInput, setSearchInput] = useState('')
  useEffect(() => {
   let findCrypto=data?.data?.coins.filter(e=>e.name.toLowerCase().includes(searchInput.toLowerCase()))
   setCryptos(findCrypto)
   
  }, [searchInput,data])
  
  let content
  if(isLoading){
    content=<SpinnerComponent/>
  }else if(isError){
    content=<Message/>
  }else if(isSuccess){
    content=
<>
    {!simplified?(
      <Input className='search-crypto' placeholder='search cryptocurrencies' onChange={(e)=>setSearchInput(e.target.value)}/>
    ):''}
    <Row gutter={[32,32]} className='crypto-card-container'>
      {cryptos?.map((currency,i)=>(
        <Col className='crypto-card' xs={24} sm={12} lg={6} key={i}>
          <Link to={`/cryptoCurrency/${currency.uuid}`}>
            <Card hoverable
              title={`${currency.rank} ${currency.name}`}
              extra={<img className="crypto-image  " src={currency.iconUrl}/>}
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p> Daily Change: {millify(currency.change)}</p>
              </Card>
          </Link>
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

export default Cryptocurrencies