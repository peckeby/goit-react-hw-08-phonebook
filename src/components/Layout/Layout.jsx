import React from 'react';
import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import { Header, HeaderTitle, Footer, Container } from './Layout.styled';
import { GlobalStyle } from 'components/GlobalStyles';
import Navigation from 'components/Navigation/Navigation';

function Layout() {
  return (
    <div className="mainContainer">
      <Header>
        <Container>
          <HeaderTitle>
            <span role="img" aria-label="person icon">
              👥
            </span>{' '}
            Bookyphone
          </HeaderTitle>
          <Navigation />
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer>(c) Peckeby</Footer>
      <GlobalStyle />
    </div>
  );
}

export default Layout;
