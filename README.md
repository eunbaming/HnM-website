# HnM 쇼핑몰 웹사이트

React route를 이용한 반응형 쇼핑몰 웹페이지 구축

![HnM-website](https://user-images.githubusercontent.com/110072947/221722617-c8eabcbf-a247-447f-95dc-8c2ef3f89617.png)

+ Demo : https://hnm-website.vercel.app/


### 개발 목표

React route를 사용하여 메인페이지 뿐만 아니라 상품 디테일 페이지, 로그인 페이지를 구축 및 반응형으로 개발


### 사용 기술

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=eunbaming)](https://github.com/eunbaming/github-readme-stats)


### Advanced Feature

+ 미디어 쿼리를 이용한 반응형 웹페이지

[Web ver.]

![HnM-website](https://user-images.githubusercontent.com/110072947/221722617-c8eabcbf-a247-447f-95dc-8c2ef3f89617.png)

![HnM-website](https://user-images.githubusercontent.com/110072947/221725602-2fdf70b5-2552-425d-a060-942fbfab3996.png)

![HnM-website](https://user-images.githubusercontent.com/110072947/221725683-d0554cc9-d819-4acc-901f-dd1747d0e2ab.png)

[Mobile ver.]

![HnM-website](https://user-images.githubusercontent.com/110072947/221725942-628b600e-088e-4762-aef6-82dd97fe199c.png)

![HnM-website](https://user-images.githubusercontent.com/110072947/221725991-41133847-6dde-4c7c-9fa8-aeb6db47a2f5.png)

![HnM-website](https://user-images.githubusercontent.com/110072947/221726081-18ccffed-405e-401c-b257-c509e9978dd6.png)

![HnM-website](https://user-images.githubusercontent.com/110072947/221726160-625bce93-d360-485f-b27f-05126cb3bddf.png){: width="50%" height="50%"}

+ 상품 검색 시 해당 키워드에 부합하는 상품이 보이도록 개발

![HnM-website](https://user-images.githubusercontent.com/110072947/221727174-695dc4fe-6a48-42f0-ba67-62b4cd738950.png)

+ private page를 만들어서 로그인을 안하고 상품을 검색하면 로그인 페이지를, 로그인을 한 상태라면 상품 디테일 페이지로 보이도록 개발

```javascript
import React from 'react';
import ProductDetail from '../page/ProductDetail';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({authenticate}) => {
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />
};

export default PrivateRoute;
```


# 개선 사항

+ 상품 검색 뿐만 아니라 카테고리를 눌렀을 때에도 상품이 검색 필요

+ web버전 로그인 페이지를 사용자의 편의에 맞게 개선된 디자인 필요



