import React, { useState, useEffect } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams()

  const getProducts = async () => {
    let searchQuery = query.get('q') || ""
    let url = `http://localhost:5001/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    console.log("data", data)
    setProductList(data)
  }

    useEffect(() => {
      getProducts()
    }, [query])

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
