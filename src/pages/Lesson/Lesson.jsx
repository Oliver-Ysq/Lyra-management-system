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

const Lesson = (props) => {

  const columns = [
    {
      title: '课程号',
      dataIndex: 'lessonId',
    },
    {
      title: '教师号',
      dataIndex: 'teacherId',
    },
    {
      title: '上课学期',
      dataIndex: 'term',
    },
    {
      title: '课程名',
      dataIndex: 'lessonName',
    },
    {
      title: '课程等级',
      dataIndex: 'lessonLevel',
    },
    {
      title: '课程类型',
      dataIndex: 'lessonType',
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
      lessonId: '2021012',
      teacherId: '2010218345',
      term: '2020-2021',
      lessonName: '视唱',
      lessonLevel: '01',
      lessonType: 2
    },
    {
      lessonId: '2021012',
      teacherId: '2010218345',
      term: '2020-2021',
      lessonName: '视唱',
      lessonLevel: '01',
      lessonType: 2
    },
    {
      lessonId: '2021012',
      teacherId: '2010218345',
      term: '2020-2021',
      lessonName: '视唱',
      lessonLevel: '01',
      lessonType: 2
    },
  ];

  const key = useHistory().location.pathname.substring(1);
  return (
    <Layout>
      <Catalog selected={key || 'class'}/>
      <MyList title={'课程列表'} columns={columns} data={data}/>
    </Layout>
  );
};

export default Lesson;