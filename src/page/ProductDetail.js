import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/eunbaming/HnM-website/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect (() => {
    getProductDetail()
  }, []);

  return (
    <Container className='detail-container'>
      <Row>
        <Col md={6} sm={12} className='detail-img'>
          <img src={product?.img} width={350}/>
        </Col>
        <Col md={6} sm={12} className='detail-area'>
          <div>
            <h3>{product?.title}</h3>
            <h5>₩{product?.price}</h5>
            <div>{product?.choice == true? "Conscious Choice" : ""}</div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default ProductDetail;
