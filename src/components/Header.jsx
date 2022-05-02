import PropTypes from 'prop-types'
import logo from '../logo-endless.svg'

function Header({text}) {
    return (
        <header className="bg-dark">
        <div className="container">
          <a
            href="https://endless.com"
            rel="noopener noreferrer"
          >
            <img src={logo} className="logo__image" alt={text} />
          </a>
        </div>
      </header>
    )
}

Header.defaultProps = {
    text: 'logo'
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header
