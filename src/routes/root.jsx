import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import ScrollToTop from '../components/ScrollToTop'

import '../root.css'

const BodyContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
`

const Main = styled.main`
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 481px) {
    width: 90%;
  }
  
  @media screen and (min-width: 769px) {
    width: 85%;
  }
  
  @media screen and (min-width: 1025px) {
    width: 871px;
  }
`

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <BodyContainer>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </BodyContainer>
    </>
  )
}

export default Root