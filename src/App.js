import './App.css';
import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import Class from "./pages/Class/Class";
import Lesson from "./pages/Lesson/Lesson";
import Test from "./pages/Test/Test";
import Work from "./pages/Work/Work";
import MyInfo from "./pages/MyInfo/MyInfo";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Setup from "./pages/Setup/Setup";

const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

// 前台： https://chuyanjihua.icu/solfeggio/html/mylesson.html

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Switch>
          <Route path="/" exact component={Class}/>
          <Route path="/lesson" exact component={Lesson}/>
          <Route path="/test" exact component={Test}/>
          <Route path="/work" exact component={Work}/>
          <Route path="/myInfo" exact component={MyInfo}/>
          <Route path="/settings" exact component={Settings}/>

          <Route path="/login" exact component={Login}/>
          <Route path="/setup" exact component={Setup}/>
        </Switch>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
