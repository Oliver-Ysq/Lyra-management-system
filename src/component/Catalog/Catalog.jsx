import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Menu} from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  ContainerOutlined,
  ReadOutlined,
  SettingOutlined,
  UserOutlined
} from "@ant-design/icons";
import {useHistory} from "react-router";

const Nav = styled.nav`
  min-height: 100%;
  width: 10rem;
  text-align: center;
  box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1);
`;
const MyMenu = styled(Menu)`
  height: calc(100% - 3.8rem);
`;
const MyMenuItem = styled(Menu.Item)`
  text-align: left!important;
  color: #6c757d;
  padding-left: 1.5rem!important;
`;
const Label = styled.div`
  color: #ced4da !important;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif !important;
  letter-spacing: 0.2em;
  font-weight: 700!important;
  text-transform: uppercase!important;
  padding: 1.5rem!important;
  margin: 0;
  text-align: left;
`;

let Catalog = (props) => {
  const history = useHistory();
  const handleClick = e => {
    history.push({
      pathname: '/' + (e.key === "class" ? "" : e.key)
    });
  };
  return (
    <Nav>
      <Label>Lyra</Label>
      <MyMenu
        defaultSelectedKeys={[props.selected]}
        mode="inline"
        theme="light"
        onClick={handleClick}
      >
        <MyMenuItem key="class" icon={<AppstoreOutlined/>}>
          班级管理
        </MyMenuItem>
        <MyMenuItem key="lesson" icon={<BarChartOutlined/>}>
          课程管理
        </MyMenuItem>
        <MyMenuItem key="test" icon={<ContainerOutlined/>}>
          题目管理
        </MyMenuItem>
        <MyMenuItem key="work" icon={<ReadOutlined/>}>
          作业管理
        </MyMenuItem>
        <MyMenuItem key="myInfo" icon={<UserOutlined/>}>
          个人资料
        </MyMenuItem>
        <MyMenuItem key="settings" icon={<SettingOutlined/>}>
          系统设置
        </MyMenuItem>
      </MyMenu>
    </Nav>
  );
};

export default Catalog;