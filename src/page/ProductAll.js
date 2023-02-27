import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    let url = `https://my-json-server.typicode.com/eunbaming/HnM-website/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts()
  }, [query]);

  return (
    <Container>
      <Row>
        {productList.map((product) => (
          <Col lg={3} sm={12} className='product-card-area'><ProductCard item={product}/></Col>
        ))}
      </Row>
    </Container>
  )
};

export default ProductAll;
