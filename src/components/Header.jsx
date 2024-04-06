
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <nav className='nav'>
        <Link to="/">
            <div className='background-image'>
                <h1 className="font-color">A Field of Baseball</h1>
            </div>
        </Link>
        <hr/>
    </nav>
  )
}

export default Header
