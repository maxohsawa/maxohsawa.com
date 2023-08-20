import { styled } from 'styled-components'
import Brand from './brand'
import Navbar from './navbar'

const Header = () => {

  const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  `

  return (
    <>
      <HeaderContainer >
        <Brand />
        <Navbar />
      </HeaderContainer>
    </>
  )
}

export default Header