import React, { useState }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);

  const goToLogin = () => {
    navigate('/login');
  };
  const goToMainPage = () => {
    navigate('/');
  };

  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    };
  };

  return (
    <div>
      <div className='side-menu' style={{width : width}}>
        <button className='closebtn' onClick={() => setWidth(0)}>&times;</button>
        <div className='side-menu-list' id='menu-list'>
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className='nav-header'>
        <div className='burger-menu hide'>
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)}/>
        </div>
        {authenticate ? (
          <div className='login-button' onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <div className='login'>로그아웃</div>
          </div>
        ) : (
          <div className='login-button' onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div className='login'>로그인</div>
          </div>
        )}
      </div>
      
      <div className='nav-section'>
        <img width={100} src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg' onClick={goToMainPage}/>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map(item => <li>{item}</li>)}
        </ul>
        <div className='search-area'>
          <FontAwesomeIcon icon={faSearch} />
          <input className='search-input' type='text' placeholder='제품 검색' onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  )
};

export default Navbar;
