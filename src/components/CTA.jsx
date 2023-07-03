import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const NavLinkItem = styled.div`
  display: flex;
  justify-content: center;
`

const CTA = ({ path, name }) => {
  return (
    <NavLinkItem>
      <NavLink 
        to={path}
        className="active"
        style={
          {
            width: "60vw",
            padding: "15px",
            fontSize: "1.2rem"
          }
        }
        >
          {name}
      </NavLink>
    </NavLinkItem>
  )
}

export default CTA