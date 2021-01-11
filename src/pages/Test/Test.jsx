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

const Test = (props) => {

  const columns = [
    {
      title: '题目id',
      dataIndex: 'id',
    },
    {
      title: '已做人数',
      dataIndex: 'done',
    },
    {
      title: '正确率',
      dataIndex: 'correctRate',
    },
    {
      title: '难度等级',
      dataIndex: 'level',
    },
    {
      title: '详细信息',
      dataIndex: 'info',
      render: () => (
        <Space size="middle">
          <a>查看</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: 301000000000000010101,
      done: 0,
      correctRate: 0,
      level: "01",
    }, {
      id: 301000000000000010101,
      done: 0,
      correctRate: 0,
      level: "01",
    }
  ];

  const key = useHistory().location.pathname.substring(1)
  console.log(key)
  return (
    <Layout>
      <Catalog selected={key || 'class'}/>
      <MyList title={'题目列表'} columns={columns} data={data}/>
    </Layout>
  );
};

export default Test;