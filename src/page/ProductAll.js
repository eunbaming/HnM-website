import React, { useState, useEffect } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const getProducts = async () => {
    let url = `http://localhost:5001/products`
    let response = await fetch(url)
    let data = await response.json()
    console.log("data", data)
    setProductList(data)
  }

    useEffect(() => {
      getProducts()
    }, [])

  return (
    <Container>
      <Row>
        {productList.map((product) => (
          <Col lg={3}><ProductCard item={product}/></Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductAll
