import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const NavLinkItem = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 481px) {
    max-width: 254px;
  }

`

const CTA = ({ path, name }) => {
  return (
    <NavLinkItem>
      <NavLink 
        to={path}
        className="active call-to-action"
      >
          {name}
      </NavLink>
    </NavLinkItem>
  )
}

export default CTA