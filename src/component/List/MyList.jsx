import React from "react";
import styled from "styled-components";
import {Table, List} from 'antd';

const MyListWrapper = styled.div`
  flex: 1;
  padding: 2rem;
`;
const Mylist = styled.div`
  border-radius: 5px;
  box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border: none;
`;
const MyListHeader = styled.header`
  border-radius: 5px;
  padding: 1.5rem 2rem;
  box-shadow: 0 0.125rem 0.8rem rgba(0, 0, 0, 0.1);
  font-size: 1.125rem;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  line-height: 1.2;
  color: inherit;
  letter-spacing: 0.2em;
  text-transform: uppercase!important;
`;

const MyTable = styled(Table)`
  padding: 2rem;
`;

const Form = styled(List)`
  padding: 2rem 12rem;
`;

const MyImg = styled.img`
  max-width: 3rem;
  max-height: 3rem;
  border-radius: 50%;
`;

let MyList = (props) => {
  const Type = props.type;
  const table = !Type ? (<MyTable columns={props.columns} dataSource={props.data} pagination={false}/>) : (
    <Form
      bordered
      dataSource={props.data}
      renderItem={(item, index) => (
        <List.Item key={index}>
          <div>{item.key}</div>
          {item.key === "用户头像" ? <MyImg src={item.value} alt=""/> : <div>{item.value}</div>}
        </List.Item>
      )}
    />
  );
  return (
    <MyListWrapper>
      <Mylist>
        <MyListHeader>{props.title}</MyListHeader>
        {table}
      </Mylist>
    </MyListWrapper>
  );

};

export default MyList;