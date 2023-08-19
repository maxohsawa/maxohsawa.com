import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import ScrollToTop from '../components/ScrollToTop'

import '../root.css'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default Root