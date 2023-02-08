import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성']

  return (
    <div>
      <div>
        <div className='login-button'>
          <FontAwesomeIcon icon={faUser} />
          <div className='login'>로그인</div>
        </div>
      </div>
      <div className='nav-section'>
        <img width={100} src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg' />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map(item => <li>{item}</li>)}
        </ul>
        <div className='search-area'>
          <FontAwesomeIcon icon={faSearch} />
          <input className='search-input' type='text' placeholder='제품 검색' />
        </div>
      </div>
    </div>
  )
}

export default Navbar