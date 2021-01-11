import React from "react";
import styled from "styled-components";
import Catalog from "../../component/Catalog/Catalog";
import MyList from "../../component/List/MyList";
import url from "../../assets/test.jpg";
import {useHistory} from "react-router";

const Layout = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
`;

const Settings = (props) => {
  const data = [
    {key: "界面样式自定义", value: "待实现"}
  ];

  const key = useHistory().location.pathname.substring(1);
  return (
    <Layout>
      <Catalog selected={key || 'class'}/>
      <MyList title={'作业列表'} data={data} type={1}/>
    </Layout>
  );
};

export default Settings;