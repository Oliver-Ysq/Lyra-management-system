import React from "react";
import styled from "styled-components";
import Catalog from "../../component/Catalog/Catalog";
import MyList from "../../component/List/MyList";
import {Space} from "antd";
import {useHistory} from "react-router";

const Layout = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
`;

const Work = (props) => {

  const columns = [
    {
      title: '课程号',
      dataIndex: 'lessonID',
    },
    {
      title: '题目编号',
      dataIndex: 'quesID',
    },
    {
      title: '发布日期',
      dataIndex: 'date',
    },
    {
      title: '详细信息',
      dataIndex: 'info',
      render: () => (
        <Space size="middle">
          <a>查看</a>
          <a>修改(未实现)</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      lessonID: "0569",
      quesID: "003010100000000000001",
      date: "2019-08-19 00:00:00",
    },
    {
      lessonID: "0569",
      quesID: "004010100000000000001",
      date: "2019-08-19 00:00:00",
    },
  ];

  const key = useHistory().location.pathname.substring(1);
  return (
    <Layout>
      <Catalog selected={key || 'class'}/>
      <MyList title={'作业列表'} columns={columns} data={data}/>
    </Layout>
  );
};

export default Work;