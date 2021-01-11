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

const Class = (props) => {
  const columns = [
    {
      title: '绑定微信',
      dataIndex: 'wx',
      key: 'wx'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '学号',
      dataIndex: 'stuID',
      key: 'stuID'
    },
    {
      title: '班级号',
      dataIndex: 'classID',
      key: 'classID'
    },
    {
      title: '专业',
      dataIndex: 'major',
      key: 'major'
    },
    {
      title: '等级',
      dataIndex: 'level',
      key: 'level'
    },
    {
      title: '唯一加课码',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: '作业完成次数',
      dataIndex: 'HomeworkTimes',
      key: 'HomeworkTimes'
    },
    {
      title: '平均成绩',
      dataIndex: 'avgScore',
      key: 'avgScore'
    },
    {
      title: '详细信息',
      dataIndex: 'info',
      key: 'info',
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
      wx: "ysq17702227132",
      name: "oliver",
      stuID: "2018211452",
      classID: "2018210",
      major: "作曲技术理论",
      level: "基础级",
      code: "258",
      HomeworkTimes: 5,
      avgScore: 80
    },
    {
      wx: "ysq17702227132",
      name: "oliver",
      stuID: "2018211452",
      classID: "2018210",
      major: "作曲技术理论",
      level: "基础级",
      code: "258",
      HomeworkTimes: 5,
      avgScore: 80
    }, {
      wx: "ysq17702227132",
      name: "oliver",
      stuID: "2018211452",
      classID: "2018210",
      major: "作曲技术理论",
      level: "基础级",
      code: "258",
      HomeworkTimes: 5,
      avgScore: 80
    },
  ];
  const key = useHistory().location.pathname.substring(1);
  return (
    <Layout>
      <Catalog selected={key || 'class'}/>
      <MyList title={'班级学生列表'} columns={columns} data={data}/>
    </Layout>
  );
};

export default Class;