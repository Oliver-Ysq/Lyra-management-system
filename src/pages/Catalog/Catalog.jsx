import React from "react";
import styled from "styled-components";
import {Menu} from "antd";

const Nav = styled.nav`
  min-height: 100%;
  width: 12rem;
  text-align: center;
`;
const MyMenu = styled(Menu)`
  height: 100%;
`;
const MyMenuItem = styled(Menu.Item)`
  padding-left: 0!important;
  text-align: center!important;
`;

let Catalog = () => {

  // const [collapsed, setCollapsed] = React.useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(() => !this.state.collapsed);
  // };

  return (
    <Nav>
      <MyMenu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="light"
      >
        <MyMenuItem key="1">
          班级管理
        </MyMenuItem>
        <MyMenuItem key="2">
          课程管理
        </MyMenuItem>
        <MyMenuItem key="3">
          题目管理
        </MyMenuItem>
        <MyMenuItem key="4">
          作业管理
        </MyMenuItem>
        <MyMenuItem key="5">
          个人资料
        </MyMenuItem>
        <MyMenuItem key="6">
          系统设置
        </MyMenuItem>
      </MyMenu>
    </Nav>
  );
};

export default Catalog;