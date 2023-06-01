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
  },
  {
    text: 'Contact',
    path: '/contact'
  }
]

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-basis: 1;
  justify-content: flex-start;
  align-items: center;
`

const NavListItem = styled.li`
  margin-right: 10px;
`

const Navbar = () => {
  return (
    <>
      <nav>
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
                      : ""
                    }
                >
                  {text}
                </NavLink>
              </NavListItem>
            )
          })}
        </NavList>
      </nav>
    </>
  )
}

export default Navbar