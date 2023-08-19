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
                      ? "active"
                      : isPending
                      ? "pending"
                      : "inactive"
                  }
                  style={{
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    textAlign: 'center',
                    width: '100%'
                  }}
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