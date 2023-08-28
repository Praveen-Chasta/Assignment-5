import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-items">
        <div className="nav-website-logo">
          <Link to="/" className="nav-link">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="not found"
            />
          </Link>
        </div>

        <ul className="nav-item">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
        </ul>

        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  </>
)

export default withRouter(Header)
