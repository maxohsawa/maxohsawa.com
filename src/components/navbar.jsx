import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to={'/'}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
                }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/skills'}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
                }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/projects'}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
                }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/experience'}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
                }
            >
              experience
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar