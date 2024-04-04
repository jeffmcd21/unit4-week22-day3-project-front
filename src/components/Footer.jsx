
import { Link } from "react-router-dom"
 
 const Footer = () => {
   return (
    <div className="footer-container">
        <div className="footer-details">
    <Link to="/">
        <div>Baseball</div>
    </Link>
            <h5>
                <a href="https://github.com/jeffmcd21"> GitHup | 
                    <i class="fa-solid fa-biohazard fa-fade"></i></a>
                <h6>Click for GitHub Repo</h6>
            </h5>
        </div>
    </div>
   )
 }
 
 export default Footer