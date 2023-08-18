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

  @media screen and (min-width: 769px) {
    padding: 0 10vw;
  }

  @media screen and (min-width: 1025px) {
    padding: 0 15vw;
  }

  @media screen and (min-width: 1201px) {
    padding: 0 20vw;
  }
`

const NavListItem = styled.li`
  display: flex;
  justify-content: center;
  min-width: 4rem;

  @media screen and (min-width: 481px) {
    min-width: 6rem;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 769px) {
    min-width: 8rem;
    font-size: 1.4rem;
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