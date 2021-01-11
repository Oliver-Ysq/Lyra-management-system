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

const MyInfo = (props) => {
  const data = [
    {key: "用户头像", value: url},
    {key: "用户id", value: "owHu-4jpfnSsns-cm2FPMmO5OGsc"},
    {key: "所属班级", value: "2018211602"},
    {key: "专业", value: "作曲技术理论"},
    {key: "年级", value: "基础级"},
    {key: "学生id", value: "2018213274"},
    {key: "真实姓名", value: "黄秋子"},
    {key: "昵称", value: "藕"},
    {key: "用户权限", value: "学生用户"}
  ];

  const key = useHistory().location.pathname.substring(1);
  return (
    <Layout>
      <Catalog selected={key || 'class'}/>
      <MyList title={'作业列表'} data={data} type={1}/>
    </Layout>
  );
};

export default MyInfo;