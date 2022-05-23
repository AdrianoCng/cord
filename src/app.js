import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import * as sizes from "./breakpoints";

import './css/app.scss';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <PageContainer>
          <SideNavBar {...this.props} />
          <ContentWrapper>
            <Switch>
              <Route path="/discover" component={Discover} {...this.props} />
            </Switch>
          </ContentWrapper>
        </PageContainer>
      </Router>
    );
  }
}


const ContentWrapper = styled.main`
  padding-left: 280px;

  @media (max-width: ${sizes.tablet}) {
    padding-left: 0;
  }
`

const PageContainer = styled.main`
  overflow-x: hidden;
  min-width: 348px;
`
