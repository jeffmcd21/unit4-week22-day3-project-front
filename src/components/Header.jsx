
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <nav className='nav'>
        <Link to="/">
            <div className='background-image'>
              {/* <img src="https://www.teamclipart.com/wp-content/uploads/2021/12/Tribal-Baseball-Clipart-0010-TC.jpg" width="200" height="200"></img> */}
                <h1 className="font-color">The Home of Baseball</h1>
            </div>
        </Link>
        <hr/>
    </nav>
  )
}

export default Header
