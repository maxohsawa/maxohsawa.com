import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

const Main = styled.main`
  height: 70vh;
`

const Root = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default Root