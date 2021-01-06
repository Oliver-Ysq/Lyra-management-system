import React from "react";
import styled from "styled-components";
import Catalog from "../Catalog/Catalog";

const Layout = styled.div`
  box-sizing: border-box;
  width: 100vw;
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

let Class = () => {
  return (
    <Layout>
      <Catalog/>
      <Content>

      </Content>
    </Layout>
  );
};

export default Class;