import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand h1">Todo List</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-3">
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? 'nav-link active' : 'navlink'}
                aria-current={({ isActive }) => isActive ? 'page' : ''}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/user"
                className={({ isActive }) => isActive ? 'nav-link active' : 'navlink'}
                aria-current={({ isActive }) => isActive ? 'page' : ''}
              >
                User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
