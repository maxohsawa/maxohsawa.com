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

`

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const NavListItem = styled.li`
  display: flex;
  justify-content: center;
  margin: 0 5px;

  @media screen and (min-width: 481px) {
    margin: 0 10px;
  }
`

// https://reactrouter.com/en/main/start/tutorial#active-link-styling

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <NavList>
          {links && links.map(({text, path}, index) => {
            return (
              <NavListItem key={`navlink${index}`}>
                <NavLink
                  to={path}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "nav-link active"
                      : isPending
                      ? "nav-link pending"
                      : "nav-link inactive"
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