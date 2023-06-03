import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const links = [
  {
    text: 'About',
    path: '/'
  },
  {
    text: 'Skills',
    path: '/skills'
  },
  {
    text: 'Projects',
    path: '/projects'
  },
  {
    text: 'Experience',
    path: '/experience'
  }
];

const NavContainer = styled.nav`
  margin-top: 20px;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-inline-start: 0px;
`

const NavListItem = styled.li`
  display: flex;
  justify-content: center;
  
`

// https://reactrouter.com/en/main/start/tutorial#active-link-styling

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <NavList>
          {links && links.map(({text, path}, index) => {
            return (
              <NavListItem>
                <NavLink
                  to={path}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : "inactive"
                    }
                >
                  {text}
                </NavLink>
              </NavListItem>
            )
          })}
        </NavList>
      </NavContainer>
    </>
  )
}

export default Navbar