import React from "react";
import styled from "styled-components";

const MyFooter = styled.footer`
  font-size: 0.75rem;
  color: #bcc9dd;
  font-family: 'Raleway', arial,serif;
  font-weight: 400;
  background: rgb(10,28,67);
  height: 3rem;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

let Footer = () => {
  return (
    <MyFooter>
      <div>Copyright © 2019.Lyra All rights reserved.</div>
    </MyFooter>
  );
};

export default Footer;