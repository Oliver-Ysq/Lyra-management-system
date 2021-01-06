import React from "react";
import styled from "styled-components";
import url from "../../assets/logo.png";
import head from "../../assets/test.jpg";
import {Link} from "react-router-dom";

const MyHeader = styled.header`
  font: 1rem "微软雅黑";
  color: #9E9AC5;
  font-weight: 400;
  background: rgb(229,233,255);
  height: 3.6rem;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 60px; max-height: 100%;
`;

const A = styled.a`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  text-decoration: none;
  height: 3.6rem;
  line-height: 3.6rem;
  color: #9E9AC5;
  &:hover{
   color: rgb(78,74,132);
  }
`;

const MyLink = styled(Link)`
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  text-decoration: none;
  height: 3.6rem;
  line-height: 3.6rem;
  color: #9E9AC5;
  &:hover{
   color: rgb(78,74,132);
  }
`;

const ProfileWrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  &:hover{
    cursor: pointer;
  }
`;

const ProfileDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const HoverList = styled.div`
  display: none;
  width: 120px;
  background: rgb(229,233,255);
  color: #7c7c7c;
  transform: translateX(-40px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 5px 5px 0 rgba(154,160,185,.05), 0 5px 30px 0 rgba(166,173,201,.22);
  ${ProfileDiv}:hover &{
    display: block;
  }
`;

const HoverItem = styled.div`
  font-size: 0.9rem;
  line-height: 2.5rem;
  height: 2.5rem;
  text-align: center;
  &:hover {
    background: #fff;
    cursor: pointer;
    color: rgb(78,74,132);
    font-weight: 600;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

let Header = () => {
  return (
    <MyHeader>
      <Left>
        <LogoWrapper>
          <Logo src={url} alt="logo"/>
        </LogoWrapper>
        <A href="https://chuyanjihua.icu/solfeggio/html/home.html">主页</A>
        <A href="https://chuyanjihua.icu/solfeggio/html/curriculum.html">课程</A>
        <A href="https://chuyanjihua.icu/solfeggio/html/practice.html">练习</A>
        <A href="https://chuyanjihua.icu/solfeggio/html/ask.html">交流</A>
      </Left>
      <Right>
        <MyLink to='/login'>登录</MyLink>
        <MyLink to='/setup'>注册</MyLink>
        <ProfileWrapper>
          <ProfileDiv>
            <Profile src={head} mode="aspectFit"/>
            <HoverList>
              <HoverItem>个人中心</HoverItem>
              <HoverItem>退出登录</HoverItem>
            </HoverList>
          </ProfileDiv>
        </ProfileWrapper>


      </Right>
    </MyHeader>
  );
};

export default Header;