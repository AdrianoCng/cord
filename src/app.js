import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import * as sizes from "./breakpoints";

import './css/app.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: false,
    };

    this.toogleSidebar = this.toogleSidebar.bind(this);
  }

  toogleSidebar() {
    this.setState(prev => ({
      isSidebarOpen: !prev.isSidebarOpen
    }));
  }

  render() {
    return (
      <Router>
        <PageContainer>
          <SideNavBar toogleSidebar={this.toogleSidebar} isOpen={this.state.isSidebarOpen} />
          <ContentWrapper>
            <Switch>
              <Route path="/discover" render={props => <Discover toogleSidebar={this.toogleSidebar} {...props} />} />
            </Switch>
          </ContentWrapper>
        </PageContainer>
      </Router>
    );
  }
}


const ContentWrapper = styled.main`
  padding-left: 280px;

  @media (max-width: ${sizes.laptop}) {
    padding-left: 0;
  }
`

const PageContainer = styled.main`
  overflow-x: hidden;
  min-width: 348px;
`
