# HnM 쇼핑몰 웹사이트

<br/>

![HnM-website](https://user-images.githubusercontent.com/110072947/221722617-c8eabcbf-a247-447f-95dc-8c2ef3f89617.png)

+ Demo : https://hnm-website.vercel.app/

<br/>
<br/>

### 개발 목표

React route를 사용하여 메인페이지 뿐만 아니라 상품 디테일 페이지, 로그인 페이지를 구축 및 반응형으로 개발

<br/>
<br/>

### 사용 기술

<a href="#"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white"/></a>

<br/>
<br/>

### Advanced Feature

+ 상품 검색 시 해당 키워드에 부합하는 상품이 보이도록 구현

![HnM-website](https://user-images.githubusercontent.com/110072947/221727174-695dc4fe-6a48-42f0-ba67-62b4cd738950.png)

<br/>

+ private page를 만들어서 로그인을 안하고 상품을 검색하면 로그인 페이지를, 로그인을 한 상태라면 상품 디테일 페이지로 보이도록 기능 현구현

```javascript
import React from 'react';
import ProductDetail from '../page/ProductDetail';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({authenticate}) => {
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />
};

export default PrivateRoute;
```

<br/>

+ Media Query를 이용한 반응형 웹페이지 개발

[Web ver.]

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221722617-c8eabcbf-a247-447f-95dc-8c2ef3f89617.png" width="250"></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221725602-2fdf70b5-2552-425d-a060-942fbfab3996.png" width="250"></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221725683-d0554cc9-d819-4acc-901f-dd1747d0e2ab.png" width="250"></a>

[Mobile ver.]

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221725942-628b600e-088e-4762-aef6-82dd97fe199c.png" width="400"></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221725991-41133847-6dde-4c7c-9fa8-aeb6db47a2f5.png" width="400"></a>

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221726081-18ccffed-405e-401c-b257-c509e9978dd6.png" width="400"><a href="#">
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221726160-625bce93-d360-485f-b27f-05126cb3bddf.png" width="400"><a href="#">

<br/>
<br/>

# 개선 사항

+ 상품 검색 뿐만 아니라 카테고리를 눌렀을 때에도 상품이 검색 필요

+ web버전 로그인 페이지를 사용자의 편의에 맞게 개선된 디자인 필요



