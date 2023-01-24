import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptoQuery } from '../services/cryptoApi'

const Cryptocurrency = () => {
    const{id}=useParams()
    const{isError,isLoading,isSuccess,data}=useGetCryptoQuery(id)
    console.log(data)
  return (
    <div>Cryptocurrency</div>
  )
}

export default Cryptocurrency